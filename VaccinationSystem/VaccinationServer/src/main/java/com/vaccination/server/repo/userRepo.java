package com.vaccination.server.repo;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vaccination.server.models.UserModel;


/*This class feteches the all the details of users from the database*/
public interface userRepo extends JpaRepository<UserModel, Long>{

	
	public List<UserModel> findAllBytype(String type);
	
	
	public List<UserModel> findAllBycity(String type);
	
	
	@Query("SELECT u FROM UserModel u where u.gmail=:username and u.password=:pass")
	public List<UserModel> findAllgmail(@Param("username") String username, @Param("pass") String password);
	
  
	
}