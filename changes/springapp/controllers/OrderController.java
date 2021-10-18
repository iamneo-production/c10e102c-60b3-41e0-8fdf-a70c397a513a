package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@RestController
public class OrderController {
    
    @Autowired
    private OrderService orderService;

    // Methods
    @RequestMapping(method=RequestMethod.GET, value="/admin/orders")
    public List<OrderModel> getProducts() {
        return orderService.getProducts();
    }
    @RequestMapping(method=RequestMethod.POST, value="/orders")
    public List<OrderTemp> getUserProducts(@RequestBody IdModel id) {
        return orderService.getUserProducts(id.getId());
    }
    @RequestMapping(method=RequestMethod.POST, value="/saveOrder")
    public void saveProduct(@RequestBody IdModel id) {
        // return 
        orderService.saveProduct(id.getId());
    }
    @RequestMapping(method=RequestMethod.POST, value="/placeOrders")
    public void orderPlaced(@RequestBody OrderModel order) {
        // return 
        orderService.orderPlaced(order);
    }

}
