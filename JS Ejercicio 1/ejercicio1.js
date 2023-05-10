// let numero = prompt("ingrese un nro");
// let arreglo = [];

// function piramide(numero) {
//   for (let i = 1; i <= numero; i++) {
//     let coso = i;
//     arreglo.push(coso);
//     console.log(arreglo);
//     coso = +arreglo.length
//     // for (let a = 0; a <= i; a++) {
//     //   coso += 1;
//     // }
//     // console.log(arreglo);
//   }
// }

// piramide(numero);

//Ejercicio 2
console.log("Ejercicio 2");
let fusionado = [];

array1 = ["pera", "manzana", "caballo", "calabaza"];
array2 = ["perro", "gato", "caballo", "elefante"];

function fusion(arreglo1, arreglo2) {
  const resultado = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        resultado.push(arreglo1[i]);
        break;
      }
    }
  }
  console.log(resultado);
}

fusion(array1, array2);

//Ejercicio 3

console.log("Ejercicio 3");

let carrito = {
  montoTotal: 10,
  productos: ["Leche"],
  cantidad: 5,
};

class Carrito {
  montoTotal;
  productos;

  constructor(montoTotal, productos) {
    this.montoTotal = montoTotal;
    this.productos = productos;
  }
}

const carrito1 = new Carrito(5, "Cereales");
const carrito2 = new Carrito(3, "Alfajor");

console.log(carrito1);
console.log(carrito2);

console.log(carrito);

function agregarProducto(nombre, precio, cantidad) {
  for (let i = 0; i < carrito.productos.length; i++) {
    if (carrito.productos[i] != nombre) {
      carrito.productos.push(nombre);
      carrito.montoTotal = carrito.montoTotal + precio;
      console.log(carrito);
    } else {
      console.log("ya existe" +carrito.productos[i]);
    }
  }
}

agregarProducto("Queso", 50, 1);
