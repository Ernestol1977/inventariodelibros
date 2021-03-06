// primero actualiza la los datos
actualizarPantalla();

botonEliminarIndividual();

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

    if (isbn.trim() === "" || titulo.trim() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Faltan datos!',
            text: 'Rellenar los campos de ISBN y Títulos',
        })
        return null;
    } else {
        return new Libro(isbn, titulo, autor, editorial, edicion, ano, numeroPaginas, generoLiterario);
    };
};

function crearString() {
    let librostraidos = capturarStorage();
    let string = "";

    for (const libro of librostraidos) {
        string += `
        <div class="row contenido libro">
            <div class="col">${libro.isbn}</div>

            <div class="col tituloLibro text-capitalize">${libro.titulo}</div>

            <div class="col text-capitalize">${libro.autor}</div>

            <div class="col text-capitalize">${libro.editorial}</div>

            <div class="col">${libro.edicion}</div>

            <div class="col">${libro.ano}</div>

            <div class="col">${libro.numeroPaginas}</div>

            <div class="col">${libro.generoLiterario}</div>

            <div class="col">
                <botton id="eliminar${libro.isbn}" class="borrarUno" type="button"><i class="fa-solid fa-trash-can"></i></botton>
            </div>
            
        </div>
        `
    };

    return string;
}

function actualizarPantalla() {
    let cuerpo = document.getElementById("mostrar");
    cuerpo.textContent = "";

    let divMostrar = document.createElement("div");
    divMostrar.innerHTML = crearString();

    cuerpo.appendChild(divMostrar);

    document.getElementById("reset").reset();
    botonEliminarIndividual();

}

function botonEliminarIndividual() {
    let librostraidos = capturarStorage();
    for (const libro of librostraidos) {
        let btnEliminar = document.getElementById(`eliminar${libro.isbn}`);
        btnEliminar.addEventListener("click", () => {
            eliminarDeAUno(libro.isbn);
            actualizarPantalla();
        });
    };
};

// Definición botón Ingresar
let btnIngresar = document.getElementById("ingresaLibro");
btnIngresar.addEventListener("click", () => {

    let nuevoLibro = capturarValores();
    if (nuevoLibro) {
        guardarNuevoLibro(nuevoLibro);

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
    }

    actualizarPantalla();

});

// Definir botón borrar todo
let btnborrar = document.getElementById("eliminarLibro");
btnborrar.addEventListener("click", () => {
    let cuerpo = document.getElementById("mostrar");

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
        };
    });

    if (true) {

    };

});

// Definir botón Actualizar
let btnActualizar = document.getElementById("actualizar");
btnActualizar.addEventListener("click", () => {

    actualizarPantalla();
});

// Fetch de frases - url
fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((json) => {
        mostrarFrase(json);
    })
    .catch((err) => console.log(err));


// Mostrar frase aleatoria
function mostrarFrase(data) {
    const nodo = document.querySelector("#frase");

    let autor = ""
    let indice = getRandom(0, (data.length + 1));
    nodo.innerHTML = "";

    autor = data[indice].author
    if (autor == null) {
        autor = "Desconocido";
    };

    let li = document.createElement("li");
    li.innerHTML = `
        <div class="mx-auto w-25 frase">
        <h6 class="text-center text-secondary"><strong><em>"${data[indice].text}"</em></strong></h4>
        <p class="text-muted fraseP">${autor}</p>
        </div>
        `;

    nodo.appendChild(li);
};

//boton para enviar tareas al mail
btnSend = document.getElementById("enviar");
btnSend.addEventListener('click', function (event) {
    inputs();
});

// Asincronimo para el funcionamiento del boton de enviar
async function inputs() {
    const {
        value: email
    } = await Swal.fire({
        title: 'Ingrese su email',
        text: "Esta información no será guardada",
        input: 'email',
        inputPlaceholder: 'example@gmail.com',
    });
    if (email) {
        Swal.fire(`Entered email: ${email}`)
    };
    const {
        value: name
    } = await Swal.fire({
        title: 'Ingrese su nombre',
        input: 'text',
        inputPlaceholder: 'Nombre',
    });
    btnSend.innerText = "Sending..."
    datos(name, email);
};


// funcionamiento de emailjs
function datos(name, email) {
    let templateParams = {
        name: `${name}`,
        email: `${email}`,
        message: librosString(capturarStorage())
    };

    emailjs.send('service_1om73uc', 'template_pgv2qeb', templateParams)
        .then(function (response) {
            Swal.fire({
                title: "E-mail sent",
                icon: "success"
            })
            btnSend.innerText = "Send to E-mail"
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            Swal.fire({
                title: "Couldn't send your e-mail, try again later",
                icon: "error"
            })
            console.log('FAILED...', error);
        });
};