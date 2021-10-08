package com.examly.springapp;

public class cartAddModel{
    private String quantity;
    private String userId;

    cartAddModel(String quantity, String userId){
        this.userId = userId;
        this.quantity = quantity;
    }

    public String getQuantity(){
        return this.quantity;
    }
    public void setQuantity(String quantity){
        this.quantity = quantity;
    }

    public void setUserId(String userId){
        this.userId = userId;
    }
    public String getUserId(){
        return this.userId;
    }
}