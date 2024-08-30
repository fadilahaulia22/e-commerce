package com.example.ecommerce.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.example.ecommerce.exception.ProductException;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.request.CreateProductRequest;

public interface ProductService {
    public Product createProduct(CreateProductRequest req);
   
    public String deleteProduct(Long productId)throws ProductException;
    
    public Product updateProduct(Long productId,Product req)throws ProductException;

    public Product findProductById(Long id)throws ProductException;

    public List<Product>findProductByCategory(String category);

    public Page<Product>getAllPrduct(String category,List<String>colors,List<String>sizes,Integer minPrice,Integer maxPrice,Integer minDiscount,String sort, String stock, Integer pageNumber,Integer pageSize);
    
}
