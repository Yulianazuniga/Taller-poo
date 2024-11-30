class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }

    calcularSueldo() {
        return this.sueldoBase;
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, sueldoBase, horasTrabajadas) {
        super(nombre, sueldoBase);
        this.horasTrabajadas = horasTrabajadas;
    }

    calcularSueldo() {
        return this.sueldoBase + (this.horasTrabajadas * 10); // 10 es el pago adicional por cada hora trabajada
    }
}

class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, sueldoBase, horasTrabajadas) {
        super(nombre, sueldoBase);
        this.horasTrabajadas = horasTrabajadas;
    }

    calcularSueldo() {
        return this.sueldoBase + (this.horasTrabajadas * 8); // 8 es el pago adicional por cada hora trabajada
    }
}


let empleados = [
    new EmpleadoTiempoCompleto("Juan Pérez", 2000, 160),
    new EmpleadoMedioTiempo("Ana Gómez", 1200, 80),
    new EmpleadoTiempoCompleto("Carlos López", 2500, 170),
    new EmpleadoMedioTiempo("María Rodríguez", 1000, 50)
];

// Función para mostrar los empleados y sus sueldos en el HTML
function mostrarEmpleados() {
    const empleadosList = document.querySelector('#empleadosList');
    empleadosList.innerHTML = ''; // Limpiar cualquier contenido anterior

    empleados.forEach(empleado => {
        const divEmpleado = document.createElement('div');
        divEmpleado.textContent = `${empleado.nombre}: $${empleado.calcularSueldo()}`;
        empleadosList.appendChild(divEmpleado);
    });
}

// Mostrar los empleados y sueldos al cargar la página
window.onload = mostrarEmpleados;
