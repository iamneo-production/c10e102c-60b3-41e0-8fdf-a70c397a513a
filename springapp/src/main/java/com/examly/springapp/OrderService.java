package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class OrderService {
    
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private ProductRepository productRepository;

    // Methods
    public List<OrderModel> getProducts() {

        List<OrderModel> orders = new ArrayList<>();
        orderRepository.findAll().forEach(orders::add);

        return orders;

    }
    public List<OrderTemp> getUserProducts(String id) {

        List<OrderModel> orders = new ArrayList<>();
        orderRepository.findAll().forEach(orders::add);

        List<OrderTemp> ordersTemp = new ArrayList<>();
        for(OrderModel order:orders) {
            if((order.getUserId()).equals(id)) {
                ProductModel product = productRepository.findByProductName(order.getProductName()).get(0);
                OrderTemp orderTemp = new OrderTemp(order.getProductName(), order.getQuantity(), order.getTotalPrice(), order.getPrice(), product.getImageUrl());
                ordersTemp.add(orderTemp);
            }
        }

        return ordersTemp;

    }
    public void saveProduct(String id) {

        List<CartModel> cartItems = new ArrayList<>();
        cartRepository.findAll().forEach(cartItems::add);

        for(CartModel cartItem:cartItems) {
            if(cartItem.getUserId().equals(id)) {
                OrderModel order = new OrderModel(id, cartItem.getProductName(), cartItem.getQuantity(), Integer.toString(cartItem.getQuantity()*Integer.parseInt(cartItem.getPrice())), "Success", cartItem.getPrice());
                orderPlaced(order);
            }
        }

        cartRepository.deleteAll();

    }
    public void orderPlaced(OrderModel order) {

        orderRepository.save(order);

        ProductModel product = productRepository.findByProductName(order.getProductName()).get(0);
        product.setQuantity(Integer.toString(Integer.parseInt(product.getQuantity())-order.getQuantity()));

        productRepository.save(product);

    }

}
