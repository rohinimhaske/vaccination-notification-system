package com.vaccination.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vaccination.server.models.vaccineModel;
import com.vaccination.server.repo.*;

/*This class are having methods for saving vaccination details and get slot by user id. Also this contains the methods for 
 * getting slots available as per the city and deleting slots*/
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class vaccineController {
	
	@Autowired
	vaccineRepo vaccineRepo;
	
	
	
	@PostMapping("/api/vaccine/add")
	public String saveVaccine(@RequestBody vaccineModel vaccine)
	{
		vaccineRepo.save(vaccine);
		return "Done";
	}
	
	
	@GetMapping("/api/vaccine/getmyslot/{myid}")
	public List<vaccineModel> getmyslot(@PathVariable long myid)
	{
		return vaccineRepo.findByhid(myid);
	}
	
	
	@GetMapping("/api/vaccine/slot/bycity/{city}")
	public List<vaccineModel> getbycity(@PathVariable String city)
	{
		return vaccineRepo.findAllBycity(city);
	}
	
	@GetMapping("/api/vaccine/slot/get")
	public List<vaccineModel> getAllSlots()
	{
		return vaccineRepo.findAll();
	}
	
	
	

}
