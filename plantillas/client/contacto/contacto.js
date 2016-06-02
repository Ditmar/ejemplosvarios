Template.contacto.events({
	"click button": function(e) {
		TEMPLATES.set("static");
		console.log("click");
		Router.go("/");
		return false;
	}
});
Template.contacto.onRendered( function(){
	$("#contacto").hide();
	$("#contacto").show('slow', function() {
		
	});
});