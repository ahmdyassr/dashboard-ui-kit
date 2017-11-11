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
// 7. File Upload (dropzone plugin)
// 8. Sortable Table (dataTable plugin)
// 9. Date Picker (datepicker plugin)

//
// Note: Bootstrap plugins is enabled through via data attributes
//

// A fix to initialise dropzone on document ready
Dropzone.autoDiscover = false;

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

    // 7. dropzone
    if($('.dropzone').length) {
        $("#custom-dropzone").dropzone();
    }

    // 8. datatable
    if($('#datatable').length) {
        $("#datatable").DataTable({
            searching: false,
            "lengthChange": false, 
            "order": [], // disable ordering on init
            "ordering": true,
            columnDefs: [{
              orderable: false,
              targets: "no-sort"
            }]
        });
    }

    // 9. datepicker
    if($('[data-toggle="datepicker"]').length) {
        $('[data-toggle="datepicker"]').datepicker();
    }

    jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: null,
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        showTooltip: true,
        scaleColors: ['#C8EEFF', '#006491'],
        normalizeFunction: 'polynomial'
    });
}); 
