class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log("Saludar: " + this.nombre + ", Edad: " + this.edad);
    }
}

let personita = new Persona('Yuliana', 23);
personita.saludar();

class Estudiante extends Persona { 
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificacion = [];
    }

    saludar() {
        console.log("Saludar: " + this.nombre + ", Edad: " + this.edad + ", Calificaciones: " + this.calificacion);
    }

    agregarCalificacion(calificaciones) {
        this.calificacion.push(calificaciones);
        console.log("Estudiante: " + this.nombre + ", Nota agregada: " + calificaciones);
    }

    obtenerPromedio() {
        let resultado = 0;
        let promedio = 0;
        for (let i = 0; i < this.calificacion.length; i++) {
            resultado += this.calificacion[i];
        }
        if (this.calificacion.length > 0) {
            promedio = resultado / this.calificacion.length;
        }
        console.log("Promedio de notas: " + promedio);
        return promedio; 
    }
}

let estudiante = null;  

// Crear Estudiante
document.querySelector('#crearEstudiante').addEventListener('click', () => {
    const nombre = document.querySelector('#nombre').value;
    const edad = document.querySelector('#edad').value;

    if (nombre && edad) {
        estudiante = new Estudiante(nombre, parseInt(edad));  // Instanciamos correctamente
        estudiante.saludar();
        document.querySelector('#mensaje').textContent = `Estudiante ${nombre} creado. ¡Listo para agregar calificaciones!`;
    } else {
        document.querySelector('#mensaje').textContent = "Por favor, ingresa un nombre y una edad válidos.";
    }
});

// Función para agregar calificación
document.querySelector('#agregarCalificacion').addEventListener('click', () => {
    if (estudiante) {
        const calificacion = document.querySelector('#calificacion').value;
        if (calificacion) {
            estudiante.agregarCalificacion(parseInt(calificacion));
            document.querySelector('#mensaje').textContent = `Calificación ${calificacion} agregada.`;
        } else {
            document.querySelector('#mensaje').textContent = "Por favor, ingresa una calificación.";
        }
    } else {
        document.querySelector('#mensaje').textContent = "Primero debes crear un estudiante.";
    }
});

// Función para mostrar el promedio de calificaciones
document.querySelector('#mostrarPromedio').addEventListener('click', () => {
    if (estudiante) {
        const promedio = estudiante.obtenerPromedio();
        document.querySelector('#mensaje').textContent = `El promedio de calificaciones es: ${promedio}`;
    } else {
        document.querySelector('#mensaje').textContent = "Primero debes crear un estudiante.";
    }
});
