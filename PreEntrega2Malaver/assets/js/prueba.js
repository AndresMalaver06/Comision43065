// Pedimos el nombre del cliente
const nombreCliente = prompt("Hola, ¿cuál es tu nombre?");

// Preguntamos si desea hacer una compra
const deseaComprar = confirm(`Hola ${nombreCliente}, ¿deseas hacer una compra?`);

// Si no desea hacer una compra, se le despide con un mensaje
if (!deseaComprar) {
  alert(`Gracias por visitarnos, ${nombreCliente}. ¡Vuelve pronto!`);
} else {
  // Si desea hacer una compra, se muestra una lista de objetos
  const listaProductos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 }
  ];
  
  // Creamos un objeto para almacenar los productos del carrito
  const carrito = {};
  
  // Iteramos sobre la lista de productos y mostramos la información
  listaProductos.forEach((producto, indice) => {
    const opcion = prompt(`${indice + 1}. ${producto.nombre} - $${producto.precio}\n¿Deseas añadir este producto a tu carrito? (S/N)`);
    
    if (opcion.toUpperCase() === "S") {
      // Si el usuario desea añadir el producto, se pide la cantidad
      const cantidad = parseInt(prompt(`¿Cuántas unidades de ${producto.nombre} deseas añadir?`));
      
      // Se agrega el producto al carrito
      carrito[producto.nombre] = (carrito[producto.nombre] || 0) + cantidad;
    }
  });
  
  // Mostramos el contenido del carrito
  let mensajeCarrito = "Tu carrito de compras:\n";
  
  Object.keys(carrito).forEach((nombreProducto) => {
    const cantidad = carrito[nombreProducto];
    mensajeCarrito += `- ${nombreProducto}: ${cantidad}\n`;
  });
  
  alert(mensajeCarrito);
}






const tipoCompra = parseInt(prompt("Ingrese 01 para mostrar los paquetes disponibles"));

if (tipoCompra === 1) {
  const paquetes = [
    { id: 1, nombre: "Marca Corporativa", contenido: "\n * Logo \n * Tarjeta Corporativa \n * Membrete \n * Aplicaciones de Logo \n * Brand Guide", precio: 500},
    { id: 2, nombre: "Diseño Web", contenido: "\n * Pagina principal \n * 3 Paginas secundarias \n * Formulario de contacto", precio: 800},
    { id: 3, nombre: "Full Stack", contenido: "\n * Pagina Web 4 paginas \n * Formulario de contacto \n * Servicio Backend \n * Pagina es servidor HTTPS", precio: 1500}
  ];
  
  let mensaje = "";
  
  paquetes.forEach(item => {
    mensaje += `
    Id: ${item.id};
    Nombre: ${item.nombre},
    Contenido: ${item.contenido};
    `;
  });
  
  alert(mensaje);
} else {
  alert("Gracias por visitarnos.");
}