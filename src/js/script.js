const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    speed: 1500,
    autoHeight: true,
    nav: false
});

document.querySelector('.carousel__prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.carousel__next').addEventListener('click', function () {
    slider.goTo('next');
});

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__main-content').eq(i).toggleClass('catalog-item__main-content_active');
            $('.catalog-item__second-content').eq(i).toggleClass('catalog-item__second-content_active');
        });
    });
}

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');