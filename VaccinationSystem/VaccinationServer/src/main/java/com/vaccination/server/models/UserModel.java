package com.vaccination.server.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class UserModel {
	
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long id;
	
	private String name;
	private String gmail;
	private String password;
	private String mobo;
	private String mobo2;
	private String addr;
	private String city;
	private String district;
	private String adno;
	private String bdate;
	private String age;
	private String type;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGmail() {
		return gmail;
	}
	public void setGmail(String gmail) {
		this.gmail = gmail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobo() {
		return mobo;
	}
	public void setMobo(String mobo) {
		this.mobo = mobo;
	}
	public String getMobo2() {
		return mobo2;
	}
	public void setMobo2(String mobo2) {
		this.mobo2 = mobo2;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public String getAdno() {
		return adno;
	}
	public void setAdno(String adno) {
		this.adno = adno;
	}
	public String getBdate() {
		return bdate;
	}
	public void setBdate(String bdate) {
		this.bdate = bdate;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "UserModel [id=" + id + ", name=" + name + ", gmail=" + gmail + ", password=" + password + ", mobo="
				+ mobo + ", mobo2=" + mobo2 + ", addr=" + addr + ", city=" + city + ", district=" + district + ", adno="
				+ adno + ", bdate=" + bdate + ", age=" + age + ", type=" + type + "]";
	}
	
	
	

	
	
	
	

}
