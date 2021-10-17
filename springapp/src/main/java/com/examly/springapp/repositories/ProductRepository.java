package com.examly.springapp;
import java.util.*;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<ProductModel,Long> {
    List<ProductModel> findByProductId(Long productId);
    List<ProductModel> findByProductName(String productName);
}
