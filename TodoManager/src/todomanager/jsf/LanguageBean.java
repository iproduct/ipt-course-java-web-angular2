package todomanager.jsf;

import java.text.MessageFormat;
import java.util.Locale;
import java.util.ResourceBundle;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;

@ManagedBean
@SessionScoped
public class LanguageBean {
	private static final String MESSAGE_BUNDLE_NAME = "todomanager.jsf.todo_messages";
	private Locale currentLocale = new Locale("bg");

	public Locale getCurrentLocale() {
		return currentLocale;
	}

	public void setCurrentLocale(Locale currentLocale) {
		this.currentLocale = currentLocale;
	}
	
	public String chooseLanguage(String lang){
		System.out.println("Language chosen: " + lang);
		FacesContext context = FacesContext.getCurrentInstance();
		currentLocale = new Locale(lang);
		context.getViewRoot().setLocale(currentLocale);
		
		//Inform the user language has changed
		String messageStr = getLocalizedMessage("todomanager.LANGUAGE_CHANGED", 
				currentLocale.toString());
		FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_INFO,
				messageStr, messageStr);
		FacesContext.getCurrentInstance().addMessage("language_form", message);
		return null;
	}
	
	public String getLocalized(String msgKey, String paramKey){
		return getLocalizedMessage(msgKey, paramKey);
	}
	
	public static String getLocalizedMessage(String msgKey, String... paramKeys){
	ResourceBundle msg = ResourceBundle.getBundle(MESSAGE_BUNDLE_NAME, 
			FacesContext.getCurrentInstance().getViewRoot().getLocale());
	String messPattern = msg.getString(msgKey);
	String[] keys = new String[paramKeys.length];
	for(int i = 0; i < paramKeys.length; i++) {
		keys[i] = msg.getString(paramKeys[i]);
	}
	return MessageFormat.format(messPattern, (Object[])keys);
}

}
