package todomanager.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.TableGenerator;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@NamedQueries(
	{@NamedQuery(name="getAllTodosByPriorityDate", 
		query = "SELECT t FROM Todo t ORDER BY t.priority, t.dueDate")
})
public class Todo {
	@TableGenerator(name = "todoGen", table = "SEQUENCE_GEN", 
		pkColumnName = "GEN_KEY", valueColumnName = "GEN_VALUE", 
		pkColumnValue = "TODO_ID", allocationSize = 1)
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE, generator = "todoGen")
	private long id;
	private String title;
	private String description;
	private Priority priority;
	@Temporal(TemporalType.TIMESTAMP)
	private Date dueDate;

	public Todo() {
	}

	public Todo(String title) {
		this.title = title;
	}

	public Todo(String title, String description, Priority priority, Date dueDate) {
		this.title = title;
		this.description = description;
		this.priority = priority;
		this.dueDate = dueDate;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Priority getPriority() {
		return priority;
	}

	public void setPriority(Priority priority) {
		this.priority = priority;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", title=" + title + ", description="
				+ description + ", priority=" + priority + ", dueDate="
				+ dueDate + "]";
	}
}
