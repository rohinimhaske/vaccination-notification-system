package com.vaccination.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vaccination.server.models.notifModel;
import com.vaccination.server.repo.*;

/*This class contains the methods for getting notifications by id,saving notifications,
 *  deleting notifications and method to get count of sent notifications*/
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class notifController {

    @Autowired
    notifRepo notifRepo;

    @GetMapping("/api/notif/rid/{rid}")
    public List<notifModel> getnotifbyrid(@PathVariable long rid) {
        return notifRepo.findAllByrid(rid);
    }

    @GetMapping("/api/notif/sid/{sid}")
    public List<notifModel> getnotifbysid(@PathVariable long sid) {
        return notifRepo.findAllBysid(sid);
    }

    @PostMapping("/api/notif/save")
    public String savenotif(@RequestBody notifModel notif) {
        notifRepo.save(notif);
        return "send";
    }

    @GetMapping("/api/notif/delete/{id}")
    public String deletenotif(@PathVariable long id) {
        notifRepo.deleteById(id);
        return ("Deleted");
    }

    @GetMapping("/api/notif/count/get/{rid}")
    public String countbyId(@PathVariable long rid) {
        return notifRepo.countnotifId(rid);
    }

}
