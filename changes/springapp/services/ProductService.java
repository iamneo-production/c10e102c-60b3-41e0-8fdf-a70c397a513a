package com.examly.springapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CartRepository cartRepository;
    
    public List<ProductModel> getProduct()
    {
        List<ProductModel> products=new ArrayList<>();
        productRepository.findAll().forEach(products::add);
        return products;
    }

    public List<ProductModel> getHomeProduct()
    {
        List<ProductModel> productsHome=new ArrayList<>();
        productRepository.findAll().forEach(productsHome::add);
        return productsHome;
    }

    public ProductModel productEditData(String id)
    {
        try{
            return productRepository.findByProductId(Long.parseLong(id)).get(0);
        }
        catch(Exception e)
        {
            return new ProductModel();
        }
    }

    public void productEditSave(ProductModel data)
    {
        if(productRepository.findByProductName(data.getProductName()).size()==1)
        {
        	productRepository.save(data);
        }

        List<CartModel> cartItems = new ArrayList<>();
        cartRepository.findAll().forEach(cartItems::add);
        for(CartModel cartItem:cartItems) 
        {
            if(cartItem.getProductName().equals(data.getProductName())) 
            {
                cartItem.setPrice(data.getPrice());
            }
            cartRepository.save(cartItem);
        }
        // return true;
    }

    public void productSave(ProductModel data)
    {
        if(productRepository.findByProductName(data.getProductName()).size()!=0)
        {
        //     return false;
        }
        productRepository.save(data);
        // return true;
    }
    public void productDelete(String id)
    {
        try
        {
            ProductModel product = productRepository.findByProductId(Long.parseLong(id)).get(0);
            productRepository.deleteById(product.getProductId());
            List<CartModel> cartItems = new ArrayList<>();
            cartRepository.findAll().forEach(cartItems::add);
            for(CartModel cartItem:cartItems) 
            {
                if(cartItem.getProductName().equals(product.getProductName()))
                {
                    cartRepository.deleteById(cartItem.getCartItemId());
                }
            }
        }
        catch(Exception e)
        {
        //     return false;
        }
        // return true;
    }
}
