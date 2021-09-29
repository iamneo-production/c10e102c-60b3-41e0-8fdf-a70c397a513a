package com.examly.springapp;

import org.springframework.data.repository.CrudRepository;
public interface ProductRepository extends CrudRepository<ProductModel,String> {
    
}
