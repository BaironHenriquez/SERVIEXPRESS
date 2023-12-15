let carrito = [];

function agregarAlCarrito(proveedor, producto, precio) {
    carrito.push({ proveedor, producto, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoItems = document.getElementById('carritoItems');
    const carritoTotal = document.getElementById('carritoTotal');

    carritoItems.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carrito-item');
        itemDiv.innerHTML = `<span>${item.producto} - ${item.proveedor}</span><span>$${item.precio}</span>`;
        carritoItems.appendChild(itemDiv);
    }