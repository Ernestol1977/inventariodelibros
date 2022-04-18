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
        return [];
    };
    return listaStorage; 
}

// Carga los datos en Storage
function cargaStorage (listaStorage) {
    localStorage.setItem("librosEnStorage",JSON.stringify(listaStorage));
};

// Guardar libro
function guardarNuevoLibro(libro){
    let listaStorage = capturarStorage();
    listaStorage.unshift(libro);
    cargaStorage(listaStorage);
};

// Borrar un libro del storage
function eliminarDeAUno(codigo){
    const listaStorage = capturarStorage();
    const nuevaLista = [];

    for(const libro of listaStorage){
        if(libro.isbn==codigo){
            continue;
        };
        nuevaLista.push(libro);
    };

    cargaStorage(nuevaLista);
};


// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

// Función para enviar libro
function librosString (storage) {
    let string = ""; 
    for (const libro of storage) {
        string += `
        Libro: ${libro.isbn}, Titulo: ${libro.titulo}, Autor: ${libro.autor}, Editorial: ${libro.editorial} || 
        `
    };
    return string; 
};