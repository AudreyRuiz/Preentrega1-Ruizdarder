const tiendaContent = document.getElementById("tiendaContent");
const mirarCarrito = document.getElementById("mirarCarrito");
const ventanaContainer = document.getElementById("ventanaContainer");
let carrito = [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio}$</p>
    `;

  tiendaContent.append(content);

  let comprar = document.createElement("button")
  comprar.innerText = "comprar"
  comprar.className = "comprar"
  content.append(comprar);

  comprar.addEventListener("click", () => {
    carrito.push({
      id: product.id,
      img: product.img,
      nombre: product.nombre,
      precio: product.precio,
    })
    console.log(carrito);
  })
});

mirarCarrito.addEventListener("click", () => {
  console.log("Hola funciona");

  const ventanaHeader = document.createElement("div");
  ventanaHeader.className = "ventana-header"
  ventanaHeader.innerHTML = `
  <h1 class="ventana-header-title">Carrito.</h1>
  `;
  ventanaContainer.append(ventanaHeader);

  const ventanabutton = document.createElement("h1");
  ventanabutton.innerText = "❌";
  ventanabutton.className = "ventana-header-button";

  ventanaHeader.append(ventanabutton);

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "ventana-content"
    carritoContent.innerHTML =`
    <img src="${product.img}">
    <h2>${product.nombre}</h2>
    <p>${product.precio} $</p>
    `;

    ventanaContainer.append(carritoContent)
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalCompra = document.createElement("div")
  totalCompra.className= "total-content"
  totalCompra.innerHTML=`El total a pagar es: ${total} $dls`;
  ventanaContainer.append(totalCompra);
});
