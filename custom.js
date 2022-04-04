// Creo la clase
class Libro {
    constructor(isbn, titulo, autor, editorial, edicion, ano, numeroPaginas, generoLiterario) {

        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.edicion = edicion;
        this.ano = ano;
        this.numeroPaginas = numeroPaginas;
        this.generoLiterario = generoLiterario;
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

/*
function eliminarDeAUno(libro) {
    let index = libros.findIndex((elemento) => elemento.titulo === libro.titulo);
    libros.splice(index, 1);

    if (libros.lenght === 0) {
        libros = [];
    }

    localStorage.setItem("librosEnStorage", JSON.stringify(listaStorage));
    crearString(libros);
}
*/