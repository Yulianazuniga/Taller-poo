
class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

   
    mostrarInfo() {
        return `Nombre: ${this.nombre}, Tipo: ${this.tipo}`;
    }

    
    hacerSonido() {
        return `${this.nombre} hace un sonido.`;
    }
}


class Perro extends Mascota {
    constructor(nombre) {
        super(nombre, "Perro");
    }

    ladrar() {
        return `${this.nombre} está ladrando: ¡Guau! ¡Guau!`;
    }

    hacerSonido() {
        return this.ladrar();
    }
}


class Gato extends Mascota {
    constructor(nombre) {
        super(nombre, "Gato");
    }

   
    maullar() {
        return `${this.nombre} está maullando: ¡Miau! ¡Miau!`;
    }

   
    hacerSonido() {
        return this.maullar();
    }
}


let perro1 = new Perro('Dulcan');
let gato1 = new Gato('Goa');
let perro2 = new Perro('Max');
let gato2 = new Gato('Lucas');

let mascotas = [perro1, gato1, perro2, gato2];

document.addEventListener("DOMContentLoaded", () => {
    const resultadosDiv = document.querySelector("#resultados");

  
    mascotas.forEach(mascota => {
        const mascotaDiv = document.createElement("div");

        
        mascotaDiv.innerHTML += `<p><strong>${mascota.mostrarInfo()}</strong></p>`;

     
        mascotaDiv.innerHTML += `<p>${mascota.hacerSonido()}</p>`;

        resultadosDiv.appendChild(mascotaDiv);
    });
});
