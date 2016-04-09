/**
 * Created by valdemarrolfsen on 11.02.2016.
 */
main.directive("navScroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var divHeight = 500;
            var startFraction = 1/5;
            var startHeight = divHeight*startFraction;

            if (this.pageYOffset >= startHeight && this.pageYOffset < divHeight) {
                element.css('background', 'rgba(34, 34, 34,' + (this.pageYOffset-startHeight)/100 + ')');
            } else if (this.pageYOffset >= divHeight) {
                element.css('background', 'rgba(34, 34, 34, 1)');
            } else {
                element.css('background', 'rgba(34, 34, 34, 0)');
            }
        });
    };
});