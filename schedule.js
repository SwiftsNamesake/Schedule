/*
 * schedule.js
 * ?
 *
 * Jonatan H Sundqvist
 * April 30 2015
 *
 *
 * TODO | - 
 *        - 
 *
 * SPEC | -
 *        -
 *
 */



var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var schedule = (function() {

})();


// TODO: Move to separate file
var languages = {
	'english': {
		monday:    'Monday',
		tuesday:   'Tuesday',
		wednesday: 'Wednesday',
		thursday:  'Thursday',
		friday:    'Friday',
		saturday:  'Saturday',
		sunday:    'Sunday'
	},

	'spanish': {
		monday:    'lunes',
		tuesday:   'martes',
		wednesday: 'miércoles',
		thursday:  'jueves',
		friday:    'viernes',
		saturday:  'sábado',
		sunday:    'domingo'
	},

	'swedish': {
		monday:    'måndag',
		tuesday:   'tisdag',
		wednesday: 'onsdag',
		thursday:  'torsdag',
		friday:    'fredag',
		saturday:  'lördag',
		sunday:    'söndag'
	}

}



function diagram(data) {
	// var div = new DOMElement();
}



$(document).ready(function() {

	// Highlight the current day
	var today = new Date();
	var day   = today.getDay();
	console.log('Today is ' + weekdays[1 + day%5] + '.');
	// $('.weekdays .column div:not(:first-child)').addClass('activity'); // I could do this manually. Eh...
	$('.' + weekdays[day]).addClass('current');


	//
	weekdays.map(function(day, index, days) {
		console.log('.' + day);
		$('.' + day).hover(function(element) {
			$('.' + day).addClass('highlighted');
		}, function(element) {
			$('.' + day).removeClass('highlighted');
		});
	});


	//
	$('select[name="language"]').change(function(ev) {
		var element = this;
		console.log(ev);
		weekdays.slice(1, 6).map(function(day, i, days) {
			$('.weekdays div.' + day + '> div:first-child').html(languages[element.value.toLowerCase()][day.toLowerCase()].toUpperCase());
		});
	});


	//
	$(document).mousemove(function(ev) {

		var top    = $('.activities').offset().top
		var bottom = $('.activities').innerHeight() + top;

		if (ev.pageY < top || ev.pageY > bottom) { return; }

		var time  = (ev.pageY - top) * (8*3600)/(bottom - top); //
		var hours = String(Math.floor(time/3600));
		var mins  = String(Math.floor(time/60)%60);
		$('#ruler').css({'top': ev.pageY})
		           .html((hours.length === 1 ? '0' + hours : hours) + ':' + (mins.length === 1 ? '0' + mins : mins));
	});

});