class CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Depósito de $${cantidad} realizado. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("El depósito debe ser mayor a 0.");
        }
    }

    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Retiro de $${cantidad} realizado. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("Fondos insuficientes o monto inválido.");
        }
    }

    mostrarInfo() {
        return `Cuenta: ${this.numeroCuenta}, Saldo: $${this.saldo}`;
    }
}

class CuentaAhorros extends CuentaBancaria {
    constructor(numeroCuenta, saldo, tasaInteres) {
        super(numeroCuenta, saldo);
        this.tasaInteres = tasaInteres;
    }

    aplicarIntereses() {
        const interes = this.saldo * (this.tasaInteres / 100);
        this.saldo += interes;
        console.log(`Intereses aplicados: $${interes.toFixed(2)}. Nuevo saldo: $${this.saldo.toFixed(2)}`);
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} - Tasa de interés: ${this.tasaInteres}%`;
    }
}

class CuentaCorriente extends CuentaBancaria {
    constructor(numeroCuenta, saldo, limiteDescubierto) {
        super(numeroCuenta, saldo);
        this.limiteDescubierto = limiteDescubierto;
    }

    retirar(cantidad) {
        if (cantidad > 0 && (this.saldo - cantidad >= -this.limiteDescubierto)) {
            this.saldo -= cantidad;
            console.log(`Retiro de $${cantidad} realizado. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("Fondos insuficientes o monto excede el límite de descubierto.");
        }
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} - Límite de descubierto: $${this.limiteDescubierto}`;
    }
}

class Banco {
    constructor() {
        this.cuentas = [];
    }

    agregarCuenta(cuenta) {
        this.cuentas.push(cuenta);
    }

    realizarOperacion(operacion, cantidad) {
        this.cuentas.forEach(cuenta => {
            if (operacion === 'depositar') {
                cuenta.depositar(cantidad);
            } else if (operacion === 'retirar') {
                cuenta.retirar(cantidad);
            }
        });
    }

    aplicarIntereses() {
        this.cuentas.forEach(cuenta => {
            if (cuenta instanceof CuentaAhorros) {
                cuenta.aplicarIntereses();
            }
        });
    }

    mostrarCuentas() {
        return this.cuentas.map(cuenta => cuenta.mostrarInfo()).join('<br>');
    }
}

let cuentaAhorros1 = new CuentaAhorros('12345', 1000, 5);
let cuentaCorriente1 = new CuentaCorriente('67890', 500, 200);
let cuentaAhorros2 = new CuentaAhorros('23456', 2000, 3);

let banco = new Banco();
banco.agregarCuenta(cuentaAhorros1);
banco.agregarCuenta(cuentaCorriente1);
banco.agregarCuenta(cuentaAhorros2);

// Seleccionar elementos mediante querySelector
const operacionSelect = document.querySelector(".operacion");
const cantidadInput = document.querySelector(".cantidad");
const realizarOperacionBtn = document.querySelector(".realizar-operacion");
const aplicarInteresesBtn = document.querySelector(".aplicar-intereses");
const mostrarCuentasBtn = document.querySelector(".mostrar-cuentas");
const informacionCuentasDiv = document.querySelector(".informacion-cuentas");

// Agregar eventos a los botones
realizarOperacionBtn.addEventListener("click", () => {
    const operacion = operacionSelect.value;
    const cantidad = parseFloat(cantidadInput.value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor ingresa una cantidad válida.");
        return;
    }

    banco.realizarOperacion(operacion, cantidad);
});

aplicarInteresesBtn.addEventListener("click", () => {
    banco.aplicarIntereses();
});

mostrarCuentasBtn.addEventListener("click", () => {
    // Mostrar las cuentas en el div
    informacionCuentasDiv.innerHTML = banco.mostrarCuentas();
});

