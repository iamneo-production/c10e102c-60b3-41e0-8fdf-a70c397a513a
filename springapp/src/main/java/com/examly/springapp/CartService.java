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
    @Autowired
    private UserDao dao;

    private static int cartItemId = 1;

    // Methods
    public UserModel addToCart(String quantity, String userId, String id) {

        Optional<ProductModel> productOptional = productRepository.findById(id);
        ProductModel product = productOptional.orElse(null);
        UserModel user = dao.findById(userId).get();
        CartModel cart = new CartModel(Integer.toString(cartItemId), user, product.getProductName(), Integer.parseInt(quantity), product.getPrice());
        cartRepository.save(cart);

        cartItemId++;
        return user;

    }
    public List<CartModel> show(){
        List<CartModel> products = new ArrayList<>();
        cartRepository.findAll().forEach(products::add);
        return products;
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
