package com.vaccination.server.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vaccineslot")
public class vaccineModel {
	
	
	



	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private String hospitalname;
	private long hid;
	private String date;
	private String stime;
	private String etime;
	private String vcname;
	private String city;
	private String addr;
	private long total;
	

	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}

	public String getHospitalname() {
		return hospitalname;
	}
	public void setHospitalname(String hospitalname) {
		this.hospitalname = hospitalname;
	}
	public String getVcname() {
		return vcname;
	}
	public void setVcname(String vcname) {
		this.vcname = vcname;
	}
	
	public String getStime() {
		return stime;
	}
	public void setStime(String stime) {
		this.stime = stime;
	}
	public String getEtime() {
		return etime;
	}
	public void setEtime(String etime) {
		this.etime = etime;
	}

	
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
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
	
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}

	
	

	@Override
	public String toString() {
		return "vaccineModel [id=" + id + ", hospitalname=" + hospitalname + ", hid=" + hid + ", date=" + date
				+ ", stime=" + stime + ", etime=" + etime + ", vcname=" + vcname + ", city=" + city + ", addr=" + addr
				+ ", total=" + total + "]";
	}
	
	

}
