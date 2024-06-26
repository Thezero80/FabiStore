// Variables globales
let carrito = [];
let total = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(id) {

    // Obtener el producto seleccionado según el ID
    let producto = obtenerProductoPorId(id);

    // Establecer el precio según el ID
    if (id === 1) {
        producto.precio = 152.99;
    } else if (id === 2) {
        producto.precio = 166.99;
    } else if (id === 3) {
        producto.precio = 68.99;
    }

    // Agregar el producto al carrito
    carrito.push(producto);

    // Actualizar el total
    total += producto.precio;

    // Actualizar la visualización del carrito
    mostrarCarrito();
}

// Función para obtener un producto según su ID
function obtenerProductoPorId(id) {
    // Aquí puedes implementar la lógica para obtener el producto de una base de datos o una lista de productos predefinidos
    // Por simplicidad, aquí se muestra un ejemplo de producto estático
    let producto = {
        id: id,
        nombre: "Producto " + id,
        precio: 0
    };

    return producto;
}

// Función para mostrar el carrito
function mostrarCarrito() {
    let carritoLista = document.getElementById("carritoLista");
    let totalElement = document.getElementById("total");

    // Limpiar el carrito
    carritoLista.innerHTML = "";

    // Mostrar los productos en el carrito
    carrito.forEach(producto => {
        let li = document.createElement("li");
        li.textContent = producto.nombre + " - S/" + producto.precio.toFixed(2);
        carritoLista.appendChild(li);
    });

    // Mostrar el total
    totalElement.textContent = "S/" + total.toFixed(2);
}

// Función para realizar la compra
function realizarCompra() {
    var formulario = document.getElementById("formulario");
    formulario.style.display = "block";
    // Aquí puedes implementar la lógica para procesar la compra, como enviar los datos a un servidor o mostrar un mensaje de confirmación
    // Por simplicidad, aquí se muestra un mensaje de alerta
    alert("¡Compra En Proceso! Total: S/" + total.toFixed(2));
    emailjs.init('bgN-e7F2EjGyDqEfz')
    //emailjs.init('qR7qvCzVGTAEwqYNj')
    var subject = "FabiStore"
    const phone = document.getElementById('phone');
    const btn = document.getElementById('button');

    document.getElementById('form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            btn.value = 'Enviando...';

            const serviceID = 'service_tzzmwxg';
                const templateID = 'template_tn3efha';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                    alert('En Breve Le Atendemos Al Whatsapp!');
                    //alert("¡Compra realizada! Total: S/" + total.toFixed(2));
                    setTimeout(function () {
                        location.reload();
                    }, 1000);

                }, (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
        });

    //alert("¡Compra realizada! Total: S/" + total.toFixed(2));

    // Reiniciar el carrito
    carrito = [];
    total = 0;

    // Actualizar la visualización del carrito
    mostrarCarrito();
}

// Mostrar el carrito inicialmente
mostrarCarrito();




