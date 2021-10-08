package com.examly.springapp; 

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

@RestController
public class ProductController {
    
    @Autowired
    private ProductService productService;

    @RequestMapping("/admin")
    List<ProductModel> getProduct()
    {
        return productService.getProduct();
    }
    
    @RequestMapping("/home")
    List<ProductModel> getHomeProduct()
    {
        return productService.getHomeProduct();
    }

    @RequestMapping("/admin/productEdit/{id}")
    ProductModel productEditData(@PathVariable String id)
    {
        return productService.productEditData(id);
    }

    @RequestMapping(method=RequestMethod.POST,value="/admin/productEdit/{id}")
    void productEditSave(@RequestBody ProductModel data)
    {
        productService.productEditSave(data);
    }

    @RequestMapping(method=RequestMethod.POST,value="/admin/addProduct")
    void productSave(@RequestBody ProductModel data)
    {
        productService.productSave(data);
    }

    @RequestMapping("/admin/delete/{id}")
    void productDelete(@PathVariable String id)
    {
        productService.productDelete(id);
    }
}
