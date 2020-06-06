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