package com.examly.springapp;
import org.springframework.data.repository.CrudRepository;

public interface ProductDao extends CrudRepository<ProductModel, String>
{
    
}
