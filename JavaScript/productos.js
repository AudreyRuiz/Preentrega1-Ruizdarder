const tiendaContent = document.getElementById("tiendaContent")
const productos = [
    {
        id: 1,
        nombre: "Gorra Mercedes",
        precio: 80,
        img: ""
    },
    {
        id: 2,
        nombre: "Chamarra Red bull",
        precio: 80,
        img: ""
    },
    {
        id: 3,
        nombre: "Gorra Checo",
        precio: 80,
        img: ""
    },
    {
        id: 4,
        nombre: "Sudadera Mclaren",
        precio: 80,
        img: ""
    },
    {
        id: 5,
        nombre: "Chamarra Sainz",
        precio: 80,
        img: ""
    },
    {
        id: 6,
        nombre: "Gorra Ferrari",
        precio: 80,
        img: ""
    },
];
let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}$</p>
    `;

    tiendaContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar"

    content.append(comprar)
});