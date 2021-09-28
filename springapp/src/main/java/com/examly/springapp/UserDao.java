package com.examly.springapp;
import org.springframework.data.repository.CrudRepository;
import com.examly.springapp.LoginModel;

public interface UserDao extends CrudRepository<UserModel, String>
{
    
}
