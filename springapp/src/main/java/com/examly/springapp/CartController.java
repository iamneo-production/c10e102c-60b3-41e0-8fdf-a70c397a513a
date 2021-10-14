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
    public UserModel addToCart( @PathVariable String id, @RequestBody cartAddModel cart) {
        return cartService.addToCart(cart.getQuantity(), cart.getUserId(), id);
    }
    @RequestMapping(method=RequestMethod.GET, value="/cart/{id}")
    public List<CartModel> showCart(@PathVariable String id) {
        return cartService.show();
    }
    @RequestMapping(method=RequestMethod.POST, value="/cart/delete")
    public void deleteCartItem(@RequestBody String id) {
        cartService.deleteCartItem(id);
    }
    
}
