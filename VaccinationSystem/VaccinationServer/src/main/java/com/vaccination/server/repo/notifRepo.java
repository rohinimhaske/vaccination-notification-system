package com.vaccination.server.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vaccination.server.models.notifModel;

/*This class feteches the all the details of notifications from the database*/
public interface notifRepo extends JpaRepository<notifModel,Long> {
	
	public List<notifModel> findAllByrid(long rid);
	
	public List<notifModel> findAllBysid(long sid);
	
	@Query("SELECT COUNT(u) FROM notifModel u WHERE u.rid=:rid")
	public String countnotifId(@Param("rid") long rid);
	
	

}
