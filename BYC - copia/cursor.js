const customCursorButtons = document.querySelectorAll('.custom-cursor-btn');

customCursorButtons.forEach(button => {
    // Cambiar el cursor al pasar el mouse sobre el botón
    button.addEventListener('mouseenter', () => {
        button.style.cursor = 'url("ima/icon32.png"), auto';
    });

    // Restaurar el cursor al salir del botón
    button.addEventListener('mouseleave', () => {
        button.style.cursor = 'default';
    });
});

// Función para manejar el efecto mouse over en las imágenes
function addImageHoverEffect() {
    const productImages = document.querySelectorAll('.product-card img');

    productImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.opacity = '0.7'; // Cambiar la opacidad al pasar el mouse
            this.style.transform = 'scale(1.05)'; // Aumentar el tamaño ligeramente
            this.style.transition = 'opacity 0.3s, transform 0.3s'; // Añadir transición suave
        });

        image.addEventListener('mouseout', function() {
            this.style.opacity = '1'; // Volver a la opacidad normal
            this.style.transform = 'scale(1)'; // Volver al tamaño original
        });
    });
}

// Llama a la función cuando se carga la página
window.onload = function() {
    addImageHoverEffect(); // Agregar el efecto hover a las imágenes
};
