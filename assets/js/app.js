
var endpoint = 'http://api.wunderground.com/api/067abeafb1e98bba/conditions/';


var parameters = 'q/GA/roswell.json';



$.ajax({
	url:endpoint + parameters,
	method:'GET'
})
.done(function (data) {

	var f = data.current_observation.temp_f,

		c = data.current_observation.temp_c,

		icon = data.current_observation.icon_url,

		status = data.current_observation.observation_time,

		wind_moving = data.current_observation.wind_string,

		weather_report = data.current_observation.weather,

		location = data.current_observation.display_location;


	var toggle = false;


	var name = location.city + ', ' + location.state + ', ' + location.zip;

		$("h2").html(name);
		$("#f").html("Temparature: " + f + ' F');
		$("img").attr('src', icon);
		$("#condition").html(weather_report);
		$("#status").html(status);

	// $("#loading").html("Data loading...");

	// setTimeout(function () {
		

	// 	$("#loading").empty();
	// }, 4000);


	$("#convert").on('click', function () {
		
		if(toggle === false){

			$("#f").html("Temparature: " + f + ' F');
			$("#convert").html("Convert into C");
			toggle = true;

		} else{

			$("#f").html("Temparature: " + c + ' C');
			$("#convert").html("Convert into F");

			toggle = false;
			
		}
	});






	console.group();
		console.log(data);
		console.log("Tempature: ", data.current_observation.temp_f, " F");
		console.log("Tempature: ", data.current_observation.temp_c, " C");
		console.log("Tempature: ", data.current_observation.icon_url, 'Icon');
		console.log("Last updated: ", data.current_observation.observation_time, 'last updated');
		console.log("Wind stable: ", data.current_observation.wind_string, 'stable');
		console.log("weather condition: ", data.current_observation.weather, 'weather condition');
		console.log("Location: ", data.current_observation.display_location, 'Location');
	console.groupEnd();

})
.catch(function (err) {

	$(".weather").html("Oopps, sorry, the server is down.");

});


// <h1>Weather condition in Roswell, GA, 30076</h1>
// 			<p>Temparature: 30 F</p>
// 			<button>Convert into C</button>
// 			<i>Icons over here</i>
// 			<p>Weather Condition:  Mostly Cloudy weather condition</p>

// 			<p>Last updated: Last Updated on August 26, 8:58 PM EDT last updated</p>


