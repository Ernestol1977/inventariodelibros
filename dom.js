// Captura los valores del Input
function capturarValores(){
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

function crearString(){
    let string="";

    for(libro of libros){
        string +=`
    <div class="row">
        <div class="col">${libro.titulo}</div>

        <div class="col">${libro.autor}</div>

        <div class="col">${libro.editorial}</div>

        <div class="col">${libro.edicion}</div>

        <div class="col">${libro.ano}</div>

        <div class="col">${libro.numeroPaginas}</div>

        <div class="col">${libro.generoLiterario}</div>

        <div class="col">${libro.precio}</div>
        
    </div>
        `
    }


    return string
}

// Definición botón Ingresar
let btnIngresar = document.getElementById("ingresaLibro")
btnIngresar.addEventListener("click", () => {
    let nuevoLibro=capturarValores()
    agregarlibro(nuevoLibro)
    
    let cuerpo = document.getElementById("mostrar");
    cuerpo.textContent=""

    let divMostrar = document.createElement("div")
    divMostrar.innerHTML=crearString()

    cuerpo.appendChild(divMostrar)

    document.getElementById("reset").reset();
})

