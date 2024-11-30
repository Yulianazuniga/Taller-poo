class Curso {
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
    }

    agregarEstudiantes(estudiante) {
        this.estudiantes.push(estudiante);
    }

    calcularPromedioCurso() {
        let suma = 0;
        let total = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            for (let j = 0; j < this.estudiantes[i].calificaciones.length; j++) {
                suma += this.estudiantes[i].calificaciones[j];
                total += 1;
            }
        }
        return suma / total;
    }
}

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, persona: ${this.nombre}, tu edad es: ${this.edad}`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
        this.calificaciones = [];
    }

    agregarCalificacion(calificacion) {
        if (!isNaN(calificacion) && calificacion >= 0) {
            this.calificaciones.push(parseFloat(calificacion));
        } else {
            alert("Debes ingresar un valor numérico válido para la calificación.");
        }
    }

    calcularPromedio() {
        if (this.calificaciones.length > 0) {
            let resultado = 0;
            this.calificaciones.forEach(calificacion => {
                resultado += calificacion;
            });
            return resultado / this.calificaciones.length;
        } else {
            return 0;
        }
    }
}

// Crear una instancia del curso
const curso = new Curso("Programación");

// Funciones para interactuar con el HTML
const agregarEstudianteBtn = document.querySelector("#agregarEstudiante");
const agregarCalificacionBtn = document.querySelector("#agregarCalificacion");
const calcularPromedioBtn = document.querySelector("#calcularPromedio");
const estudiantesList = document.querySelector("#estudiantesLista");
const promedioCursoDiv = document.querySelector("#promedioCurso");

let estudianteActual = null;

agregarEstudianteBtn.addEventListener("click", () => {
    const nombreEstudiante = document.querySelector("#nombreEstudiante").value;
    const edadEstudiante = document.querySelector("#edadEstudiante").value;

    if (nombreEstudiante && edadEstudiante) {
        estudianteActual = new Estudiante(nombreEstudiante, edadEstudiante);
        curso.agregarEstudiantes(estudianteActual);

        estudiantesList.innerHTML += `<li>${estudianteActual.nombre} (${estudianteActual.edad} años)</li>`;

        alert(`Estudiante ${estudianteActual.nombre} agregado.`);
    } else {
        alert("Por favor, ingresa el nombre y la edad del estudiante.");
    }
});

agregarCalificacionBtn.addEventListener("click", () => {
    const calificacion = document.querySelector("#calificacion").value;

    if (estudianteActual) {
        estudianteActual.agregarCalificacion(calificacion);
        alert(`Calificación ${calificacion} agregada a ${estudianteActual.nombre}.`);
    } else {
        alert("Debes agregar primero un estudiante.");
    }
});

calcularPromedioBtn.addEventListener("click", () => {
    const promedio = curso.calcularPromedioCurso();
    promedioCursoDiv.innerHTML = `Promedio del curso: ${promedio.toFixed(2)}`;
});
