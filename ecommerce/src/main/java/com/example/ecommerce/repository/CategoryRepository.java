package com.example.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.ecommerce.model.Category;

public interface CategoryRepository extends JpaRepository<Category,Long>{
    public Category findByName(String name);
    
    @Query("Select c from Category c Where c.name=:name And c.parentCategory,name=:parentcategoryName")
    public Category findByNameAndParent(@Param("name")String name,
    @Param("parentCategoryName")String parentCategoryname);
}
