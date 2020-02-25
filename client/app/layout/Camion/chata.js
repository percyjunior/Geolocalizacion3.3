//Chata
Template.Crear_Chata.events({
	'click .btn-submit-chata': function(e, tmpl){
		var ancho = tmpl.find('.AnchoChata').value;
		var alto = tmpl.find('.AltoChata').value;
		var largo = tmpl.find('.LargoChata').value;
		var ejes = tmpl.find('.EjesChata').value;
		var clase = tmpl.find('.ClaseChata').value;
		var peso = tmpl.find('.PesoChata').value;
		var placa = tmpl.find('.PlacaChata').value;
		var socio = tmpl.find('.SocioChata').value;
		var marca = tmpl.find('.MarcaChata').value;
		var data = {
			Tabla: "Chata",
			Ancho: ancho,
			Alto: alto,
			Largo: largo,
			Ejes: ejes,
			Clase: clase,
			Peso: peso,
			Placa: placa,
			Socio: socio,
			Marca: marca,
			Borrar: false,
			Habilitado: true,
            Estado: "Libre"
		};
		Meteor.call('ChataInsert', data, function(error){
			if(error)
			return throwError(error.reason);
		});
		$('#AnchoChata').val("").focus();
		$('#AltoChata').val("");
		$('#LargoChata').val("");
		$('#EjesChata').val("");
		$('#TipoChata').val("");
		$('#ClaseChata').val("");
		$('#PesoChata').val("");
		$('#PlacaChata').val("");
		$('#SocioChata').val("");
		$('#MarcaChata').val("");
	}
});

Template.Crear_Chata.helpers({
	chata_list: function(){
		return Chata.find();
	},
	socio_list: function(){
		return Usuario.find({Tipo: "Socio"});
	}
});

Template.lista_chata.helpers({
	editing_chata: function(){
		return Session.get('editing_chata');
	}
});

Template.lista_chata.events({
	'click .remove_chata': function(e, tmpl){
    		var id = this._id;
    		Meteor.call('ChataRemove', id, function(error){
    			if (error){
    				return throwError(error.reason);
    			}
    		});
    	},

	'dblclick .student_row': function(e, tmpl){
    		Session.set('editing_chata', true);
    },

	'keyup .editBoxChata': function (e, tmpl) {
    		var currentStudentId = this._id;
    		if (e.which === 13) {
    			var edit_placa = tmpl.find('.EditPlacaChata').value;
    			var edit_marca = tmpl.find('.EditMarcaChata').value;
    			var edit_clase = tmpl.find('.EditClaseChata').value;
    			var edit_tipo = tmpl.find('.EditTipoChata').value;
    			var edit_cliente = {
    				id: currentStudentId,
    				Placa: edit_placa,
    				Marca: edit_marca,
    				Clase: edit_clase,
    				Tipo: edit_tipo
    			};

    			Meteor.call('ChataUpdate', edit_cliente, function (error, result) {
    				if (error)
    				return throwError(error.reason);
    			});

    			Session.set('editing_chata', false);
    		}
    }
});

Template.reparto.helpers({
	chata_list: function(){
        return Chata.find({});
    },
    tracto_list: function(){
        return Tracto.find({});
    },
	dist: function(){
		return Session.get('dist');
	}
});

Template.Distribuir_Encomienda.events({
	'click .cambiar': function(e, tmpl){
		Session.set('dist', true);
	}
});

Template.reparto.events({
	'click .accept_chata': function(e, tmpl){
		event.preventDefault();
		Session.set('presente', true);
		$(event.target).removeClass("glyphicon-remove");
		$(event.target).addClass("glyphicon-ok");
		$(event.target).removeClass("accept_chata");
		$(event.target).addClass("unaccept_chata");
		debugger;
		var id = this._id;
		Meteor.call('accept_chata', id, function(error){
			if (error){
				return throwError(error.reason);
			}
		});
        Session.set('pivote', id);
	},
	'click .unaccept_chata': function(e, tmpl){
		event.preventDefault();
		Session.set('presente', false);
		$(event.target).removeClass("glyphicon-ok");
		$(event.target).addClass("glyphicon-remove");
		$(event.target).removeClass("unaccept_chata");
		$(event.target).addClass("accept_chata");
		debugger;
		var id = this._id;
        Meteor.call('reject_chata', id, function(error){
            if (error){
                return throwError(error.reason);
            }
        });
        Session.set('pivote', "");
	},
	'click .accept_tracto': function(e, tmpl){
    		event.preventDefault();
    		Session.set('presente', true);
    		$(event.target).removeClass("glyphicon-remove");
    		$(event.target).addClass("glyphicon-ok");
    		$(event.target).removeClass("accept_tracto");
    		$(event.target).addClass("unaccept_tracto");
    		debugger;
    		var id = this._id;
    		Meteor.call('accept_tracto', id, function(error){
    			if (error){
    				return throwError(error.reason);
    			}
    		});
    	},
    	'click .unaccept_tracto': function(e, tmpl){
    		event.preventDefault();
    		Session.set('presente', false);
    		$(event.target).removeClass("glyphicon-ok");
    		$(event.target).addClass("glyphicon-remove");
    		$(event.target).removeClass("unaccept_tracto");
    		$(event.target).addClass("accept_tracto");
    		debugger;
    		var id = this._id;
            Meteor.call('reject_tracto', id, function(error){
                if (error){
                    return throwError(error.reason);
                }
            });
    	},
    	'click .btn-repartir': function(e,tmpl){
    	    event.preventDefault();
    	    //Algoritmo de recomendacion.
    	}
});