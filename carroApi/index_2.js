var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {

    var motor3 = new five.Motor({
        pins: { pwm: 6 },
        register: { data: 8, clock: 4, latch: 12 },
        bits: { a: 5, b: 7 }
    });

    var motor4 = new five.Motor({
        pins: { pwm: 5 },
        register: { data: 8, clock: 4, latch: 12 },
        bits: { a: 0, b: 6 }
    });


    // Start the motor at maximum speed
    //motor3.forward(255);

    this.repl.inject({
        motor3:motor3,
        motor4:motor4,
        carro:{motor4:motor4,
                motor3:motor3,
                correr:function (velocidad) {
                    console.log(velocidad);
                    velocidad = typeof velocidad !== 'undefined' ?  velocidad : 255;
                    console.log(velocidad);
                    motor3.forward(velocidad);
                    motor4.forward(velocidad);
                },
                retroceder:function () {
                    motor4.rev();
                    motor3.rev();
                },
                parar:function () {
                    motor4.stop();
                    motor3.stop();
                }
        }
    })

});

board.on('error', function() {
    console.log(error);
});