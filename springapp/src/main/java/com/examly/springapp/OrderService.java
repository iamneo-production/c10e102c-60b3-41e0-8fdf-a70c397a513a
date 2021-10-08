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
    @Autowired
    private UserDao userDao;

    // Methods
    public List<OrderModel> getProducts() {

        List<OrderModel> orders = new ArrayList<>();
        orderRepository.findAll().forEach(orders::add);

        return orders;

    }
    public List<OrderTemp> getUserProducts(String id) {

        List<OrderModel> orders = new ArrayList<>();
        List<OrderTemp> orders_temp = new ArrayList<>();
        
        orderRepository.findAll().forEach(orders::add);
        for(OrderModel order:orders) {
            if((order.getUserId()).equals(id)) {
                OrderTemp temp = new OrderTemp(order.getProductName(), order.getQuantity(), order.getTotalPrice(), order.getPrice());
                orders_temp.add(temp);
            }
        }

        return orders_temp;

    }
    public void saveProduct(String id) {

        List<CartModel> products = new ArrayList<>();
        cartRepository.findAll().forEach(products::add);

        for(CartModel product:products) {
            if((product.getUserId().getEmail()).equals(id)) {
                long orderId = Integer.parseInt(product.getUserId().getMobileNumber())*10 + Integer.parseInt(product.getCartItemId());
                OrderModel order = new OrderModel(Long.toString(orderId), id, product.getProductName(), product.getQuantity(), Integer.toString(product.getQuantity()*Integer.parseInt(product.getPrice())), "Success", product.getPrice());
                orderPlaced(order);
            }
        }

        CartService ob = new CartService();
        for(CartModel product:products) {
            if((product.getUserId()).equals(id)) {
                ob.deleteCartItem(product.getCartItemId());
            }
        }

    }
    public void orderPlaced(OrderModel order) {

        orderRepository.save(order);

        Optional<ProductModel> productOptional = productRepository.findById(order.getProductName());
        ProductModel product = productOptional.orElse(null);
        product.setQuantity(Integer.toString(Integer.parseInt(product.getQuantity())-order.getQuantity()));

        productRepository.deleteById(product.getProductName());
        productRepository.save(product);

    }

}
