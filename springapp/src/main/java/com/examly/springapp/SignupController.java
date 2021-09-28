
package com.examly.springapp;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.examly.springapp.LoginModel;

@RestController
public class UserController {
    
    @Autowired
    private UserDao dao;

    @PostMapping("/signup")
    public String saveUser(@RequestBody List<UserModel> user)
    {
        for(int i = 0; i < user.size(); i ++)
            dao.save(user.get(i));
        return "Saved Successfully";
    }

    // @GetMapping("/details")
    // public Iterable<UserModel> getAll()
    // {
    //     return dao.findAll();
    // }

}
