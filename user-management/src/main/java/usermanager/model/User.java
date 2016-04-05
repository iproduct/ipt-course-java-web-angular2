package usermanager.model;
import static usermanager.model.UserRole.*;

import java.io.Serializable;

public class User implements Comparable<User>, Serializable{
	private static final long serialVersionUID = 1L;
	private long id;
	private String username;
	private String realName;
	private String password;
	private String email;
	private UserRole role = USER;

	public User() {
	}

	public User(long id, String username, String realName, String password, String email) {
		this.id = id;
		this.username = username;
		this.realName = realName;
		this.password = password;
		this.email = email;
	}

	public User(long id, String username, String realName, String password, String email, UserRole role) {
		this.id = id;
		this.username = username;
		this.realName = realName;
		this.password = password;
		this.email = email;
		this.role = role;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (id != other.id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("User [id=").append(id).append(", username=").append(username).append(", realName=")
				.append(realName).append(", password=").append(password).append(", email=").append(email)
				.append(", role=").append(role).append("]");
		return builder.toString();
	}

	@Override
	public int compareTo(User user) {
		return username.compareToIgnoreCase(user.getUsername());
	}
	
	
	
	
}
