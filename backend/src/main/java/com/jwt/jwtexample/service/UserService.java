package com.jwt.jwtexample.service;

import com.jwt.jwtexample.entity.User;
import com.jwt.jwtexample.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public String getUser() {
        //get Logged in user
        return "Emon";
    }
}
