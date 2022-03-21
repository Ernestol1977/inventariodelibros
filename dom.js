// Captura los valores del Input
function capturarValores() {
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let editorial = document.getElementById("editorial").value;
    let edicion = document.getElementById("edicion").value;
    let ano = document.getElementById("ano").value;
    let numeroPaginas = document.getElementById("numeroPaginas").value;
    let generoLiterario = document.getElementById("generoLiterario").value;
    let precio = document.getElementById("precio").value;

    return new Libro(titulo, autor, editorial, edicion, ano, numeroPaginas, generoLiterario, precio)

}

function crearString() {
    let librostraidos = capturarStorage()
    let string = "";

    for (const libro of librostraidos) {
        string += `
    <div class="row contenido libro">
        <div class="col tituloLibro">${libro.titulo}</div>

        <div class="col">${libro.autor}</div>

        <div class="col">${libro.editorial}</div>

        <div class="col">${libro.edicion}</div>

        <div class="col">${libro.ano}</div>

        <div class="col">${libro.numeroPaginas}</div>

        <div class="col">${libro.generoLiterario}</div>

        <div class="col">${libro.precio}</div>
        
        <div class="col">
            <button class="btn btnModificar">modificar</button>

            <button id="${libro.titulo}" class="btn btn-outline-dark" type="submit">Eliminar</button>
        </div>
    </div>
    `
    // let btnEliminar = document.getElementById(`${libro.titulo}`)
    // btnEliminar.addEventListener("click", () =>
    // eliminarDeAUno()
    // )
    }
    
    return string
}


function actualizarPantalla() {
    let cuerpo = document.getElementById("mostrar");
    cuerpo.textContent = ""

    let divMostrar = document.createElement("div")
    divMostrar.innerHTML = crearString()

    cuerpo.appendChild(divMostrar)

    document.getElementById("reset").reset();
}

// Definición botón Ingresar
let btnIngresar = document.getElementById("ingresaLibro")
btnIngresar.addEventListener("click", () => {

    let nuevoLibro = capturarValores();
    guardarNuevoLibro(nuevoLibro);

    actualizarPantalla()
})

// Definir botón borrar todo
let btnborrar = document.getElementById("eliminarLibro");
btnborrar.addEventListener("click", () => {

    let cuerpo = document.getElementById("mostrar");
    cuerpo.textContent = ""
    localStorage.clear()
    libros = [];
})

// Definir botón Actualizar
let btnActualizar = document.getElementById("Actualizar");
btnActualizar.addEventListener("click", () => {

    actualizarPantalla()
})

