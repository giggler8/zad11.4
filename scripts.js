function Phone(brand, price, color, camera) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.camera = camera;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " zł. Camera resoulution is " + this.camera +  " megapixels.");
  };
Phone.prototype.goodQuality = function() {
	if ( this.price/this.camera < 150 ) {
	console.log ("Price " + this.price + " for this resolution " + this.camera + " is ok");
	}  else {  console.log ("Brand " + this.brand + " quality is shit")
	}
}

var iPhone6S = new Phone("Apple", 2000, "silver", 8);
var galaxyS6 = new Phone("Samsung", 1500, "white", 13);

iPhone6S.printInfo();
galaxyS6.printInfo();
iPhone6S.goodQuality();
galaxyS6.goodQuality();