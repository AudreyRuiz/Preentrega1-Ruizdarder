const sneakers = [
  { nombre: "Jordan 1", precio: 150, tallas: "22-30" },
  { nombre: "Jordan 11", precio: 200, tallas: "25-30" },
  { nombre: "Adidas foam", precio: 120, tallas: "17-26" },
  { nombre: "Yezzy", precio: 250, tallas: "20-25" },
  { nombre: "Sb Dunk", precio: 145, tallas: "18-27" },
];
let carrito = [];

let seleccion = prompt(
  "Hola, bienvenido desea comprar alguno de nuestros productos? SI/NO"
);
while (seleccion != "SI" && seleccion != "NO") {
  alert("Solo aceptamos SI/NO");
  seleccion = prompt("Hola desea comprar alguno de nuestros productos? SI/NO");
}

if (seleccion == "SI") {
  alert("Acontinuacion nuestra lista de productos");
  let todoslosProductos = sneakers.map(
    (producto) =>
      producto.nombre +
      "  " +
      "Tallas disponibles: " +
      producto.tallas +
      " " +
      "$" +
      producto.precio
  );
  alert(todoslosProductos.join(" ----- "));
} else if (seleccion == "NO") {
  alert("Gracias por venir, vuelva pronto.!!");
}

while (seleccion != "NO") {
  let producto = prompt("Agregaun producto a tu carrito");
  let precio = 0;

  if (
    producto == "Jordan 1" ||
    producto == "Jordan 11" ||
    producto == "Adidas foam" ||
    producto == "Yezzy" ||
    producto == "Sb Dunk"
  ) {
    switch (producto) {
      case "Jordan 1":
        precio = 150;
        break;
      case "Jordan 11":
        precio = 200;
        break;
      case "Adidas foam":
        precio = 120;
        break;
      case "Yezzy":
        precio = 250;
        break;
      case "Sb Dunk":
        precio = 145;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("Cuantas pares quiere llevar"))

    carrito.push({ producto, unidades, precio })
    console.log(carrito)
  } else {
    alert("Por el momento no contamos con ese producto")
  }

  seleccion = prompt("Desea agregar algun producto mas?")

  while (seleccion == "NO") {
    alert("Gracias por la compra")
    carrito.forEach((carritoFinal) => {
      console.log(`producto:${carritoFinal.producto},unidades: ${carritoFinal.unidades},total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
  }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log("El total a pagar por su compra es: " + "$" + total + "Dls")
