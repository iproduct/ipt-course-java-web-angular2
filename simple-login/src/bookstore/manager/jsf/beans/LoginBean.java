package bookstore.manager.jsf.beans;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.ViewScoped;
import javax.faces.context.FacesContext;

@ManagedBean
@ViewScoped
public class LoginBean {
	private String username;
	private String password;
	
	@ManagedProperty("#{user}")
	private LoggedUserBean loggedUser;
	
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
	
	public LoggedUserBean getLoggedUser() {
		return loggedUser;
	}
	public void setLoggedUser(LoggedUserBean loggedUser) {
		this.loggedUser = loggedUser;
	}
	@Override
	public String toString() {
		return "LoginBean [username=" + username + ", password=" + password
				+ "]";
	}
	
	public String login(){
		if (username != null && username.equals(password)) {
			System.out.println("Login is successfull.");
//			HttpSession session = 
//					(HttpSession)FacesContext.getCurrentInstance()
//					.getExternalContext().getSession(true);
//			session.setAttribute("user", new LoggedUserBean(username, username));
			loggedUser.setUsername(username);
			loggedUser.setScreenname(username);
			return "success";
		}
		else {
			String errText ="The username or password is not valid for user " + username + ".";
			System.out.println(errText);
			FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_ERROR,errText,errText);
			FacesContext.getCurrentInstance().addMessage(null, message);
			return null;
		}	
	}
	
	public String cancel(){
		setUsername(null);
		setPassword(null);
		return null;
	}
	
	
}
