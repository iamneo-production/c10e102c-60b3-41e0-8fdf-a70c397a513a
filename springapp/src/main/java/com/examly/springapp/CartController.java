package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@RestController
public class CartController {
    
    @Autowired
    private CartService cartService;

    // Methods
    @RequestMapping(method=RequestMethod.POST, value="/home/{id}")
    public void addToCart(@RequestBody String quantity, @RequestBody UserModel userId, @PathVariable String id) {
        cartService.addToCart(quantity, userId, id);
    }
    @RequestMapping(method=RequestMethod.GET, value="/cart/{id}")
    public List<CartTempModel> showCart(@PathVariable String id) {
        return cartService.showCart(id);
    }
    @RequestMapping(method=RequestMethod.POST, value="/cart/delete")
    public void deleteCartItem(@RequestBody String id) {
        cartService.deleteCartItem(id);
    }
    
}
