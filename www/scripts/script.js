$(document).ready(function () {

  $('.burger').on('click', function () {
    $(this).toggleClass('open');
    $('.main-nav').slideToggle();
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


  // Аккордеон
  let prevIndex;

  $('.faq-button').on('click', function () {
    let currentIndex = $(this).index('.faq-button');

    if (currentIndex === prevIndex) {
      $(this).next().slideToggle();
      $(this).toggleClass('open');
      return;
    }

    $(this).next().slideDown();
    $(this).addClass('open');
    $('.faq-button').eq(prevIndex).next().slideUp();
    $('.faq-button').eq(prevIndex).removeClass('open');
    prevIndex = currentIndex;
  });


  // Слайдер
  if ($('.carousel').length) {
    $('.carousel').slick({
      autoplay: false,
      dots: true
    });
  }

  // Ajax подгрузка отзывов
  $('.js-review-btn').on('click', function () {

    $.ajax({
      type: 'POST',
      url: '../json/reviews.json',
      data: 'count=2',
      success: function (resData) {
        let html = generateHtml(resData.reviews);
        addToPage(html);
      },
      error: function () {
        console.log('Ошибочка');
      }
    });

  });


  function generateHtml(dataArray) {
    let htmlString = '';

    dataArray.forEach(function (itemArray) {
      htmlString = htmlString + `<div class="reviews-item">
        <div class="review">
          <div class="review-ava">
            <img src="${itemArray.imageUrl}" alt="${itemArray.imageAlt}" class="review-pic">
          </div>
          <div class="review-content">
            <span class="review-name">${itemArray.name}</span>
            <blockquote class="review-quote">“${itemArray.reviewText}”</blockquote>
          </div>
        </div>
      </div>`;
    });

    return htmlString;
  }

  function addToPage(htmlString) {
    $('.reviews-list').append(htmlString);
  }

});
