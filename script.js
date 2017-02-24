function Telefon(marka, cena, kolor, ocena) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
	this.ocena = ocena;
}
Telefon.prototype.printInfo = function() {
		console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', cena to ' + this.cena + ', a ocena to ' + this.ocena + '.');
}
var iPhone6S = new Telefon('Apple', '2250', 'srebrny', '10');
iPhone6S.printInfo();

var Motorolag3 = new Telefon('Motorola', '800', 'czarny', '6');
Motorolag3.printInfo();