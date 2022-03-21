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
            <button class="btn btnModificar"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg></button>
            <button class="btnEliminar btn btn-outline-dark" type="submit">Eliminar</button>
        </div>
    </div>
    `
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

// Definir botón borrar todo
let btnActualizar = document.getElementById("Actualizar");
btnActualizar.addEventListener("click", () => {

    actualizarPantalla()
})

let eliminarBtn = document.querySelectorAll(".btnEliminar"); // traigo los botones "eliminar"
eliminarBtn.forEach((item) => { //por cada boton de que cada card se ejecuta la funcion
    item.addEventListener("click", (e) => {
        eliminarBtn = e.target // le pregunto donde se hizo el evento
        let libroDeHtml = eliminarBtn.closest(".libro"); //buscame el libro mas cerca de donde se hizo el evento
        let nombreLibro = libroDeHtml.querySelector(".tituloLibro").textContent // busco los datos en base del libro que agarre antes
        eliminarLibro(nombreLibro)

        actualizarPantalla()
    })

})