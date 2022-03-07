/*
1. Ingresar libro/s
    1.1 Cuántos libros desea ingresar?
    1.2 Título, autor, editorial, edición, año, número de páginas, género (hasta escribir FIN).
// 2. Modificar libro.
// 3. Prestados:
//     3.1 A quién?
//     3.2 Cuándo?
// 4. Vendidos
//     4.1 A quién?
//     4.2 Cuándo?
//     4.3 A qué precio?
2. Mostrar, según:
    2.1 Completo.
    // 5.2 Completo (NO prestados, NO vendidos).
    2.2 Por género literario.
    2.3 Título, autor, Editorial.
    // 5.5 Título, prestado, a quién.
    // 5.5 Título, vendido, a quién, precio.
3. Salir.

Hay comentados que son para desarrollar mas adelante.
*/



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
        this.precio = precio;
        this.estaDisponible = true;
    }
}

// Declaración de array e instanciar funcion agregarlibro
let libros = [];

function agregarLibro() {

    let titulo = prompt("Ingrese en Título de la obra");

    let autor = prompt("Ingrese el autor de la Obra");
    
    let editorial = prompt("Ingrese Editorial");
        
    let edicion = parseInt(prompt("Ingrese el número de edición"));
    edicion = validarNumero(edicion)
    
    let ano = parseInt(prompt("Ingrese el año de edición"));
    ano = validarAno(ano)
    
    let numeroPaginas = parseInt(prompt("Ingrese el número de páginas de la Obra"));
    numeroPaginas = validarNumero(numeroPaginas)
    
    let generoLiterario = prompt("Ingrese el género literario");

    let precio = parseFloat(prompt("Ingrese precio de reventa"));
    precio = validarPrecio(precio)


    libros.push(new Libro(titulo, autor, editorial, edicion, ano, numeroPaginas, generoLiterario, precio));
}


// validación de números y año
function validarNumero(num) {
    while (num <= 0 || isNaN(num)) {
        num = parseInt(prompt("Ingrese un número de páginas válido"));
    }
    return num;
}

function validarPrecio(money) {
    while (money <= -1 || isNaN(money)) {
        money = parseInt(prompt("Ingrese un precio válido"));
    }
    return money;
}

function validarAno(año) {
    while (año <= 999 || isNaN(año)) {
        año = parseInt(prompt("Ingrese un año válido"));
    }
    return año;
}


// ejecución del Menú
let opcion = 0

do{
    opcion = parseInt(prompt("Ingrese la opción:\n1 Ingresar libros.\n2 Mostrar libros.\n3 Salir."));//3

    if (opcion == 1) {
        let finalizar = false
        while (finalizar == false) {
            agregarLibro()
            finalizar =! confirm("Quiere agregar otro libro?")
        }
            
        alert("Finalizó el ingreso de sus libros");
    }else if (opcion == 2) {
        console.table(libros)
        let opcionMostrar = parseInt(prompt("Cómo desea que se muestre su lista?\n 1 Completo.\n 2 Por género literario y título.\n 3 Título, autor y Editorial.\n 4 Volver al menú anterior."));
    
        if (opcionMostrar == 1) {
            for(item of libros){
                alert(`El titulo es: ${(item.titulo).toUpperCase()}\n su autor es: ${item.autor}\nla editorial es: ${(item.editorial).toUpperCase()}\nsu edición es: ${item.edicion}\nsu año de impresión es: ${item.ano}\nsu número de páginas son: ${item.numeroPaginas}\nsu precio es: $${item.precio}.`)
            }
        }
        else if (opcionMostrar == 2) {
            for(item of libros){
                alert(`Su género es es: ${item.generoLiterario}\nsu título es: ${(item.titulo).toUpperCase()}.`)
            }
        }
        else if (opcionMostrar == 3) {
            for(item of libros){
                alert(`El titulo es: ${(item.titulo).toUpperCase()}\nsu autor es: ${item.autor}\nla editorial es: ${(item.editorial).toUpperCase()}`)
            }
        }
        else if (opcionMostrar == 4) {
        }
        else {
            alert("Opción incorrecta, reintente: ");
        }
    
    }else if (opcion == 3) {
        alert("Gracias!!!");    
    }else {
        alert("Su elección fue erronea, reintente!");
    }


}while(opcion != 3)