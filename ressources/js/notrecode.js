$('.js-trigger').waypoint(function(direction) {
    if(direction == "down") {
        $('nav').addClass('nav-js');
    } else {
        $('nav').removeClass('nav-js');
    }
});