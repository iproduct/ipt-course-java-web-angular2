package hello;

import javax.enterprise.context.RequestScoped;
import javax.faces.bean.ManagedBean;

@ManagedBean(name="hello")
@RequestScoped
public class HelloBean {
	private String name = "Trayan";
	private int age;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String submit() {
		System.out.println("Name changed: " + name);
		return null;
	}
	
}
