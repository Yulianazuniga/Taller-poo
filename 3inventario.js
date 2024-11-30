
class Producto {
    constructor(nombre, precio, cantidadEnStock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }

    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    getNombre() {
        return this.nombre;
    }

    setPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
    }

    getPrecio() {
        return this.precio;
    }

    setCantidadEnStock(nuevaCantidad) {
        this.cantidadEnStock = nuevaCantidad;
    }

    getCantidadEnStock() {
        return this.cantidadEnStock;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.cantidadEnStock}`);
    }
}

class Electrodomestico extends Producto {
    constructor(nombre, precio, cantidadEnStock, marca) {
        super(nombre, precio, cantidadEnStock);
        this.marca = marca;
        this.productos = []; // Array para almacenar productos adicionales
    }

    agregarProducto(nombre, precio, cantidadEnStock, marca) {
        const nuevoProducto = new Producto(nombre, precio, cantidadEnStock);
        this.productos.push(nuevoProducto);
        console.log(`Producto agregado: ${nuevoProducto.getNombre()}`);
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.cantidadEnStock}, Marca: ${this.marca}`);
    }

    listarProductosConPocoStock() {
        console.log("Productos con stock menor a 10:");
        return this.productos.filter(producto => producto.getCantidadEnStock() < 10);
    }
}

// Crear instancia del electrodoméstico principal
let electrodomesticoPrincipal = new Electrodomestico('Lavadora', 45000, 56, 'Haceb');

// Mostrar información del electrodoméstico principal en el HTML
document.querySelector('#nombreElectrodomestico').textContent = electrodomesticoPrincipal.getNombre();
document.querySelector('#precioElectrodomestico').textContent = electrodomesticoPrincipal.getPrecio();
document.querySelector('#stockElectrodomestico').textContent = electrodomesticoPrincipal.getCantidadEnStock();
document.querySelector('#marcaElectrodomestico').textContent = electrodomesticoPrincipal.marca;

// Agregar productos al electrodoméstico
electrodomesticoPrincipal.agregarProducto('Estufa', 5600, 5, 'Haceb');
electrodomesticoPrincipal.agregarProducto('Licuadora', 8522, 78, 'Imusa');
electrodomesticoPrincipal.agregarProducto('TV', 78000, 6, 'Kalley');
electrodomesticoPrincipal.agregarProducto('Microondas', 96000, 100, 'Haceb');

// Función para agregar un producto a través del formulario
document.querySelector('#agregarProducto').addEventListener('click', () => {
    const nombre = document.querySelector('#nombreProducto').value.trim();
    const precio = parseFloat(document.querySelector('#precioProducto').value);
    const cantidadEnStock = parseInt(document.querySelector('#stockProducto').value);
    const marca = document.querySelector('#marcaProducto').value.trim();

    if (nombre && !isNaN(precio) && !isNaN(cantidadEnStock) && marca) {
        electrodomesticoPrincipal.agregarProducto(nombre, precio, cantidadEnStock, marca);
        document.querySelector('#mensaje').textContent = `Producto ${nombre} agregado correctamente.`;

        // Limpiar los campos del formulario
        document.querySelector('#nombreProducto').value = '';
        document.querySelector('#precioProducto').value = '';
        document.querySelector('#stockProducto').value = '';
        document.querySelector('#marcaProducto').value = '';
    } else {
        document.querySelector('#mensaje').textContent = "Por favor, ingrese todos los campos correctamente.";
    }
});

// Función para listar los productos con stock menor a 10
document.querySelector('#verProductosConPocoStock').addEventListener('click', () => {
    const productosConPocoStock = electrodomesticoPrincipal.listarProductosConPocoStock();
    const contenedorProductos = document.querySelector('#productosPocoStock');
    
    contenedorProductos.innerHTML = ''; // Limpiar el contenido antes de mostrar los nuevos productos

    if (productosConPocoStock.length > 0) {
        productosConPocoStock.forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.textContent = `Nombre: ${producto.getNombre()}, Precio: ${producto.getPrecio()}, Stock: ${producto.getCantidadEnStock()}`;
            contenedorProductos.appendChild(divProducto);
        });
    } else {
        contenedorProductos.textContent = 'No hay productos con stock menor a 10.';
    }
});
