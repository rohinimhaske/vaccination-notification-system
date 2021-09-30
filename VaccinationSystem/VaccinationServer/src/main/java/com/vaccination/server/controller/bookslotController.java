package com.vaccination.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vaccination.server.models.bookslotModel;
import com.vaccination.server.repo.bookslotRepo;

/*This class contains the methods for registering user for slot, booking slot, fetching all booked slots and count of slots*/
@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class bookslotController {

	@Autowired
	bookslotRepo bookslotRepo;
	
	@PostMapping("/api/vaccine/slot/add")
	public String registerUser(@RequestBody bookslotModel slot)
	{
		bookslotRepo.save(slot);
		 return "Slot Booked";
	}
	
	
	
	@PostMapping("/api/vaccine/slot/save")
	public String saveSlot(@RequestBody bookslotModel slot)
	{
		bookslotRepo.save(slot);
		
	
		return "Slot Booked";
	}
	
	
	@GetMapping("/api/slot/chk/{sid}")
	public List<bookslotModel> getcount(@PathVariable long sid)
	{
		
		return bookslotRepo.findAllBysid(sid);
		
	}
	
	
	@GetMapping("/api/vaccine/user/slot/{uid}")
	public List<bookslotModel> getuserslot(@PathVariable long uid)
	{
		
		return bookslotRepo.findAllByuid(uid);
		
	}
	
	@GetMapping("/api/vaccine/hospital/slot/{hid}")
	public List<bookslotModel> gethospitalslot(@PathVariable long hid)
	{
		
		return bookslotRepo.findAllByhid(hid);
		
	}
	
	
	
	@GetMapping("/api/vaccine/bookedslot/get")
	public List<bookslotModel> getallBookedSlot()
	{
		
		return bookslotRepo.findAll();
		
	}
	
	@GetMapping("/api/slotbook/chkby/{uid}")
	public String countbyId(@PathVariable long uid)
	{
		return bookslotRepo.countTakenId(uid);
	}

	
	
	
}
