package com.vaccination.server.DAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

/*This class contains the method to check user is present in database or not as per the email id and password*/
public class login {
	
	public String  user(String username, String password)
	{
		connection cons = new connection();
		
		 try {
				Class.forName(cons.driver);
				
				Connection con = DriverManager.getConnection(cons.Url,cons.Username,cons.Password);
				
				
		        Statement st =  con.createStatement();
		    	ResultSet rs = st.executeQuery("select * from users where gmail='"+username+"' and password='"+password+"'");
				
		    	
		    	
				
		    	if(rs.next())
				{
		    		
		    	
					
					return rs.getString("id").toString();
					
					
				}
		    	
				
				con.close();
				
				
				
			} catch (Exception e) {
				
				e.printStackTrace();
			}
			
		
		return "notFound";
	}

}
