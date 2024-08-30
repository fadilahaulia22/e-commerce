package com.example.ecommerce.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtProvider {
    private final SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());

    public String generateToken(Authentication auth) {
        return Jwts.builder()
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 864000000)) // 10 days in milliseconds
            .claim("email", auth.getName())
            .signWith(key)
            .compact();
    }

    public String getEmailFromToken(String jwt) {
        String token = jwt.substring(7);
        Claims claims = Jwts.parserBuilder()
            .setSigningKey(key)
            .build()
            .parseClaimsJws(token)
            .getBody();
        return claims.get("email", String.class);
    }
}
