package com.firestorewebionic.post;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class ControllerDefualt {
    @GetMapping
    public String home(){
        return  "redirect:/swagger-ui.html";
    }
}
