package todomanager.jsf;

import static todomanager.entity.Priority.HIGH;
import static todomanager.entity.Priority.LOW;
import static todomanager.entity.Priority.MEDIUM;
import static todomanager.jsf.LanguageBean.getLocalizedMessage;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.component.UIData;
import javax.faces.component.UIPanel;
import javax.faces.component.html.HtmlCommandButton;
import javax.faces.context.FacesContext;
import javax.faces.event.ActionEvent;

import todomanager.controller.TodoController;
import todomanager.entity.Priority;
import todomanager.entity.Todo;

@ManagedBean
@RequestScoped
public class TodoManagerBean implements Serializable{
	private static final long serialVersionUID = 1L;
	@EJB
	private TodoController controller;
	private Todo todo = new Todo();;
	private UIPanel addTodoPanel;
	private UIData dataTable;
	private HtmlCommandButton addCommand;
	
//	@PostConstruct
//	public void init(){
//		Todo t = new Todo("Test JPA");
//		todo = controller.createTodo(t);
//	}

	//Bean properties
	public Todo getTodo() {
		return todo;
	}

	public void setTodo(Todo todo) {
		this.todo = todo;
	}
	
	public UIPanel getAddTodoPanel() {
		return addTodoPanel;
	}

	public void setAddTodoPanel(UIPanel addTodoPanel) {
		this.addTodoPanel = addTodoPanel;
	}

	public UIData getDataTable() {
		return dataTable;
	}

	public void setDataTable(UIData dataTable) {
		this.dataTable = dataTable;
	}

	public HtmlCommandButton getAddCommand() {
		return addCommand;
	}

	public void setAddCommand(HtmlCommandButton addCommand) {
		this.addCommand = addCommand;
	}

	//Action methods
	public String addNewTodo(){
		todo = new Todo();
		addTodoPanel.setRendered(true);
		addCommand.setDisabled(true);
		return null;
	}
	public String save(){
		Todo newTodo = controller.createTodo(todo);
		System.out.println("Todo persisted successfully: " + newTodo);
		addTodoPanel.setRendered(false);
		addCommand.setDisabled(false);
		return null;
	}
	public String cancel(){
		todo = null;
		addTodoPanel.setRendered(false);
		addCommand.setDisabled(false);
		return null;
	}
	
	public String delete() {
		Todo deletedTodo = controller.delete(todo.getId());
		String msgText = "Todo with title '"
			+ deletedTodo.getTitle() + "' was successfully deleted.";
		FacesMessage message = new FacesMessage(
			FacesMessage.SEVERITY_INFO, msgText, msgText);
		FacesContext.getCurrentInstance().addMessage(null, message);
		return null;
	}
	
	//Action listeners
	public void displayDetails(ActionEvent event){
		String componentId = event.getComponent().getId();
		if(componentId.equals("hide_details")){
			dataTable.setRendered(false);
		} else {
			dataTable.setRendered(true);
		}
	}
	
	//Result properties
	public List<Todo> getAllTodos(){
		return controller.getAllTodos();
	}
	
	public Map<String, Priority> getPriorities() {
		Map<String, Priority> pmap = new LinkedHashMap<String,Priority>();
		pmap.put(getLocalizedMessage(HIGH.toString()), HIGH);
		pmap.put(getLocalizedMessage(MEDIUM.toString()), MEDIUM);
		pmap.put(getLocalizedMessage(LOW.toString()), LOW);
		return pmap;
	}
	
	//Utility methods
//	public String getRequiredMessage(String formFieldKey){
//		return getLocalizedMessage(REQUIRED_MESSAGE, formFieldKey);
//	}
		
}
