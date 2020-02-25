var firebase = new Firebase('https://geolocalizacion-e994b.web.app/');
firebase.on('child_added',   willLog);
firebase.on('child_changed', willLog);
firebase.on('child_removed', willLog);

function willLog(snapshot) {
    console.log(snapshot.key() + " : " + EJSON.stringify(snapshot.val()));
}
