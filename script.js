$(document).ready(function(){
    $(window).scroll(function(){
    
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

  
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        
        $('html').css("scrollBehavior", "smooth");
    });

    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    
    var typed = new Typed(".typing", {
        strings: ["Freelancer"],
        typeSpeed: 500,
        backSpeed: 500,
        
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Freelancer"],
        typeSpeed: 500,
        backSpeed: 500,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: [ "2016"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-4", {
        strings: [ "2018"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-5", {
        strings: [ "2023"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-6", {
        strings: [ "HTML","CSS","JS"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-7", {
        strings: [ "Digital Marketing"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-8", {
        strings: [ "UI/UX","C++/JAVA"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-9", {
        strings: [ "Microsoft Word","Xcel","Slide"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    var typed = new Typed(".typing-10", {
        strings: [ "Freelancer, this is my website, so I have to say something about myself. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with. Let me give a try to see what kind of image you have about me through my self-description. I hope that my impression of myself and your impression of me is not so different."],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
    function clickme(){
        console.log(link.value);
        location.href="https://drive.google.com/file/d/1M_8lrq9vUxQfPdUUnszjqsp4tN-dt7pl/view?usp=sharing"
    }
    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 5000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});