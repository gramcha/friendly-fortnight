package com.gramcha.friendlyfortnight.com.gramcha.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by gramachandran on 11/12/18.
 */
@RestController
public class BackendController {
    private static final String PING_MESSAGE = "ping pong!!!";
    @RequestMapping(path = "/ping")
    public String sayPing(){
        return PING_MESSAGE;
    }
}
