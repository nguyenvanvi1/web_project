$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 1,
        slidesToScroll:1,
        // draggable: false,
        autoplay: true,
        autoplaySpeed:2000,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-chevron-right"></i></button>`,
        dots:true,
        responsive: [
            {
                breakpoint:1024,
                setting: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint:740,
                setting: {
                    slidesToShow: 1,
                }
            },

        ],
    });
  });
  $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topBtn').fadeIn();
        }else{
            $('#topBtn').fadeOut();
        }
    });
    $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });
});