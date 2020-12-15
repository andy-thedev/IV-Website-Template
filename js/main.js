new WOW().init();

$(document).ready(
    function(){
        $('.navbar-toggler').click(function(){
            var openNav = $( ".navbar-toggler.right" ).attr("aria-expanded");

            if (openNav == "true") {
                $(".dropdown-item").removeClass("dropdown-untoggled");
                $(".dropdown-item").addClass("dropdown-toggled");
            }
            if (openNav == "false") {
                $(".dropdown-item").removeClass("dropdown-toggled");
                $(".dropdown-item").addClass("dropdown-untoggled");
            }
        });

        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if(scroll > 500){
                $('.navbar').addClass('scrolled');
            } else{
                $('.navbar').removeClass('scrolled');
            }
        });

        $(window).on('load', function () {
            $("#loading").hide();
            });
});