
// Obtener todos los botones de "Añadir"
const addButtons = document.querySelectorAll('.product button');

// Obtener el modal
const modal = document.getElementById('modal');

// Obtener el elemento de cierre del modal
const closeBtn = document.getElementsByClassName('close')[0];

// Función para mostrar el modal con la información del producto
function showModal(title, price, imageSrc) {
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalImg = document.getElementById('modal-img');
  const quantityInput = document.getElementById('quantity');

  modal.style.display = 'block';
  modalTitle.textContent = title;
  modalPrice.textContent = price;
  modalImg.src = imageSrc;

  // Cerrar modal al hacer clic en el botón de cierre
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  // Cerrar modal al hacer clic fuera del contenido del modal
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  // Agregar producto al carrito (aquí puedes añadir la lógica para añadir al carrito)
  const addToCartBtn = document.getElementById('add-to-cart');
  addToCartBtn.onclick = function () {
    const quantity = quantityInput.value;
    // Aquí puedes agregar la lógica para añadir al carrito
    console.log(`Añadido ${quantity} ${title} al carrito`);
    modal.style.display = 'none';
  };
}

// Asignar evento de clic a cada botón de "Añadir"
addButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const productTitle = document.querySelectorAll('.product h3')[index].textContent;
    const productPrice = document.querySelectorAll('.product p')[index].textContent;
    const productImage = document.querySelectorAll('.product img')[index].src;

    showModal(productTitle, productPrice, productImage);
  });
});
