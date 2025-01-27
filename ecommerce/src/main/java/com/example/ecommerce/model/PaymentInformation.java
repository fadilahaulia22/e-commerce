package com.example.ecommerce.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="payment_information")
public class PaymentInformation {
    
    @Column(name = "cardholder_name")
    private String cardholderName;

    @Column(name = "card_number")
    private String cardNumber;
    
    @Column(name = "expiration_date")
    private String expirationDate;

    @Column(name = "cvv")
    private String cvv;
}
