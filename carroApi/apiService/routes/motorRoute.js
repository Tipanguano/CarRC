'use strict';
module.exports = function(app) {
    var motorApp = require('../controller/motorController')

    app.route('/motor')
        .post(motorApp.correr);


    app.route('/carro')
        .post(motorApp.onOff);
};