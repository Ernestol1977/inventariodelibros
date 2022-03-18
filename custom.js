// Creo la clase
class Libro {
    constructor(titulo, autor, editorial, edicion, ano, numeroPaginas, generoLiterario, precio) {
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

// verifica la existencia de un libro en la lista y me retorna boolean
function verificarExistencia(libro){
    for(item of libros){
        if(item.titulo == libro.titulo ){
            return true
        }
    }
    return false
}

//recive un objeto tipo Libro y lo almacena en la lista Libros
function agregarlibro(libro){
    if(verificarExistencia(libro)){
        alert("Libro existente")
    }else{
        libros.unshift(libro)
    }
}
