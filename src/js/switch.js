//
// Switches
//

var Switch = function(){
	var $switch = $('.c-switch');

	$switch.on('click', function(e){
		$(this).toggleClass('is-active');
		return false;
	});
};