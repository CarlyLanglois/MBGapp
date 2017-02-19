$(document).ready(function(){

    // ---- NAVBAR: brand image changes when the window scrolls up and down
    $(window).scroll(function() {
        if (($(document).scrollTop() > 100) | ($(window).width() < 800)){
            $(".navbar").addClass("minimized");
            $("#brand-img").attr("src", "images/logo-inline-mini.gif");
        } else {
            $(".navbar").removeClass("minimized");
            $("#brand-img").attr("src", "images/logo-inline.gif");
        }
    });

    // --- POPOVERS: enables Bootstrap POPOVERS
    $('[data-toggle="popover"]').popover();


});
