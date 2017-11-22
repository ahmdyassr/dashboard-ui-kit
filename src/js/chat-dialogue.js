//
// Chat Dialogue
//

var ChatDialogue = function(){
	var $document = $(document),
		$chatDialogueBody = $('.c-chat-dialogue__body');

	$document.on('click', '.c-chat-dialogue__btn', function(e){
		$chatDialogueBody.toggleClass('is-active');
		$(this).toggleClass('is-open');
	});
}; 