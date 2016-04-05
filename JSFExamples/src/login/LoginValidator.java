/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package login;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

@FacesValidator("loginValidator")
public class LoginValidator implements Validator {
    private int maximum;
    private int minimum;

    public int getMaximum() {
        return maximum;
    }

    public void setMaximum(int maximum) {
        this.maximum = maximum;
    }

    public int getMinimum() {
        return minimum;
    }

    public void setMinimum(int minimum) {
        this.minimum = minimum;
    }
    
    public void validate(FacesContext context,
            UIComponent component, Object value) throws ValidatorException {
        int input = (Integer) value;
        System.out.println("Min: " + minimum + "Max: " + maximum);
        if ((input < minimum) || (input > maximum)) {
            FacesMessage message = new FacesMessage(
                    FacesMessage.SEVERITY_ERROR,
                    "Invalid guess", "Invalid guess");
            throw new ValidatorException(message);
        }

    }
}
