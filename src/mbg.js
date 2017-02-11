$(document).ready(function(){

    // ---- NAVBAR: brand image changes when the window scrolls up and down
    $(window).scroll(function() {
        if (($(document).scrollTop() > 100) | ($(window).width() < 800)){
            $(".navbar").addClass("minimized");
            $("#brand-img").attr("src", "images/img-logo.jpeg");
        } else {
            $(".navbar").removeClass("minimized");
            $("#brand-img").attr("src", "images/img-name.jpg");
        }
    });

    // ---- CALENDAR, grab calendar info from fullCalendar and our event objects:
    $("#calendar").fullCalendar({
        // put your options and callbacks here (from fullCalendar)

    });
});
