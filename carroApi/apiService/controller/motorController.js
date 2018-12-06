var MotorModel = require('../model/motorModel');
var socket = require('socket.io-client')("http://localhost:3000");
var carrorModel = require('../model/CarroModel');
//socket.on('connection', function(socket) {
//    console.log('Connected!');
//});

exports.correr = (req, res) => {
    console.log(req.body);
    var nMotorModel = new MotorModel(req.body.accion, req.body.kmVelocidad);
    console.log(nMotorModel);
    if (nMotorModel.Accion == 'acelerar') {
        socket.emit('start', nMotorModel);
    } else if (nMotorModel.Accion == 'frenar') {
        socket.emit('stop', nMotorModel);
    } else if (nMotorModel.Accion == 'retroceder') {
        socket.emit('reverse', nMotorModel);
    } else if (nMotorModel.Accion == 'izquierda') {
        nMotorModel.GiroIzquierda(req.body.izquierdaKm, req.body.derechaKm);
        console.log(nMotorModel);
        socket.emit('left', nMotorModel);
    } else if (nMotorModel.Accion == 'derecha') {
        nMotorModel.GiroDerecha(req.body.derechaKm, req.body.izquierdaKm);
        console.log(nMotorModel);
        socket.emit('right', nMotorModel);
    } else {
        console.log(`Accion no valida ${ nMotorModel.Accion }`);
    }
    res.end();
}



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