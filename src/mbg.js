$(document).ready(function(){

    // ---- NAVBAR: brand image changes when the window scrolls up and down
    $(window).scroll(function() {
        if (($(document).scrollTop() > 100) | ($(window).width() < 700)){

            $("#brand-img").attr("src", "images/logo-inline-mini-transparent.gif");
        } else {

            $("#brand-img").attr("src", "images/logo-inline-transparent.gif");
        }
    });

    // --- POPOVERS: enables Bootstrap POPOVERS
    $('[data-toggle="popover"]').popover();


});
