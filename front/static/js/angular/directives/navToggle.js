/**
 * Created by olenordviste on 17.02.2016.
 */
main.directive("navToggle", function ($window) {
    return function(scope, element, attrs) {
        angular.element($('#bs-example-navbar-collapse-3 a')).bind("click", function() {
            var navbar_toggle = $('.navbar-toggle');
            if (navbar_toggle.is(':visible')) {
                navbar_toggle.trigger('click');
            }
        });
    };
});