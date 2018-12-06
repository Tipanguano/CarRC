var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(3000));
var jFive = require('johnny-five');

app.use(express.static(__dirname + '/app'));

//Serving the static HTML file
app.get('/', function(res) {
    res.sendFile('/index.html')
});

var board = new jFive.Board({
    repl: false
});

board.on('ready', function() {
    var speed, commands, motors;
    var motor3 = new jFive.Motor({
        pins: { pwm: 6 },
        register: { data: 8, clock: 4, latch: 12 },
        bits: { a: 5, b: 7 }
    });


    var motor4 = new jFive.Motor({
        pins: { pwm: 5 },
        register: { data: 8, clock: 4, latch: 12 },
        bits: { a: 0, b: 6 }
    });

    commands = null;
    speed = 255;

    io.on('connection', function(socket) {
        socket.on('stop', function(data) {
            console.log('frenado');
            motor3.stop();
            motor4.stop();
        });

        socket.on('start', function(data) {
            console.log('acelerando');
            motor3.fwd(data.kmVelocidad);
            motor4.fwd(data.kmVelocidad);
        });

        socket.on('reverse', function(data) {
            console.log('retrocediendo');
            motor3.rev(data.kmVelocidad);
            motor4.rev(data.kmVelocidad);
        });

        socket.on('left', function(data) {
            console.log('girando');
            motor3.fwd(data.mVelocidadL);
            motor4.fwd(data.mVelocidadR);
        });

        socket.on('right', function(data) {
            motor3.fwd(data.mVelocidadR);
            motor4.fwd(data.mVelocidadL);
        });
    });
});