/**
 * Created by valdemarrolfsen on 21.02.2016.
 */

main.factory('MailSender', function($http) {

    return {
        send: function(info) {
            return $http.post('/sendemail/', {info: info});
        }
    }
});

main.factory('SweetAlert', [ '$timeout', '$window', function ( $timeout, $window ) {

	var swal = $window.swal;

	var self = function ( arg1, arg2, arg3 ) {
		$timeout(function() {
			if( typeof(arg2) === 'function' ) {
				swal(arg1, function(isConfirm) {
					$timeout( function() {
						arg2(isConfirm);
					});
				}, arg3 );
			} else {
				swal( arg1, arg2, arg3 );
			}
		});
	};

	//public methods
	var props = {
		swal: swal,
		adv: function( object ) {
			$timeout(function() {
				swal( object );
			});
		},
		timed: function( title, message, type, time ) {
			$timeout(function() {
				swal( {
					title: title,
					text: message,
					type: type,
					timer: time
				} );
			});
		},
		success: function(title, message) {
			$timeout(function(){
				swal( title, message, 'success' );
			});
		},
		error: function(title, message) {
			$timeout(function(){
				swal( title, message, 'error' );
			});
		},
		warning: function(title, message) {
			$timeout(function(){
				swal( title, message, 'warning' );
			});
		},
		info: function(title, message) {
			$timeout(function(){
				swal( title, message, 'info' );
			});
		}
	};

	angular.extend(self, props);

	return self;
}]);