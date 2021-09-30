package com.examly.springapp;

import java.io.ObjectInputFilter.Status;
import javax.persistence.*;
import java.util.*;
@Entity
@Table(name = "orders")
public class OrderModel {
    
    // Class Variables
    @Id
    private String orderId;
    @Transient
    private String userId;
    @Transient
    private String ProductName;
    @Transient
    private int quantity;
    private String totalPrice;
    private String Status;
    private String Price;

    @ManyToOne
    private UserModel user;

    @OneToMany
    private List<ProductModel> products;

    // No Args Constructor
    public OrderModel() {
    }

    // All Args Constructor
    public OrderModel(String orderId, String userId, String ProductName, int quantity, String totalPrice, String Status, String Price) {
        this.orderId = orderId;
        this.userId = userId;
        this.ProductName = ProductName;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
        this.Status = Status;
        this.Price = Price;
    }

    // Setters and Getters
    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }
    public String getOrderId() {
        return orderId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getUserId() {
        return userId;
    }
    public void setProductName(String ProductName) {
        this.ProductName = ProductName;
    }
    public String getProductName() {
        return ProductName;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setTotalPrice(String totalPrice) {
        this.totalPrice = totalPrice;
    }
    public String getTotalPrice() {
        return totalPrice;
    }
    public void setStatus(String Status) {
        this.Status = Status;
    }
    public String getStatus() {
        return Status;
    }
    public void setPrice(String Price) {
        this.Price = Price;
    }
    public String getPrice() {
        return Price;
    }

}
