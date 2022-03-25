// Creo la clase
class Libro {
    constructor(titulo, autor, editorial, edicion, ano, numeroPaginas, generoLiterario, precio) {
        // this.isbn = isbn; agregar resto
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.edicion = edicion;
        this.ano = ano;
        this.numeroPaginas = numeroPaginas;
        this.generoLiterario = generoLiterario;
        this.precio = precio
        this.estaDisponible = true;
    }
    
}

// Declaración de array e instanciar funcion agregarlibro
let libros = [];

// Traer información de Storage.
function capturarStorage() {
    let listaStorage= JSON.parse(localStorage.getItem("librosEnStorage"))
    if(listaStorage == null || listaStorage == undefined){
        return []
    }
    return listaStorage; 
}

// Carga los datos en Storage
function cargaStorage (listaStorage) {
    localStorage.setItem("librosEnStorage",JSON.stringify(listaStorage));
}

// Guardar libro
function guardarNuevoLibro(libro){
    let listaStorage = capturarStorage()
    listaStorage.unshift(libro)
    cargaStorage(listaStorage)
}

function eliminarDeAUno(libro) {
    let index = libros.findIndex((elemento) => elemento.titulo === libro.titulo);
    libros.splice(index, 1);

    if (libros.lenght === 0) {
        libros = [];
    }

    localStorage.setItem("librosEnStorage", JSON.stringify(listaStorage));
    crearString(libros);
} 


DateTime.now().setZone('America/New_York').minus({weeks:1}).endOf('day').toISO();