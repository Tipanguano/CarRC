class motor {
    constructor(accion, kmVelocidad) {
        this.KmVelocidad = kmVelocidad;
        this.Accion = accion;
    }
    GiroIzquierda(mVelDerecha, mVelIzquierda) {
        this.mVelDerecha = mVelDerecha;
        this.mVelIzquierda = mVelIzquierda;
    }
    GiroDerecha(mVelIzquierda, mVelDerecha) {
        this.mVelDerecha = mVelDerecha;
        this.mVelIzquierda = mVelIzquierda;
    }

}

module.exports = motor;