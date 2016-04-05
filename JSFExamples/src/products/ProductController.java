package products;

import java.util.ArrayList;
import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

@ManagedBean
@RequestScoped
public class ProductController {
 
    private List<Product> products;
 
    public List<Product> getProducts() {
        if (products == null) {
            products = new ArrayList<Product>();
            products.add(new Product("Tennis Racket", 25.5, "Adidas",
        		"tennis_racket.png", 
        		"Gut has partially been replaced by synthetic materials including " +
        		"nylon, polyamide, and other polymers. Rackets are restrung when " +
        		"necessary, which may be after every match for a professional or " +
        		"never for a social player."));
            products.add(new Product("Baseball Bat", 12.8, "Sports Inc.",
        		"baseball_bat.png", 
        		"A baseball bat is a smooth wooden or metal club used in the sport of " +
        		"baseball to hit the ball after it is thrown by the pitcher. " +
        		"By regulation it may be no more than 2.75 inches in diameter at " +
        		"the thickest part and no more than 42 inches (1,100 mm) long. " +
        		"Although historically bats approaching 3 pounds were swung,[1] " +
        		"today bats of 33 ounces (0.94 kg) are common, topping out at 34 " +
        		"ounces (0.96 kg) to 36 ounces (1.0 kg)."));
            products.add(new Product("Hockey Stick", 35.90, "Best Accessoaries Ltd.",
            	"hockey_stick.png",
            	"The size of the stick that is most effective for a specific player " +
            	"is judged by that players height. A 28 stick would be used by a " +
            	"player under 4' most commonly, whereas a 38 stick would be used " +
            	"mainly by players over 5'10. However 'defenders' often like to " +
            	"have a longer stick than 'attackers' as this can be used for a greater " +
            	"reach when stopping a moving ball. The 'attackers' prefer a shorter stick as " +
            	"it allows greater control of the ball."));
        }
        return products;
    }
 
}
