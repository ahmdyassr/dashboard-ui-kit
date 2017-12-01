//
// Chat Dialogue
//

var ChatDialogue = function(){
	var $document = $(document),
		$chatDialogueBody = $('.c-chat-dialogue__body'),
		$chatDialogueMessages = $('.c-chat-dialogue__messages'),
		$chatDialogueMessagesHeight = $chatDialogueMessages.height();

	function addChatMessage($message) {
		$chatMessageTemplate = '<div class="c-chat-dialogue__message c-chat-dialogue__message--self">'+
                        		'<div class="c-chat-dialogue__message-content">'+
                            	$message.val()+
                        		'</div>'+
                    			'</div>';

		$chatDialogueMessages.append($chatMessageTemplate);
		$message.val('');
	}

	function updateHeight(){
		$chatDialogueMessages.animate({scrollTop: $chatDialogueMessagesHeight}, 500);
    	$chatDialogueMessagesHeight += $chatDialogueMessages.height(); // update height
	}

	// Open & close chat dialogue 
	$document.on('click', '.c-chat-dialogue__btn', function(e){
		$chatDialogueBody.toggleClass('is-active');
		$(this).toggleClass('is-open');
	});

	$('#input-chat').on('keypress', function (e) {
	    if (e.which == 13) {
	      	addChatMessage($(this));
	      	updateHeight();
	      	return false;
	    }
	});
}; 