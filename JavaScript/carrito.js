const pintarCarrito = () => {
    ventanaContainer.innerHTML = "";
    ventanaContainer.style.display = "flex";

    const ventanaHeader = document.createElement("div");
    ventanaHeader.className = "ventana-header"
    ventanaHeader.innerHTML = `
    <h1 class="ventana-header-title">Carrito.</h1>
    `;
    ventanaContainer.append(ventanaHeader);

    const ventanabutton = document.createElement("h1");
    ventanabutton.innerText = "❌";
    ventanabutton.className = "ventana-header-button";

    ventanabutton.addEventListener("click", () => {
        ventanaContainer.style.display = "none";
    })

    ventanaHeader.append(ventanabutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "ventana-content"
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h2>${product.nombre}</h2>
        <p>${product.precio} $</p>
        <span class="restar"> ➖ </span>
        <p>Cantidad: ${product.cantidad} </p>
        <span class="sumar"> ➕ </span>
        `;

        ventanaContainer.append(carritoContent)

        let restar = carritoContent.querySelector(".restar");
        restar.addEventListener("click",() =>{
            if(product.cantidad !== 1) {
            product.cantidad--;
            }
            pintarCarrito();
            saveLocal();
        })
        console.log(carrito.length);

        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click",() => {
            product.cantidad++;
            pintarCarrito();
            saveLocal();
        })

        let eliminar = document.createElement("span");
        eliminar.innerText= "🗑️";
        eliminar.className = "eliminar-producto";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra = document.createElement("div")
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `El total a pagar es: ${total} $dls`;
    ventanaContainer.append(totalCompra);
};

mirarCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem ("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
};
carritoCounter();

