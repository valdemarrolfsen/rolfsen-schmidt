/**
 * Created by valdemarrolfsen on 11.02.2016.
 */
main.directive("navScroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 210) {
                element.css('background', 'rgba(34, 34, 34,' + (this.pageYOffset-210)/100 + ')');
            } else if (this.pageYOffset >= 310) {
                element.css('background', 'rgba(34, 34, 34, 1)');
            } else {
                element.css('background', 'rgba(34, 34, 34, 0)');
            }
        });
    };
});