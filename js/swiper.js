const swiper = new Swiper('.slider', {
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets:true,
      },
        loop:true,
        slidesPerView:'auto',
        spaceBetween: 60,
  });

  const hero = new Swiper('.swiper', {
        loop:true,
        slidesPerView:1,
        slideClass: 'hero__content',
        spaceBetween: 250,
        speed:2000,
        autoplay:{
          delay:5000
        },
  });