/**
 * Created by valdemarrolfsen on 11.02.2016.
 */
main.directive("navScroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var divHeight = 200;
            var startFraction = 1/5;
            var startHeight = divHeight*startFraction;
            var startNavHeight = 90;
            var minNavHeight = 70;
            var currentNavHeigth = 90-(this.pageYOffset-startHeight);

            if (this.pageYOffset >= startHeight && this.pageYOffset < divHeight) {
                var opacity = (this.pageYOffset-startHeight)/100;
                if (opacity < 0.8){
                    element.css('background', 'rgba(0, 0, 0,' + (this.pageYOffset-startHeight)/100 + ')');
                }
                if(currentNavHeigth>=minNavHeight){
                    element.css('height', currentNavHeigth + 'px')
                }

            } else if (this.pageYOffset >= divHeight) {
                element.css('background', 'rgba(0, 0, 0, 0.8)');
                element.css('height', '70px')
            } else {
                element.css('background', 'rgba(0, 0, 0, 0)');
                element.css('height', startNavHeight + 'px')
            }
        });
    };
});