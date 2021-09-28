package com.examly.springapp;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.examly.springapp.UserDao;

@RestController
public class LoginController
{
    @Autowired
    private UserDao dao;
    @PostMapping("/login")
    public String checkUser(@RequestBody List<LoginModel> login)
    {
        UserModel user = dao.findById(login.get(0).getEmail()).get();
        if(user.getPassword().equals(login.get(0).getPassword()))
            return "Success";
        
        return "Failure";
    }
}