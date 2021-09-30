package com.examly.springapp;

public class CartTempModel {
    
    // Class Variables
    private String ProductName;
    private int Quantity;
    private String Price;

    // No Args Constructor
    public CartTempModel() {
    }

    // All Args Constructor
    public CartTempModel(String ProductName, int Quantity, String Price) {
        this.ProductName = ProductName;
        this.Quantity = Quantity;
        this.Price = Price;
    }

    // Setters and Getters
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
