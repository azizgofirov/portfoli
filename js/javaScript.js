$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY>20)
        {
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scrollY>500)
        {
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    var typed=new Typed(".typing",{
        strings:["Web Developer", "Designer", "Freelancer", "Student"],
        typeSpeed:80,
        backSpeed:60,
        loop:true
    });
    var typed=new Typed(".typing2",{
        strings:["Web Developer", "Designer", "Freelancer", "Student"],
        typeSpeed:80,
        backSpeed:60,
        loop:true
    });

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:2,
                nav:false,
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});
