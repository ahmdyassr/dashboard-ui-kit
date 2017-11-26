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
		            start  : '2017-11-28',
		            className: 'fc-event--orange',
		            allDay: true
		        },
		        {
		        	title  : 'Jason',
		            start  : '2017-11-24',
		            end    : '2017-11-26',
		            className: 'fc-event--green',
		            allDay: true
		        },
		        {
		            title  : 'Ruth in London',
		            start  : '2017-11-08',
		            end    : '2017-11-12',
		            className: 'fc-event--blue'
		        },
		        {
		            title  : 'All Hands 4',
		            start  : '2017-11-27',
		            className: 'fc-event--green',
		            allDay: true
		        },
		        {
		            title  : 'Carl',
		            start  : '2017-11-30',
		            className: 'fc-event--green'
		        }, //
		        {
		            title  : 'Adam\'s birthday',
		            start  : '2017-12-28',
		            className: 'fc-event--orange',
		            allDay: true
		        },
		        {
		        	title  : 'Business Meeting',
		            start  : '2017-12-24',
		            end    : '2017-12-26',
		            className: 'fc-event--green',
		            allDay: true
		        },
		        {
		            title  : 'Vist Japan',
		            start  : '2017-12-08',
		            end    : '2017-12-12',
		            className: 'fc-event--blue'
		        },
		        {
		            title  : 'Buy New Mac',
		            start  : '2017-12-27',
		            className: 'fc-event--green',
		            allDay: true
		        },
		        {
		            title  : 'New Product Launch',
		            start  : '2017-12-30',
		            className: 'fc-event--green'
		        }
		    ]
	    });
	}
});