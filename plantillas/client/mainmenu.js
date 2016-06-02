
TEMPLATES = new ReactiveVar("home");
menu=[
{name: "Home",template: "home"},
{name: "Lista de Plantillas", template: "listaplantillas"},
{name: "contacto", template: "contacto"},
{name: "sobre nosotros", template: "sobrenosotros"},
{name: "portafolio", template: "portafolio"}]
Template.mainmenu.helpers({
	menu: function () {
		return menu;
	}
});
Template.layout.helpers({
	template(){
		return TEMPLATES.get();
	},
	checkRoutes()
	{
		return TEMPLATES.get() === "static"
	}
});
Template.home.onCreated(function(){
	TEMPLATES.set("home");
})
Template.mainmenu.events({
	"click a": function(e) {
		e.preventDefault();
		console.log($("#"+TEMPLATES.get()));
		var actual = this.template;
		$("#"+TEMPLATES.get()).hide('slow', function() {
			TEMPLATES.set(actual);
			console.log(TEMPLATES.get());
		});
	}
});