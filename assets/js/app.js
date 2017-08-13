// Methods

// append
// html
// attr
// on
// empty
// css

var backgroundColor = [
	'red',
	'blue',
	'orange',
	'green',
	'purple'
]


// Array
var quotes = [
	'Nothing makes the earth seem so spacious as to have friends at a distance; they make the latitudes and longitudes.',
	'No friendship is an accident.',
	'A good friend is like a four-leaf clover; hard to find and lucky to have',
	'I would rather walk with a friend in the dark, than alone in the light.',
	'Friendship marks a life even more deeply than love. Love risks degenerating into obsession, friendship is never anything but sharing.'
];






	var num = Math.floor(Math.random() * quotes.length); // random number

	var randomQuotes = quotes[num]; // random quotes


	// var color = backgroundColor[num];


	var content = $("<p>");

		content.html(randomQuotes);

		content.attr({
			"class":"quotes",
			"data-name":"esterlin"
		});

		content.css({
			"border":"3px solid rgba(0, 0, 0, 0.3)",
			"display": "flex",
			"justify-content": "center",
			"align-items": "center",
			"height": "200px",
			"box-shadow": "5px 5px 5px rgba(0, 0, 0, 0.5)"
		});

	$("#result").append(content);



	// Set a click button

	console.log(window);

	$("#random").on('click', function () {

		num = Math.floor(Math.random() * quotes.length); // random number

		randomQuotes = quotes[num]; // random quotes

		// var color = backgroundColor[num];


		content.empty();

		content.append(randomQuotes);

		// var color = backgroundColor[num];

		// $("body").css('background', color);

	});























































