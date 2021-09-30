package com.vaccination.server.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bookslot")
public class bookslotModel {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private long hid;
	private long uid;
	private long sid;
	
	private String uname;
	private String hname;
	private String vcname;
	private String date;
	private String bookdate;
	private String time;
	private String city;
	private String taken;
	
	
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getHid() {
		return hid;
	}
	public void setHid(long hid) {
		this.hid = hid;
	}
	public long getUid() {
		return uid;
	}
	public void setUid(long uid) {
		this.uid = uid;
	}
	public long getSid() {
		return sid;
	}
	public void setSid(long sid) {
		this.sid = sid;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getHname() {
		return hname;
	}
	public void setHname(String hname) {
		this.hname = hname;
	}
	public String getVcname() {
		return vcname;
	}
	public void setVcname(String vcname) {
		this.vcname = vcname;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getBookdate() {
		return bookdate;
	}
	public void setBookdate(String bookdate) {
		this.bookdate = bookdate;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getTaken() {
		return taken;
	}
	public void setTaken(String taken) {
		this.taken = taken;
	}
	
	@Override
	public String toString() {
		return "bookslotModel [id=" + id + ", hid=" + hid + ", uid=" + uid + ", sid=" + sid + ", uname=" + uname
				+ ", hname=" + hname + ", vcname=" + vcname + ", date=" + date + ", bookdate=" + bookdate + ", time="
				+ time + ", city=" + city + ", taken=" + taken + "]";
	}
	
	
	

}
