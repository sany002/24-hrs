$(function(){
    $('.slick_slider').slick({
        autoplay:false,
        slidesToShow:4,
        arrows:true,
        prevArrow:'<i class="fa-sharp fa-solid fa-angle-left angle_arrow angle_left"></i>',
        nextArrow:'<i class="fa-solid fa-angle-right angle_arrow angle_right"></i>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.slick_slide').slick({
        autoplay:false,
        slidesToShow:1,
        arrows:true,
        prevArrow:'<i class="fa-sharp fa-solid fa-angle-left angle_arrows angle_lefts"></i>',
        nextArrow:'<i class="fa-solid fa-angle-right angle_arrows angle_rights"></i>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.slick_slider_rocket').slick({
      autoplay:true,
      autoplaySpeed:2000,
      speed:1000,
      slidesToShow:1,
      arrows:false,
      prevArrow:'<i class="fa-sharp fa-solid fa-angle-left angle_arrows angle_lefts"></i>',
      nextArrow:'<i class="fa-solid fa-angle-right angle_arrows angle_rights"></i>',
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  });
});