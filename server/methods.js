Meteor.methods({

	//Administración
	AdminInsert: function(data){
		check(data, {
			Tipo: String,
			Nombre: String,
			Ci: String,
			FechaNacimiento: String,
			CorreoElectronico: String,
			Sexo: String,
			Celular: String,
			Telefono: String,
			Direccion: String,
			Cargo: String,
			Gestion: String,
			Borrar: Boolean,
			Fecha: Date
		});
		var adminId = Usuario.insert(data);
	},
	AdminRemove: function(id){
		check(id, String);

		var adminDel = Usuario.remove({
			_id: id
		});
	},

	AdminUpdate: function(admin_edit){
		check(admin_edit, {
			id: String,
			Nombre: String,
			Ci: String,
			Celular: String,
			Cargo: String
		});
		var adminUp = Usuario.update(admin_edit.id, {
			$set: {
				Nombre: admin_edit.Nombre,
				Ci: admin_edit.Ci,
				Celular: admin_edit.Celular,
				Cargo: admin_edit.Cargo
			}
		});
	},

	//Socios
	SocioInsert: function(data){
		check(data, {
			Tipo: String,
			Nombre: String,
			Ci: String,
			FechaNacimiento: String,
			CorreoElectronico: String,
			Sexo: String,
			Celular: String,
			Telefono: String,
			Direccion: String,
			Rol: String,
			Categoria: String,
			Borrar: Boolean,
			Accesible: Boolean
		});
		var adminId = Usuario.insert(data);
	},
	SocioRemove: function(id){
		check(id, String);

		var adminDel = App.remove({
			_id: id
		});
	},
	SocioUpdate: function(admin_edit){
		check(admin_edit, {
			id: String,
			Nombre: String,
			Ci: String,
			Celular: String,
			Rol: String
		});
		var adminUp = Usuario.update(admin_edit.id, {
			$set: {
				Nombre: admin_edit.Nombre,
				Ci: admin_edit.Ci,
				Celular: admin_edit.Celular,
				Rol: admin_edit.Rol
			}
		});
	},
	//Cliente
	ClienteInsert: function(data){
		check(data, {
			Tipo: String,
			Nombre: String,
			Ci: String,
			FechaNacimiento: String,
			CorreoElectronico: String,
			Sexo: String,
			Celular: String,
			Telefono: String,
			Direccion: String,
			Empresa: String,
			Cargo: String,
			Pais: String,
			Ciudad: String,
			Borrar: Boolean
		});
		var adminId = Usuario.insert(data);
	},
	ClienteRemove: function(id){
		check(id, String);

		var adminDel = Usuario.remove({
			_id: id
		});
	},
	ClienteUpdate: function(admin_edit){
		check(admin_edit, {
			id: String,
			Nombre: String,
			Ci: String,
			Cargo: String,
			Empresa: String
		});
		var adminUp = Usuario.update(admin_edit.id, {
			$set: {
				Nombre: admin_edit.Nombre,
				Ci: admin_edit.Ci,
				Cargo: admin_edit.Cargo,
				Empresa: admin_edit.Empresa
			}
		});
	},
	//Tracto
	TractoInsert: function(data){
		check(data, {
			Placa: String,
			Marca: String,
			Color: String,
			Cilindrada: String,
			Peso: String,
			Año: String,
			Ejes: String,
			Tipo: String,
			Borrar: Boolean,
			Socio: String,
			Habilitado: Boolean,
			Estado: String
		});
		var adminId = Tracto.insert(data);
	},
	TractoRemove: function(id){
		check(id, String);
		var AdminDel = Tracto.remove({
			_id: id
		});
	},
	HabilitarTracto: function(id){
        var adminUp = Tracto.update(admin_edit.id, {
            $set: {
                Habilitado: true
            }
        });
    },
    DesabilitarTracto: function(id){
        var adminUp = Tracto.update(admin_edit.id, {
            $set: {
                Habilitado: false
            }
        });
    },
	TractoUpdate: function(admin_edit){
		check(admin_edit, {
			id: String,
			Placa: String,
			Color: String,
			Año: String,
			Marca: String
		});
		var adminUp = Tracto.update(admin_edit.id, {
			$set: {
				Placa: admin_edit.Placa,
				Color: admin_edit.Color,
				Año: admin_edit.Año,
				Marca: admin_edit.Marca
			}
		});
	},
    reject_tracto: function(id){
        check(id, String);
        var adminUp = Tracto.update(id, {
            $set: {
                Habilitado:false
            }
        });
    },
    accept_tracto: function(id){
        check(id, String);
        var adminUp = Tracto.update(id, {
            $set: {
                Habilitado:true
            }
        });
    },
    Encomendar: function(id){
        check(id, String);
        var adminUp = Tracto.update(id, {
            $set: {
                Estado:"Ocupado"
            }
        });
    },
    Entregado: function(id){
        check(id, String);
        var adminUp = Tracto.update(id, {
            $set: {
                Estado:"Libre"
            }
        });
    },
	//Chata
ChataInsert: function(data){
    check(data, {
        Tabla: String,
        Ancho: String,
        Alto: String,
        Largo: String,
        Ejes: String,
        Clase: String,
        Peso: String,
        Placa: String,
        Socio: String,
        Marca: String,
        Borrar: Boolean,
        Habilitado: Boolean,
        Estado: String
    });
    var adminId = Chata.insert(data);
},
ChataRemove: function(id){
    check(id, String);

    var adminDel =Chata.remove({
        _id: id
    });
},
ChataUpdate: function(admin_edit){
    check(admin_edit, {
        id: String,
        Placa: String,
        Marca: String,
        Clase: String,
        Tipo: String
    });
    var adminUp = Chata.update(admin_edit.id, {
        $set: {
            Placa: admin_edit.Placa,
            Marca: admin_edit.Marca,
            Clase: admin_edit.Clase,
            Tipo: admin_edit.Tipo
        }
    });
},
HabilitarChata: function(id){
    var adminUp = Chata.update(admin_edit.id, {
        $set: {
            Habilitado: true
        }
    });
},
DesabilitarChata: function(id){
    var adminUp = Chata.update(admin_edit.id, {
        $set: {
            Habilitado: false
        }
    });
},
reject_chata: function(id){
        check(id, String);
        var adminUp = Chata.update(id, {
            $set: {
                Habilitado:false
            }
        });
    },
    accept_chata: function(id){
        check(id, String);
        var adminUp = Chata.update(id, {
            $set: {
                Habilitado:true
            }
        });
    },
    Encomendar: function(id){
        check(id, String);
        var adminUp = Chata.update(id, {
            $set: {
                Estado:"Ocupado"
            }
        });
    },
    Entregado: function(id){
        check(id, String);
        var adminUp = Chata.update(id, {
            $set: {
                Estado:"Libre"
            }
        });
    },
    //Encomienda
    EncomiendaInsert: function(data){
        check(data, {
            Cliente: String,
            Peso: String,
            PaisOrigen: String,
            CuidadOrigen: String,
            PaisDestino: String,
            CuidadDestino: String,
            Precio: String,
            FechaMontado: String,
            FechaDesmontado: String,
            Borrar: Boolean,
            Especial: Boolean
        });
        var adminId = Encomienda.insert(data);
    },
    EncomiendaEspecialInsert:function(data){
         check(data, {
             Cliente: String,
             Alto: String,
             Largo: String,
             Ancho: String,
             Cantidad: String,
             PaisOrigen: String,
             CuidadOrigen: String,
             PaisDestino: String,
             CiudadDestino: String,
             Precio: String,
             FechaMontado: String,
             FechaDesmontado: String,
             Borrar: Boolean,
             Especial: Boolean
         });
         var adminId = Encomienda.insert(data);
     },
    EncomiendaRemove: function(id){
        check(id, String);

        var adminDel = Encomienda.remove({
            _id: id
        });
    },
    EncomiendaUpdate: function(admin_edit){
        check(admin_edit, {
            id: String,
            PaisOrigen: String,
            PaisDestino: String,
            FechaMontado: String,
            FechaDesmontado: String,
            Borrar: Boolean
        });
        var adminUp = Encomienda.update(admin_edit.id, {
            $set: {
                PaisOrigen: admin_edit.PaisOrigen,
                PaisDestino: admin_edit.PaisDestino,
                FechaMontado: admin_edit.FechaMontado,
                FechaDesmontado: admin_edit.FechaDesmontado
            }
        });
    },

    //Sancion
        SancionInsert: function(data){
            check(data, {
                Socio: String,
                Detalle: String,
                Punto: String,
                Borrar: Boolean
            });
            var adminId = Sancion.insert(data);
        },
        SancionRemove: function(id){
            check(id, String);

            var adminDel = Sancion.remove({
                _id: id
            });
        },
        EncomiendaUpdate: function(admin_edit){
            check(admin_edit, {
                    Socio: String,
                    Detalle: String,
                    Punto: String
            });
            var adminUp = Sancion.update(admin_edit.id, {
                $set: {
                    Socio: admin_edit.Socio,
                    Detalle: admin_edit.Detalle,
                    Punto: admin_edit.Punto                }
            });
        },
});
