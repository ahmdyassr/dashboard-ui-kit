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
// 6. Select (select2 plugin)

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

    // 6. Select
    if($('.c-select').length) {
        var $singleSelect = $('.c-select'),
            $singleSelectHasSearch = $('.c-select.has-search'),
            $multipleSelect = $('.c-select.c-select--multiple'),
            $disabledSelect = $('.c-select.is-disabled');

        $singleSelect.select2({
        	width: '100%',
            minimumResultsForSearch: Infinity // disable search
        });

        // single select with search enabled
        $singleSelectHasSearch.select2({
            width: '100%' 
        });

        // multiple select
        $multipleSelect.select2({
            width: '100%',
            multiple: true
        });

        // disabled select
        $disabledSelect.select2({
            width: '100%',
            disabled: true
        });
    }
}); 