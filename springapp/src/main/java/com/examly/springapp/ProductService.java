package com.examly.springapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;

    List<ProductModel> getProduct()
    {
        List<ProductModel> products=new ArrayList<>();
        productRepository.findAll().forEach(products::add);
        return products;
    }

    List<ProductModel> getHomeProduct()
    {
        List<ProductModel> productsHome=new ArrayList<>();
        productRepository.findAll().forEach(productsHome::add);
        return productsHome;
    }

    ProductModel productEditData(String id)
    {
        Optional<ProductModel> prodOptional = productRepository.findById(id);
        ProductModel prod = prodOptional.orElse(null);
        return prod;
    }

    void productEditSave(ProductModel data)
    {
        productRepository.save(data);
    }

    void productSave(ProductModel data)
    {
        productRepository.save(data);
    }
    void productDelete(String id)
    {
        productRepository.deleteById(id);
    }

}
