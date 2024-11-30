class Libros {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

class LibroDigital extends Libros {
    constructor(titulo, autor, tamaño) {
        super(titulo, autor);
        this.tamaño = tamaño;
    }
}

class LibroFisico extends Libros {
    constructor(titulo, autor, numPag) {
        super(titulo, autor);
        this.numPag = numPag;
    }
}

let libros = [
    new LibroFisico("Crónicas de una muerte anunciada", "Gabriel García", 200),
    new LibroDigital("100 años de soledad", "Gabriel García", "2G"),
    new LibroFisico("Cien años de soledad", "Gabriel García", 300),
    new LibroFisico("La sombra del viento", "Carlos Ruiz Zafón", 500),
    new LibroDigital("El alquimista", "Paulo Coelho", "3G")
];

// Función para listar libros según el autor
let listarlibros = (libros, autor) => {
    return libros.filter(libro => libro.autor.toLowerCase() === autor.toLowerCase());
}

// Conexión con el HTML
document.addEventListener("DOMContentLoaded", () => {
    const autorInput = document.querySelector("#autorInput");
    const buscarBtn = document.querySelector("#buscarBtn");
    const resultadosDiv = document.querySelector("#resultados");

    // Evento de búsqueda
    buscarBtn.addEventListener("click", () => {
        const autor = autorInput.value.trim();
        if (autor === "") {
            alert("Por favor ingrese el autor para buscar.");
        } else {
            // Filtrar los libros
            const librosFiltrados = listarlibros(libros, autor);
            // Mostrar los resultados
            resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores
            if (librosFiltrados.length > 0) {
                librosFiltrados.forEach(libro => {
                    const libroDiv = document.createElement("div");
                    libroDiv.innerHTML = `
                        <h3>${libro.titulo}</h3>
                        <p>Autor: ${libro.autor}</p>
                        ${libro instanceof LibroFisico ? `<p>Páginas: ${libro.numPag}</p>` : ''}
                        ${libro instanceof LibroDigital ? `<p>Tamaño: ${libro.tamaño}</p>` : ''}
                    `;
                    resultadosDiv.appendChild(libroDiv);
                });
            } else {
                resultadosDiv.innerHTML = `<p>No se encontraron libros de ${autor}.</p>`;
            }
        }
    });
});
