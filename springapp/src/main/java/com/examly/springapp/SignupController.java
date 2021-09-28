package com.examly.springapp;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.examly.springapp.LoginModel;

@RestController
public class SignupController {
    
    @Autowired
    private UserDao dao;

    @PostMapping("/signup")
    public String saveUser(@RequestBody UserModel user)
    {
        // for(int i = 0; i < user.size(); i ++)
        try{
            UserModel new_user = dao.findById(user.getEmail()).get();
            return "Already exists";
        }catch(Exception e){}
        dao.save(user);
        return "Saved Successfully";
    }

    // @GetMapping("/details")
    // public Iterable<UserModel> getAll()
    // {
    //     return dao.findAll();
    // }

}
