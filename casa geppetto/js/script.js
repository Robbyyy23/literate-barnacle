$(document).ready(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
            $('#bot_button').fadeIn(200);    // Fade in the arrow
        } else {
            $('#bot_button').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#bot_button').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 1000);
    });

    $("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });
});