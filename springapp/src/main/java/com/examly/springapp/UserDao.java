package com.examly.springapp;

import org.springframework.data.repository.CrudRepository;

public interface UserDao extends CrudRepository<UserModel, String>
{
    
}
