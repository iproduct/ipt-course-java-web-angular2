package todomanager.controller;

import java.util.List;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import todomanager.entity.Todo;

@Stateless
public class TodoController {
	@PersistenceContext
	private EntityManager em;

	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public Todo createTodo(Todo todo) {
		Todo newTodo = new Todo(todo.getTitle(), todo.getDescription(),
			todo.getPriority(), todo.getDueDate());
		em.persist(newTodo);
		return newTodo;
	}
	
	@SuppressWarnings("unchecked")
	public List<Todo> getTodos(int first, int count) {
		return (List<Todo>) em.createNamedQuery("getAllTodosByPriorityDate")
			.setFirstResult(first).setMaxResults(count)
			.getResultList();
	}
	
	@SuppressWarnings("unchecked")
	public List<Todo> getAllTodos(){
		return (List<Todo>) em.createNamedQuery("getAllTodosByPriorityDate")
			.getResultList();
	}
	
	public Todo getTodoById(long id){
		Todo todo = em.find(Todo.class, id);
		return todo;
	}
	
	public Todo edit(Todo todo) {
		return em.merge(todo);
	}
	
	public Todo delete(long id){
		Todo todo = em.find(Todo.class, id);
		em.remove(todo);
		return todo;
	}
}
