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
    public boolean checkUser(@RequestBody List<LoginModel> login)
    {
        try
        {
            UserModel user = dao.findById(login.get(0).getEmail()).get();
            if(user.getPassword().equals(login.get(0).getPassword()))
                return true;
            return false;
        }

        catch(Exception e)
        {
            return false;
        }
    }
}
