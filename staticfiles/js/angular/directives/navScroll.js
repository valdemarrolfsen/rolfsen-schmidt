/**
 * Created by valdemarrolfsen on 11.02.2016.
 */
main.directive("navScroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 100) {
                element.addClass('with-background');
            } else {
                element.removeClass('with-background');
            }
        });
    };
});