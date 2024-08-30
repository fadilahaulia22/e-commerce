package com.example.ecommerce.service.impl;

import org.springframework.stereotype.Service;

import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.model.User;
import com.example.ecommerce.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public User findUserById(Long userId) throws UserException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findUserById'");
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findUserProfileByJwt'");
    }
    
}
