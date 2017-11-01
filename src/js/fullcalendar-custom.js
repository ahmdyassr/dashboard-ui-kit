//
// Full Calendar 
//
// Specify your own calendar events, options
// Read More: https://fullcalendar.io/docs/

$(function(){

	if($('.js-calendar').length){
		var $calendar = $('.js-calendar');
		
	    $calendar.fullCalendar({
	    	//
	        // Put your options and callbacks here
	        //
	        
	        header:
	        {
	            left: 'prev,next',
	            center: 'title',
	            right: 'month,agendaWeek,agendaDay'
	        },

	        // Show full name of day instead of short(default) name
	        dayNamesShort: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

	        // Time Format
	        timeFormat: 'hh:mm a',

	        // Events
	        events: [
		        {
		            title  : 'Sara\'s birthday',
		            start  : '2017-10-28',
		            className: 'fc-event--orange',
		            allDay: true
		        },
		        {
		        	title  : 'Jason',
		            start  : '2017-10-24',
		            end    : '2017-10-26',
		            className: 'fc-event--green',
		            allDay: true
		        },
		        {
		            title  : 'Ruth in London',
		            start  : '2017-10-08',
		            end    : '2017-10-12',
		            className: 'fc-event--blue'
		        },
		        {
		            title  : 'All Hands 4',
		            start  : '2017-10-27',
		            className: 'fc-event--green',
		            allDay: true
		        },
		        {
		            title  : 'Carl',
		            start  : '2017-10-30',
		            className: 'fc-event--green'
		        }
		    ]
	    });
	}
});