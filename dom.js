// Captura los valores del Input
function capturarValores() {
    let isbn = document.getElementById("isbn").value;
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let editorial = document.getElementById("editorial").value;
    let edicion = document.getElementById("edicion").value;
    let ano = document.getElementById("ano").value;
    let numeroPaginas = document.getElementById("numeroPaginas").value;
    let generoLiterario = document.getElementById("generoLiterario").value;

    return new Libro(isbn, titulo, autor, editorial, edicion, ano, numeroPaginas, generoLiterario)

}

function crearString() {
    let librostraidos = capturarStorage()
    let string = "";

    for (const libro of librostraidos) {
        string += `
        <div class="row py-1">

        <div class="col" name="libro">${libro.isbn}</div>
        
        <div class="col" id="portada"></div>

        <div class="col tituloLibro text-capitalize" name="libro">${libro.titulo}</div>

        <div class="col text-capitalize" name="libro">${libro.autor}</div>

        <div class="col text-capitalize">${libro.editorial}</div>

        <div class="col">${libro.edicion}</div>

        <div class="col">${libro.ano}</div>

        <div class="col">${libro.numeroPaginas}</div>

        <div class="col">${libro.generoLiterario}</div>

        
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

    Toastify({
        text: "Libro ingresado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "#796248",
            // border: '5px',
        },
        onClick: function () {}
    }).showToast();
})

// Definir botón borrar todo
let btnborrar = document.getElementById("eliminarLibro");
btnborrar.addEventListener("click", () => {
    let cuerpo = document.getElementById("mostrar");

    // Alert antes de borrar
    Swal.fire({
        title: 'Esta seguro?',
        text: "Esta por borrar toda su lista, incluyendo Storage!",
        icon: 'warning',
        iconColor: 'yellow',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        background: '#d9c4aa',
        cancelButtonColor: '#198754',
        confirmButtonText: 'Borrar todos'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Borrado!',
                text: 'Sus libros han sido borrados con exito!',
                icon: 'success',
                iconColor: '#418a83',
                background: '#d9c4aa',
                confirmButtonColor: '#212529'
            })
            cuerpo.textContent = ""
            localStorage.clear()
            libros = [];
        }
    })

    if (true) {

    }

})

// Definir botón Actualizar
let btnActualizar = document.getElementById("Actualizar");
btnActualizar.addEventListener("click", () => {

    actualizarPantalla()
})

// Definir botón Enviar mail
let btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener("click", () => {

    mail()
})

// asincronimo para el funcionamiento del boton de enviar
async function mail () {
    const { value: email } = await Swal.fire({
        title: 'Enter your email address',
        text: "We won't save your information",
        input: 'email',
        inputPlaceholder: 'example@gmail.com',
    });
    if (email) {
        Swal.fire(`Entered email: ${email}`)
    }
    const { value: name } = await Swal.fire({
        title: 'Enter your name',
        input: 'text',
        inputPlaceholder: 'Name',
    });
    btnEnviar.innerText = "Sending..."
    input(name, email); 
}   

function input(name,email) {
    let x = {
        name: `${name}`,
        email: `${email}`,
        libro: enviar()
    }


    emailjs.send('service_1om73uc', 'template_pgv2qeb', x)
        .then(function (response) {
            Swal.fire({
                title: "E-mail sent",
                icon: "success"
            })
            btnEnviar.innerText = "Send to E-mail"
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            Swal.fire({
                title: "Couldn't send your e-mail, try again later",
                icon: "error"
            })
            console.log('FAILED...', error);
        });
} 


// lo que envio como contenido del mail
function enviar(storage) {
    let string = "";
    for (const lib of storage) {
        string += `
|| ISBN: ${lib.isbn} Titulo: ${lib.titulo} Autor: ${lib.autor} ||
`
    }
    return string;
}

x