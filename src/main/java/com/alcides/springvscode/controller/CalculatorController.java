package com.alcides.springvscode.controller;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.GetMapping;
/**
 * CalculatorController
 */


@RestController
public class CalculatorController {
    public int a=0;
    public int b=0;

    

    @GetMapping(value="/")
    public String getMethodName(){
        return "CALCULADORA";
    }
    
    @GetMapping(value="/sum?")
    public int getSum(){
        return a+b;
    }

    @GetMapping(value="/sub?")
    public int getSub(){
        return a-b;
    }

    @GetMapping(value="/div?")
    public int getDiv(){
        return a/b;
    }

    @GetMapping(value="/mult?")
    public int getMult(){
        return a*b;
    }
}

