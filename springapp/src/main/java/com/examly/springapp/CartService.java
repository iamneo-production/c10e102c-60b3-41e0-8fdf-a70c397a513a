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
    private static int cartItemId = 1;

    // Methods
    public void addToCart(String quantity, UserModel userId, String id) {

        Optional<ProductModel> productOptional = productRepository.findById(id);
        ProductModel product = productOptional.orElse(null);

        CartModel cart = new CartModel(Integer.toString(cartItemId), userId, product.getProductName(), Integer.parseInt(quantity), product.getPrice());
        cartRepository.save(cart);

        cartItemId++;

    }
    public List<CartTempModel> showCart(String id) {

        List<CartModel> products = new ArrayList<>();
        List<CartTempModel> products_temp = new ArrayList<>();
        
        cartRepository.findAll().forEach(products::add);
        for(CartModel product:products) {
            if((product.getUserId().getEmail()).equals(id)) {
                CartTempModel temp = new CartTempModel(product.getProductName(), product.getQuantity(), product.getPrice());
                products_temp.add(temp);
            }
        }

        return products_temp;
        
    }
    public void deleteCartItem(String id) {
        cartRepository.deleteById(id);
    }
    
}
