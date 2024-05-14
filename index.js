document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('toggle');
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll('.menu a');

    burgerBtn.addEventListener('change', () => {
        if (burgerBtn.checked) {
            menu.classList.add('animate__fadeInRight');
            menu.classList.remove('animate__fadeOutRight');
            menu.style.display = "block";
        } else {
            menu.classList.remove('animate__fadeInRight');
            menu.classList.add('animate__fadeOutRight');
            setTimeout(() => {
                menu.style.display = "none";
            }, 500); // Espera a que termine la animación antes de ocultar el menú
        }
    });

    // Cerrar el menú al hacer clic en un elemento del menú
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            burgerBtn.checked = false;
            menu.classList.remove('animate__fadeInRight');
            menu.classList.add('animate__fadeOutRight');
            setTimeout(() => {
                menu.style.display = "none";
            }, 500); // Espera a que termine la animación antes de ocultar el menú
        });
    });
});