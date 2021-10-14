package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class CartService {
    
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductRepository productRepository;

    // Methods
    public void addToCart(String quantity, String userId, String id) {

        ProductModel product = productRepository.findByProductId(id).get(0);

        CartModel cart = new CartModel(userId, product.getProductName(), Integer.parseInt(quantity), product.getPrice());
        cartRepository.save(cart);

    }
    public List<CartTempModel> showCart(String id) {

        List<CartModel> cartItems = new ArrayList<>();
        cartRepository.findAll().forEach(cartItems::add);

        List<CartTempModel> cartItemsTemp = new ArrayList<>();
        for(CartModel cartItem:cartItems) {
            if(cartItem.getUserId().equals(id)) {
                ProductModel product = productRepository.findByProductName(cartItem.getProductName()).get(0);
                CartTempModel cartTemp = new CartTempModel(cartItem.getProductName(), cartItem.getQuantity(), cartItem.getPrice(), product.getImageUrl());
                cartItemsTemp.add(cartTemp);
            }
        }

        return cartItemsTemp;
        
    }
    public void deleteCartItem(String id) {
        cartRepository.deleteById(Long.parseLong(id));
    }
    
}
