document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los botones "Añadir" en la página
    var addButtons = document.querySelectorAll(".product button");

    // Carrito de compras
    var cart = [];
    var totalPrice = 0;

    // Función para actualizar el carrito y el total
function updateCart() {
    var cartList = document.getElementById("cart-list");
    var totalSpan = document.getElementById("total-price");

      // Limpiar el carrito actual
    cartList.innerHTML = "";

      // Actualizar la lista del carrito
    cart.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item.name + " - $" + item.price.toFixed(2);
        cartList.appendChild(li);
    });

      // Actualizar el total
    totalSpan.textContent = "$" + totalPrice.toFixed(2);
    }

    // Función para manejar clics en los botones "Añadir"
function handleAddButtonClick(event) {
    var product = event.target.parentElement;
    var productName = product.querySelector("h3").textContent;
    var productPrice = parseFloat(product.querySelector("p").textContent.slice(1));

      // Agregar el producto al carrito
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;

      // Actualizar el carrito y el total
    updateCart();
}

    // Asignar el manejador de clic a cada botón "Añadir"
    addButtons.forEach(function (button) {
    button.addEventListener("click", handleAddButtonClick);
});

    // Manejar clic en el botón "Pagar"
document.getElementById("checkout-btn").addEventListener("click", function () {
    alert("Proceso de pago implementado aquí. Total: $" + totalPrice.toFixed(2));
      // Puedes agregar aquí la lógica para redirigir a una página de pago o realizar otras acciones.
    });
});