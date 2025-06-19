 document.addEventListener("DOMContentLoaded", () => {
        const burger = document.getElementById("burgerToggle");
        const menu = document.getElementById("burgerMenu");
        const menuContent = menu.querySelector(".burger__menu-content");

        burger.addEventListener("click", () => {
          burger.classList.toggle("active");
          menu.classList.toggle("active");
          document.body.classList.toggle("no-scroll");
        });

        // Закрытие при клике вне контента
        menu.addEventListener("click", (e) => {
          if (!menuContent.contains(e.target)) {
            burger.classList.remove("active");
            menu.classList.remove("active");
            document.body.classList.remove("no-scroll");
          }
        });
      });