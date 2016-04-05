package products;

public class Product {
	private String name;
	private double price;
	private String vendor;
	private String pictureUrl;
	private String description;
	public Product() {
	}
	
	public Product(String name) {
		super();
		this.name = name;
	}

	public Product(String name, double price, String vendor) {
		this.name = name;
		this.price = price;
		this.vendor = vendor;
	}

	public Product(String name, double price, String vendor, String pictureUrl,
			String decription) {
		super();
		this.name = name;
		this.price = price;
		this.vendor = vendor;
		this.pictureUrl = pictureUrl;
		this.description = decription;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getVendor() {
		return vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public String getPictureUrl() {
		return pictureUrl;
	}

	public void setPictureUrl(String pictureUrl) {
		this.pictureUrl = pictureUrl;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String decription) {
		this.description = decription;
	}

	@Override
	public String toString() {
		return "Product [name=" + name + ", price=" + price + ", vendor="
				+ vendor + "]";
	}
}
