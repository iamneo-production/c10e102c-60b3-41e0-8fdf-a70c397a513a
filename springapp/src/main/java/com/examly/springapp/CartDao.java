package com.examly.springapp;
import org.springframework.data.repository.CrudRepository;

public interface CartDao extends CrudRepository<CartModel, String>
{
    
}
