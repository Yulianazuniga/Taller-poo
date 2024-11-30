
class Transporte {
    constructor(capacidad, tipoCombustible) {
        this.capacidad = capacidad;
        this.tipoCombustible = tipoCombustible;
    }

    // Método para mostrar información general del transporte
    mostrarInfo() {
        return `Capacidad: ${this.capacidad}, Tipo de combustible: ${this.tipoCombustible}`;
    }
}

// Subclase Autobus que hereda de Transporte
class Autobus extends Transporte {
    constructor(capacidad, tipoCombustible, numeroDePlazas) {
        super(capacidad, tipoCombustible);
        this.numeroDePlazas = numeroDePlazas;
    }

    // Método específico para arrancar el autobús
    arrancar() {
        return "El autobús ha arrancado.";
    }

    // Sobrescribir mostrarInfo para incluir el número de plazas
    mostrarInfo() {
        return `${super.mostrarInfo()}, Número de plazas: ${this.numeroDePlazas}`;
    }
}

// Subclase Bicicleta que hereda de Transporte
class Bicicleta extends Transporte {
    constructor(capacidad, tipoCombustible, tipoDeFreno) {
        super(capacidad, tipoCombustible);
        this.tipoDeFreno = tipoDeFreno;
    }

    // Método específico para pedalear la bicicleta
    pedalear() {
        return "La bicicleta está en movimiento.";
    }

    // Sobrescribir mostrarInfo para incluir el tipo de freno
    mostrarInfo() {
        return `${super.mostrarInfo()}, Tipo de freno: ${this.tipoDeFreno}`;
    }
}

// Crear instancias de Autobus y Bicicleta
let autobus1 = new Autobus(50, 'Diesel', 40);
let bicicleta1 = new Bicicleta(1, 'Ninguno', 'V-Brake');
let autobus2 = new Autobus(30, 'Gasolina', 30);
let bicicleta2 = new Bicicleta(1, 'Ninguno', 'Disco');

// Almacenar los transportes en un arreglo
let transportes = [autobus1, bicicleta1, autobus2, bicicleta2];

// Conexión con el HTML
document.addEventListener("DOMContentLoaded", () => {
    const resultadosDiv = document.querySelector("#resultados");

    // Recorrer el arreglo de transportes y mostrar la información
    transportes.forEach(transporte => {
        const transporteDiv = document.createElement("div");
        
        // Mostrar la información del transporte
        transporteDiv.innerHTML += `<p><strong>Transporte:</strong> ${transporte.mostrarInfo()}</p>`;
        
        // Ejecutar acciones específicas dependiendo del tipo de transporte
        if (transporte instanceof Autobus) {
            transporteDiv.innerHTML += `<p>${transporte.arrancar()}</p>`;
        } else if (transporte instanceof Bicicleta) {
            transporteDiv.innerHTML += `<p>${transporte.pedalear()}</p>`;
        }

        resultadosDiv.appendChild(transporteDiv);
    });
});
