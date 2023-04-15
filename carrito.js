// Definición de productos
const productos = [
  { id: 1, nombre: "Producto 1", precio: 10 },
  { id: 2, nombre: "Producto 2", precio: 20 },
  { id: 3, nombre: "Producto 3", precio: 30 },
];

// Carrito de compras
const carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(idProducto) {
  // Buscar el producto en la lista de productos
  const producto = productos.find(producto => producto.id === idProducto);

// Verificar si el producto ya está en el carrito
  const productoExistente = carrito.find(producto => producto.id === idProducto);
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    // Si no existe en el carrito, se agrega con cantidad 1
    carrito.push({ ...producto, cantidad: 1 });
  }

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

// Función para obtener el total de la compra
function obtenerTotal() {
  let total = 0;
  carrito.forEach(producto => {
    total += producto.precio * producto.cantidad;
  });
  return total;
}

// Exportar funciones para su uso en otros archivos
module.exports = {
  agregarAlCarrito,
  eliminarDelCarrito,
  obtenerTotal,
  carrito // También se puede acceder al carrito directamente para obtener su contenido
};
