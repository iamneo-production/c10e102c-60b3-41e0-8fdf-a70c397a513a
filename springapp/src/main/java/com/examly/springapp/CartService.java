package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class CartService {
    
    @Autowired
    private CartRepository cartRepository;
    private ProductRepository productRepository;

    // Methods
    public void addToCart(String quantity, String id) {
        ProductModel product = productRepository.stream().filter(t -> t.getProductId().equals(id)).findFirst().get();
        CartModel cart = new CartModel(product.getProductName(), quantity, product.getPrice());
        cartRepository.save(cart);
    }
    public List<CartTempModel> showCart(String id) {

        List<CartModel> products = new ArrayList<>();
        List<CartTempModel> products_temp = new ArrayList<>();
        
        cartRepository.findAll().forEach(products::add);
        for(CartModel product:products) {
            if((product.getUserId()).equals(id)) {
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
