// Definición de productos
const productos = [
  { id: "001", nombre: "Latex Borgoña", precio: 1440 },
  { id: "002", nombre: "Latex Orquídea", precio: 1440 },
  { id: "003", nombre: "Pincel x 3", precio: 1000 },
  { id: "004", nombre: "Rodillo nro 22", precio: 1500 },
  { id: "005", nombre: "Pincel", precio: 250 },
  { id: "006", nombre: "Enduido interior 1L", precio: 1000 },
  { id: "007", nombre: "Kit básico pintura", precio: 2500 },
  { id: "008", nombre: "Rodillo profesional", precio: 440 },
];

// Cantidad total de productos - número del carrito
let cantidadTotal = 0

// Conexión productos HTML- Busca todos los objetos que son clase botones-compra  para poder esc evento
const listaProductos = document.getElementsByClassName("botones-compra")

// Conexión número de productos visible en carrito - conexión con span del carrito
const ncarrito = document.getElementById("n-carrito")

// Carrito de compras - va agregando o sacando según lo que agrega el cliente
const carrito = [];

// Función para agregar productos al carrito - idProducto es el id que esta en el index 
function agregarAlCarrito(idProducto) {
  // Buscar el producto en la lista de productos - recorre array productos y compara id
  const producto = productos.find(producto => producto.id === idProducto);

// Verificar si el producto ya está en el carrito.- Recorre array y compara id
  const productoExistente = carrito.find(producto => producto.id === idProducto);
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    // Si no existe en el carrito, se agrega con cantidad 1
    carrito.push({ ...producto, cantidad: 1 });
  }

  cantidadTotal += 1
  ncarrito.textContent = cantidadTotal // cambia el span del html 

  console.log("Producto agregado al carrito:", producto);
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(idProducto) {
  // Buscar el índice del producto en el carrito
  const indiceProducto = carrito.findIndex(producto => producto.id === idProducto);

  if (indiceProducto !== -1) {
    // Si el producto existe en el carrito, se disminuye la cantidad o se elimina si es 1
    if (carrito[indiceProducto].cantidad > 1) {
      carrito[indiceProducto].cantidad -= 1;
    } else {
      carrito.splice(indiceProducto, 1);
    }
    console.log("Producto eliminado del carrito.");
  } else {
    console.log("Producto no encontrado en el carrito.");
  }
}

// Función para obtener el cantidadTotal de la compra
function obtenerTotal() {
  let total = 0;
  carrito.forEach(producto => {
    total += producto.precio * producto.cantidad;
  });
  return total;
}
// recorre el arreglo de productos del html y agrega el listener para el click, cuando hay click llama
// a agregar el carrito y le pasa el id correspondiente al producto del botón
for(let i = 0; i < listaProductos.length; i++) {
  listaProductos[i].addEventListener("click", () => { agregarAlCarrito(listaProductos[i].id) })
}
