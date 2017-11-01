//
// Main javascript
//
// Initialize plugins

//
// Table of content:
//
// 1. Sidebar
// 2. Switches
// 3. Toggles
// 4. Todo Tasks
// 5. Boards (dragula plugin)
//
// Note: Bootstrap plugins is enabled through via data attributes

// document ready
$(function() {
	"use strict";


	// Initialize 
	
	Sidebar(); // 1. Sidebar
	Switch();  // 2. Switches
	Toggle();  // 3. Toggles
	Todo();    // 4. Todo

    // 5. Boards 
    if($('.c-board').length) {
    	var dragulaObj = dragula( $('.c-board__content').toArray(), {});
    }
}); 