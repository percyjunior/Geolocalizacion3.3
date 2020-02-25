FlowRouter.route('/',{
	name: 'Home',
	action() {
		BlazeLayout.render('Main',{
			main: 'Home'
		});
	}
});
FlowRouter.route('/RegistrarCliente',{
	name: 'RegCliente',
	action() {
		BlazeLayout.render('Main',{
			main: 'RegistrarCliente'
		});
	}
});
FlowRouter.route('/RegistrarPersonal',{
	name: 'RegPersonal',
	action() {
		BlazeLayout.render('Main',{
			main: 'RegistrarPersonal'
		});
	}
});
FlowRouter.route('/RegistrarSocio',{
	name: 'RegSocio',
	action() {
		BlazeLayout.render('Main',{
			main: 'RegistrarSocio'
		});
	}
});
FlowRouter.route('/RegistrarTracto',{
	name: 'RegTracto',
	action() {
		BlazeLayout.render('Main',{
			main: 'RegistrarTracto'
		});
	}
});
FlowRouter.route('/RegistrarChata',{
	name: 'RegChata',
	action() {
		BlazeLayout.render('Main',{
			main: 'RegistrarChata'
		});
	}
});
FlowRouter.route('/RegistrarSancion',{
	name: 'RegSancion',
	action() {
		BlazeLayout.render('Main',{
			main: 'RegistrarSancion'
		});
	}
});
FlowRouter.route('/RegistrarEncomienda',{
	name: 'RegEncomienda',
	action() {
		BlazeLayout.render('Main',{
			main: 'RegistrarEncomienda'
		});
	}
});
FlowRouter.route('/RegistrarGeolocalizacion',{
	name: 'RegGeolocalizacion',
	action() {
		BlazeLayout.render('Main',{
			main: 'RegistrarGeolocalizacion'
		});
	}
});
FlowRouter.route('/Reparto',{
	name: 'Reparto',
	action() {
		BlazeLayout.render('Main',{
			main: 'Reparto'
		});
	}
});
/////////////////////////////////////////////
FlowRouter.route('/AdminUsuario',{
	name: 'AdminUsuario',
	action() {
		BlazeLayout.render('Main',{
			main: 'AdminUsuario'
		});
	}
});
FlowRouter.route('/AdminCamion',{
	name: 'AdminCamion',
	action() {
		BlazeLayout.render('Main',{
			main: 'AdminCamion'
		});
	}
});
FlowRouter.route('/AdminSancion',{
	name: 'AdminSancion',
	action() {
		BlazeLayout.render('Main',{
			main: 'AdminSancion'
		});
	}
});
FlowRouter.route('/AdminEncomienda',{
	name: 'AdminEncomienda',
	action() {
		BlazeLayout.render('Main',{
			main: 'AdminEncomienda'
		});
	}
});