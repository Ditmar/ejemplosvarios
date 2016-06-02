Router.configure({
	layoutTemplate:"layout"
});
Router.route("/", function() {
	// home es una plantilla, tiene que estar definida 
	this.render("home");
});
Router.route("/listaplantillas", function() {
	// home es una plantilla, tiene que estar definida 
	this.render("listaplantillas");
});
Router.route("/contacto", function() {
	// home es una plantilla, tiene que estar definida 
	this.render("contacto");
});
Router.route("/portafolio", function() {
	// home es una plantilla, tiene que estar definida 
	this.render("portafolio");
});
Router.route("/sobrenosotros", function() {
	// home es una plantilla, tiene que estar definida 
	this.render("sobrenosotros");
});