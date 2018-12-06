'use strict';
module.exports = function(app) {
    var carroApp = require('../controller/CarroController')

    app.route('/carro')
        .post(carroApp.onOff);


};