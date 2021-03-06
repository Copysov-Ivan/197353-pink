// открытие мобильного меню по тапу
(function() {

  var openClose = document.querySelector(".page-header__menu-burger");
  var mobileMenu = document.querySelector(".page-header__menu");

  if (mobileMenu.classList.contains("page-header__menu--no-js")) {
    mobileMenu.classList.remove("page-header__menu--no-js");
    openClose.classList.remove("page-header__menu-burger--no-js");
  }

  openClose.addEventListener("click", function(event) {

    if (mobileMenu.classList.contains("page-header__menu--open")) {

      event.preventDefault();
      mobileMenu.classList.remove("page-header__menu--open");
      openClose.classList.remove("page-header__menu-burger--open");

    } else {

      event.preventDefault();
      mobileMenu.classList.add("page-header__menu--open");
      openClose.classList.add("page-header__menu-burger--open");
    }
  });

})();
