package com.domesne.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class DemoController {
    @GetMapping
    public String runDemo(Model model){
        List<String> demoList = new ArrayList<>();
        demoList.add("Java List 1");
        demoList.add("Java List 2");
        demoList.add("Java List 3");
        model.addAttribute("demoData","This string and list are passed from Java Controller");
        model.addAttribute("demoList",demoList);
        return "demo";
    }
}
