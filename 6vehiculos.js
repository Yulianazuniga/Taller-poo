
//Crea una clase base Vehiculo con atributos como marca, modelo y año. Luego, crea clases
 //derivadas como Auto y Moto que hereden de Vehiculo. Agrega métodos específicos a cada clase, 
 //como conducir() en Auto. Usa un arreglo para almacenar vehículos y crea un método que los liste según su tipo.

 class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarInfo() {
        return `${this.marca} ${this.modelo} (${this.año})`;
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, año) {
        super(marca, modelo, año);
    }

    conducirAuto() {
        console.log(`Yo conduzco un auto de marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año}`);
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, año) {
        super(marca, modelo, año);
        this.tipo = [];
    }

    conducirMoto() {
        console.log(`Yo conduzco una moto de marca: ${this.marca}, modelo: ${this.modelo}, año: ${this.año}`);
    }

    agregarVehiculo(vehiculo) {
        this.tipo.push(vehiculo);
        console.log(`Vehículo agregado: ${vehiculo.marca} ${vehiculo.modelo}`);
    }

    listarPorTipo(tipo) {
        console.log(`Listando vehículos de tipo: ${tipo.name}`);
        let result = "";
        for (let i = 0; i < this.tipo.length; i++) {
            if (this.tipo[i] instanceof tipo) {
                result += this.tipo[i].mostrarInfo() + "<br>";
            }
        }
        return result || "No se encontraron vehículos de este tipo.";
    }
}

// Instanciamos los vehículos
const auto1 = new Auto('Toyota', 'Corolla', 2021);
const moto1 = new Moto('Yamaha', 'YZF-R6', 2019);

// Agregar eventos al HTML para interactuar con los vehículos
const listaVehiculosDiv = document.querySelector(".vehiculos-lista");
const agregarVehiculoBtn = document.querySelector(".agregar-vehiculo");
const tipoSelect = document.querySelector(".tipo-vehiculo");
const mostrarPorTipoBtn = document.querySelector(".mostrar-por-tipo");
const marcaInput = document.querySelector(".marca");
const modeloInput = document.querySelector(".modelo");
const añoInput = document.querySelector(".año");

// Arreglo donde se almacenarán los vehículos
const vehiculos = [auto1, moto1];

agregarVehiculoBtn.addEventListener("click", () => {
    const marca = marcaInput.value;
    const modelo = modeloInput.value;
    const año = añoInput.value;
    const tipo = tipoSelect.value;

    if (!marca || !modelo || !año) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    let nuevoVehiculo;
    if (tipo === "Auto") {
        nuevoVehiculo = new Auto(marca, modelo, parseInt(año));
    } else if (tipo === "Moto") {
        nuevoVehiculo = new Moto(marca, modelo, parseInt(año));
    }

    vehiculos.push(nuevoVehiculo);
    listaVehiculosDiv.innerHTML = "Vehículo agregado: " + nuevoVehiculo.mostrarInfo();
});

mostrarPorTipoBtn.addEventListener("click", () => {
    const tipo = tipoSelect.value;
    let vehiculosPorTipo = "";

    if (tipo === "Auto") {
        vehiculosPorTipo = moto1.listarPorTipo(Auto);
    } else if (tipo === "Moto") {
        vehiculosPorTipo = moto1.listarPorTipo(Moto);
    }

    listaVehiculosDiv.innerHTML = vehiculosPorTipo;
});
