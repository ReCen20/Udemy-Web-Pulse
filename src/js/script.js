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

$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #modal__consultation').fadeIn('slow');
});

$('.modal__close').on('click', function(){
    $('.overlay, #modal__buy, #modal__thanks, #modal__consultation').fadeOut();
});

$('.button_catalog-item').each(function(i){
    $(this).on('click', function(){
        $('#modal__buy .modal__descr').text($('.subtitle_catalog').eq(i).text());
        $('.overlay, #modal__buy').fadeIn();
    });
});