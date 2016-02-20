/**
 * Created by valdemarrolfsen on 11.02.2016.
 */
main.directive("navScroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var divHeight = $('.intro-cover').first().height() > 0 ? $('.intro-cover').first().height() : $('.korde-cover-image').first().height();
            var startFraction = 1/5;
            var startHeight = divHeight*startFraction;
            console.log(startHeight);

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