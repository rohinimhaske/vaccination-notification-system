package com.vaccination.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/*This will make server instance up pointing to the port 8080*/
@SpringBootApplication
public class VaccinationServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(VaccinationServerApplication.class, args);

    }

}
