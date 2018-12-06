var carrorModel = require('../model/CarroModel');
var socket = require('socket.io-client')("http://localhost:3000");


exports.onOff = (req, res) => {
    var ncarrorModel = new carrorModel(req.body.encender);
    console.log(req.body, ncarrorModel.Encender);
    if (ncarrorModel.Encender == 'on') {
        socket.on('connection', function(socket) {
            console.log('Connected!');
        });
        console.log('Connected!');
    } else if (ncarrorModel.Encender === "off") {
        socket.close();
        console.log('close!');
    }
    res.end();
}