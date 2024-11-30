class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
}

class Leon extends Animal {
    constructor(nombre) {
        super(nombre, 'León');
    }

    rugir() {
        console.log(`${this.nombre} (${this.especie}) ruge: ¡ROAR!`);
    }
}

class Elefante extends Animal {
    constructor(nombre) {
        super(nombre, 'Elefante');
    }

    trompetear() {
        console.log(`${this.nombre} (${this.especie}) trompetea: ¡fiifif!`);
    }
}

class Tigre extends Animal {
    constructor(nombre) {
        super(nombre, 'Tigre');
    }

    gruñir() {
        console.log(`${this.nombre} (${this.especie}) gruñe: ¡GRRR!`);
    }
}

class Zoologico {
    constructor() {
        this.animales = []; // Arreglo para almacenar los animales
    }

    agregarAnimal(animal) {
        this.animales.push(animal); // Agregar el animal al zoológico
    }

    hacerSonidos() {
        // Hacer sonidos de todos los animales en el zoológico
        if (this.animales.length === 0) {
            console.log("No hay animales en el zoológico para hacer sonidos.");
        }
        for (let i = 0; i < this.animales.length; i++) {
            let animal = this.animales[i];
            if (animal instanceof Leon) {
                animal.rugir();
            } else if (animal instanceof Elefante) {
                animal.trompetear();
            } else if (animal instanceof Tigre) {
                animal.gruñir();
            }
        }
    }
}

// Crear una instancia del zoológico
let zoologico = new Zoologico();

// Función para agregar un animal basado en el formulario
document.querySelector('#agregarAnimal').addEventListener('click', () => {
    const nombre = document.querySelector('#nombre').value.trim();
    const especie = document.querySelector('#animal').value;

    if (nombre !== "") {
        let animal;
        if (especie === 'León') {
            animal = new Leon(nombre);
        } else if (especie === 'Elefante') {
            animal = new Elefante(nombre);
        } else if (especie === 'Tigre') {
            animal = new Tigre(nombre);
        }

        zoologico.agregarAnimal(animal);
        document.querySelector('#mensaje').textContent = `${nombre} el ${especie} ha sido agregado al zoológico.`;
    } else {
        document.querySelector('#mensaje').textContent = "Por favor, ingresa un nombre válido.";
    }

    document.querySelector('#nombre').value = ''; // Limpiar el campo de nombre
});

// Función para hacer sonar los animales en el zoológico
document.querySelector('#hacerSonidos').addEventListener('click', () => {
    if (zoologico.animales.length === 0) {
        document.querySelector('#mensaje').textContent = "No hay animales en el zoológico para hacer sonidos.";
    } else {
        zoologico.hacerSonidos(); // Reproducir los sonidos
    }
});

