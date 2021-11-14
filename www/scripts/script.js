$(document).ready(function () {


  // let isOpen = false;

  $('.burger').on('click', function () {

    $('.main-nav').slideToggle();

    // if (isOpen) {
    //   $('.main-nav').hide();
    //   isOpen = false;
    //   return;
    // }

    // $('.main-nav').show();
    // isOpen = true;

  });


  // Табы в контактах
  $('.contacts-tab-link').on('click', function (e) {
    e.preventDefault();

    let index = $(this).index('.contacts-tab-link');

    $('.contacts-tab-link').removeClass('active');
    $(this).addClass('active');

    $('.contacts-content').removeClass('active');
    $('.contacts-content').eq(index).addClass('active');
  });

  // Фильтр в портфолио
  $('.filter-link').on('click', function (e) {
    e.preventDefault();

    let linkType = $(this).data('type');

    $('.filter-link').removeClass('active');
    $(this).addClass('active');

    if (linkType === 'all') {
      $('.portfolio-item').show();
      return;
    }

    $('.portfolio-item').each(function () {
      let portfolioType = $(this).data('type');

      if (linkType === portfolioType) {
        $(this).show();
        return;
      }

      $(this).hide();
    });
  });

});
