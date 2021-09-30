package com.examly.springapp;
import org.springframework.data.repository.CrudRepository;


public interface OrderDao extends CrudRepository<OrderModel, String>
{
    
}
