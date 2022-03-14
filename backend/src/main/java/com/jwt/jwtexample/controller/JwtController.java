package com.jwt.jwtexample.controller;

import com.jwt.jwtexample.entity.AuthReq;
import com.jwt.jwtexample.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin({"*"})
@RequestMapping("/jwt")
public class JwtController {
    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;
    @GetMapping("/")
    public String welcome()
    {
        System.out.println("welcome");
        return "{\"message\":\"welcome\"}";
    }
    @PostMapping("/authenticate")
    public String generateToken(@RequestBody AuthReq authReq) throws Exception {
        try {
            System.out.println("authReq.getUsername()"+authReq.getUserName());
            System.out.println("authReq.getPassword()"+authReq.getPassword());
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authReq.getUserName(),authReq.getPassword())
            );
        }catch (Exception ex)
        {
            throw new Exception("invalid username or password");
        }
        return jwtUtil.generateToken(authReq.getUserName());
    }

}
