package com.firestorewebionic.post.controller;

import com.firestorewebionic.post.service.PostManagementService;
import dto.PostDTO;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping(value="/post")
public class LugaresContoller {

    @Autowired
    private PostManagementService service;

    @GetMapping(value="/greet/{name}")
    @ApiModelProperty("Controllador de prueb")
    public String greet(@PathVariable("name") String name){
        return "Hello, "+name;
    }

    @GetMapping("/list")
    public ResponseEntity list(){
        return new ResponseEntity(service.list(), HttpStatus.OK);
    }

    @PostMapping(value ="/add")
    public ResponseEntity add(@RequestBody PostDTO post){
        return new ResponseEntity(service.add(post), HttpStatus.OK);
    }

    @PutMapping(value="/{id}/update")
    public ResponseEntity edit(@PathVariable("id") String id, @RequestBody PostDTO post){
        return new ResponseEntity(service.edit(id,post), HttpStatus.OK);
    }

    @DeleteMapping(value="/{id}/delete")
    public ResponseEntity delete(@PathVariable("id") String id){
        return new ResponseEntity(service.delete(id), HttpStatus.OK);
    }

}
