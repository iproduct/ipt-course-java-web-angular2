package language;

import java.text.MessageFormat;
import java.util.Locale;
import java.util.ResourceBundle;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.component.UIViewRoot;
import javax.faces.context.FacesContext;

@ManagedBean
@SessionScoped
public class LanguageBean {
	private String MESSAGE_BUNDLE = "login.login";
	private String CHANGED_LOCALE = "language.CHOSEN_LANGUAGE";
	private Locale currentLocale = new Locale("bg");

	public Locale getCurrentLocale() {
		return currentLocale;
	}

	public void setCurrentLocale(Locale currentLocale) {
		this.currentLocale = currentLocale;
	}

	public String chooseLanguage(String lang) {
		System.out.println("Chosen language: " + lang);
		currentLocale = new Locale(lang);
		UIViewRoot viewRoot = 
				FacesContext.getCurrentInstance().getViewRoot();
		viewRoot.setLocale(currentLocale);
		ResourceBundle bundle = ResourceBundle.getBundle(
				MESSAGE_BUNDLE,	viewRoot.getLocale());
		String messagePattern = bundle.getString(CHANGED_LOCALE);
		String localizedMessage = MessageFormat.format(messagePattern, lang);
		FacesMessage message = new FacesMessage(
			FacesMessage.SEVERITY_INFO,
			localizedMessage, localizedMessage);
		FacesContext.getCurrentInstance().addMessage("language_form", message);
		return null;
	}
}
