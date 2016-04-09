/**
 * Created by rubenschmidt on 09.04.2016.
 */
main.directive("brandScroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var divHeight = 50;
            var startImagePadding = 10;
            var endImagePadding = 0;

            if (this.pageYOffset >= divHeight) {
                element.css('width', '120px');
                element.css('padding-top', endImagePadding + 'px');
            } else {
                element.css('width', '180px');
                element.css('padding-top',startImagePadding+ 'px');
            }
        });
    };
});