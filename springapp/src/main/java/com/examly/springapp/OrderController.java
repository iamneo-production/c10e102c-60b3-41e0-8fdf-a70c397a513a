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
    public List<OrderTemp> getUserProducts(@RequestBody String id) {
        return orderService.getUserProducts(id);
    }
    @RequestMapping(method=RequestMethod.POST, value="/saveOrder")
    public Boolean saveProduct(@RequestBody String id) {
        return orderService.saveProduct(id);
    }
    @RequestMapping(method=RequestMethod.POST, value="/placeOrders")
    public Boolean orderPlaced(@RequestBody OrderModel order) {
        return orderService.orderPlaced(order);
    }

}
