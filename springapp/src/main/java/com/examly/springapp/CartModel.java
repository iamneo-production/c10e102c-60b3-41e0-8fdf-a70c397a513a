package com.examly.springapp;
import javax.persistence.*;
import com.examly.springapp.ProductModel;

// import java.beans.Transient;
import java.util.*;

@Entity
@Table(name = "cart")
public class CartModel {
    
    // Class Variables
    @Id
    private String cartItemId;
    @Transient
    private UserModel userId;
    @Transient
    private String ProductName;
    private int Quantity;
    private String Price;


    @OneToMany
    @JoinColumn(name = "productName")
    private List<ProductModel> products;

    @OneToOne
    private UserModel user;

    // No Args Constructor
    public CartModel() {
    }

    // All Args Constructor
    public CartModel(String cartItemId, UserModel userId, String ProductName, int Quantity, String Price) {
        this.cartItemId = cartItemId;
        this.userId = userId;
        this.ProductName = ProductName;
        this.Quantity = Quantity;
        this.Price = Price;
    }

    // Setters and Getters
    public void setCartItemId(String cartItemId) {
        this.cartItemId = cartItemId;
    }
    public String getCartItemId() {
        return cartItemId;
    }
    public void setUserId(UserModel userId) {
        this.userId = userId;
    }
    public UserModel getUserId() {
        return userId;
    }
    public void setProductName(String ProductName) {
        this.ProductName = ProductName;
    }
    public String getProductName() {
        return ProductName;
    }
    public void setQuantity(int Quantity) {
        this.Quantity = Quantity;
    }
    public int getQuantity() {
        return Quantity;
    }
    public void setPrice(String Price) {
        this.Price = Price;
    }
    public String getPrice() {
        return Price;
    }

}
