$(document).ready(function(){
    
    $(document).on("click", 'a[href^="#"]', function(e) {
        e.preventDefault(),
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - 75
        }, 750)
    });

    $('.slick_testimonail').slick({

        prevArrow:"<button class='slickslider-btn right'><img src='./img/arrow-left.png' alt='slick-prev'></button>",
        nextArrow:"<button class='slickslider-btn left'><img src='./img/arrow-left.png' alt=''></button>"
    });
});