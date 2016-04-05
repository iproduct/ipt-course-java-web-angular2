package bookstore.manager.jsf.beans;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;

@ManagedBean(name="user")
@SessionScoped
public class LoggedUserBean {
	private String username;
	private String screenname;
	public LoggedUserBean() {
	}
	public LoggedUserBean(String username, String screenname) {
		this.username = username;
		this.screenname = screenname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getScreenname() {
		return screenname;
	}
	public void setScreenname(String screenname) {
		this.screenname = screenname;
	}
	@Override
	public String toString() {
		return "LoggedUserBean [username=" + username + ", screenname="
				+ screenname + "]";
	}
	
	public String logout() {
		HttpSession session = (HttpSession)FacesContext.getCurrentInstance()
			.getExternalContext().getSession(false);
		if(session != null)
			session.invalidate();
		return "logout";
	}
}
