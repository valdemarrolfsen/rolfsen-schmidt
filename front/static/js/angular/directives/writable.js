/**
 * Created by valdemarrolfsen on 20.02.2016.
 */
'use strict';

main.directive('writable', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attr) {
            var strings = attr.text.split(",");
            element.typed({
                strings: strings,
                typeSpeed: 50
            });
        }
    }
});