package login;

import javax.faces.context.FacesContext;

public class LoginBean {
	private String username;
	private String password;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String nextView(){
		System.out.println("Login data: "+ username + ": " + password);
		FacesContext.getCurrentInstance().getExternalContext()
			.getFlash().put("loggedUser", username);
		if(username.equals(password))
			return "logged";
		else
			return null;
	}
}
