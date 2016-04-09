main.directive("lhScroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var divHeight = 50;
            var startNavHeight = 80;
            var minNavHeight = 60;

            if (this.pageYOffset >= divHeight) {
                element.css('line-height', minNavHeight + 'px')
            } else {
                element.css('line-height', startNavHeight + 'px')
            }
        });
    };
});