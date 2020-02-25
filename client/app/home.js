Session.setDefault('editing_cliente', false);
Session.setDefault('editing_tracto', false);
Session.setDefault('editing_chata', false);
Session.setDefault('editing_encomienda', false);
Session.setDefault('editing_sancion', false);
Session.setDefault('ventana', false);
Session.setDefault('Nombre', "");
Session.setDefault('id', "");
Session.setDefault('Tipo', "");

Template.Home.onRendered(function(){
	$('.input_mhs').validate();
});

Template.Home.onCreated(function(){ // Template level Subscribe
	var self = this;
	self.autorun(function(){
		self.subscribe('pubMahasiswa');
	})
});

Template.Home.events({
    'click .loggin-toggle': ()=>{
        Session.set('nav-toggle','open');
    },
    'click .logout':()=>{
        Meteor.logout();
    },
    'click .open-insert-modal': function (e) {
    debugger;
        e.preventDefault();
        //{backdrop: "static"} it is use for only close button click than close
        $('#insertModal').modal({backdrop: "static"});
    },
    'click .mostrar': ()=>{
        Session.set('ventana', true);
        $(event.target).removeClass("mostrar");
        $(event.target).addClass("esconder");
    },
    'click .esconder': ()=>{
        Session.set('ventana', false);
        $(event.target).removeClass("esconder");
        $(event.target).addClass("mostrar");
    },
    'click .logout': ()=>{
        AccountsTemplates.logout();
    }
});

Template.Home.helpers({
	ventana: function(){
		return Session.get('ventana');
	}
});