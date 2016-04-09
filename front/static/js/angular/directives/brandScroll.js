/**
 * Created by rubenschmidt on 09.04.2016.
 */
main.directive("brandScroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var divHeight = 300;
            var startFraction = 1/6;
            var startHeight = divHeight*startFraction;
            var imageWidth = 180-(this.pageYOffset-startHeight);

            if (this.pageYOffset >= startHeight && this.pageYOffset < divHeight && imageWidth > 120) {
                element.css('width', 180-(this.pageYOffset-startHeight) + 'px');
            } else if (imageWidth <= 120) {
                element.css('width', '120px');
            } else {
                element.css('width', '180px');
            }
        });
    };
});