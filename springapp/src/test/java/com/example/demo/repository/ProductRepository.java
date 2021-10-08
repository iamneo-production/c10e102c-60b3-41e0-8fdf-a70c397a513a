package com.example.demo.repository;

import com.example.model.ProductModel;

import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<ProductModel,String> {
    
}
