package com.examly.springapp;

public class CartTempModel {
    
    // Class Variables
    private String ProductName;
    private int Quantity;
    private String Price;
    private String imageUrl;

    // No Args Constructor
    public CartTempModel() {
    }

    // All Args Constructor
    public CartTempModel(String ProductName, int Quantity, String Price, String imageUrl) {
        this.ProductName = ProductName;
        this.Quantity = Quantity;
        this.Price = Price;
        this.imageUrl = imageUrl;
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
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    
}
