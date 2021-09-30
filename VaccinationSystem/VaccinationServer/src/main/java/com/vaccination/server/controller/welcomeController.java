package com.vaccination.server.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/*This class contains the welcome note*/
@CrossOrigin(origins ="http://localhost3000")
@RestController
public class welcomeController {
	
	@GetMapping("/welcome")
	public String welcome()
	{
		return"Welcome tO Vaccination System";
	}
	
	@GetMapping("/showName/{name}/{pass}")
	public String showName(@PathVariable String name,@PathVariable String pass)
	{
		return  "Username: "+ name+ " Password: "+pass;
	}

}
