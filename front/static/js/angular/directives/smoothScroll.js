/**
 * Created by valdemarrolfsen on 23.02.2016.
 */
main.directive("smoothScroll", function ($window) {
    return function(scope, element, attrs) {
        $(element).bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 100
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    };
});