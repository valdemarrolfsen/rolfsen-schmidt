/**
 * Created by valdemarrolfsen on 11.02.2016.
 */
main.directive("navScroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var divHeight = 50;
            var startNavHeight = 120;

            if (this.pageYOffset >= divHeight) {
                element.css('background', 'rgba(0, 0, 0, 0.9)');
                element.css('height', '70px')
            } else {
                element.css('background', 'rgba(0, 0, 0, 0)');
                element.css('height', startNavHeight + 'px')
            }
        });
    };
});