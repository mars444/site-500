$(function () {

   
      $(".menu__list-item-link").click(function(e) {
        $(".menu__list-item-link").removeClass('menu__list-item-link-active');
        $(this).addClass('menu__list-item-link-active');
      })
  });
  