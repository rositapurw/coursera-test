(function (window) {
	var helloSpeaker = {};
	helloSpeaker.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var i = 0; i < helloSpeaker.names.length; i++) {
		var firstLetter = helloSpeaker.names[i].charAt(0).toLowerCase(); 
		if (firstLetter === 'j') {
			helloSpeaker.speakHello(helloSpeaker.names[i]);
		}
	}
	var speakHello = "Hello ";
	helloSpeaker.speakHello = function () {
		console.log(speakHello + helloSpeaker.names)
	}

	
	// var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	// for (var i = 0; i < names.length; i++) {
	// 	var firstLetter = names[i].charAt(0).toLowerCase();
	// 	if (firstLetter === 'j') {
	// 		byeSpeaker.speakBye(names[i]);
 	// 	} else {
   	// 		helloSpeaker.speakHello(names[i]);
 	// 		}
	// }

	window.helloSpeaker = helloSpeaker;

})(window);

(function (window) {
var byeSpeaker = {};
	byeSpeaker.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var i = 0; i < byeSpeaker.names.length; i++) {
		var firstLetter = byeSpeaker.names[i].charAt(0).toLowerCase(); 
		if (firstLetter === 'j') {
			byeSpeaker.speakBye(byeSpeaker.names[i]);
		}
	}
	var speakGoodBye = "Good Bye ";
	byeSpeaker.speakGoodBye = function () {
		console.log(speakGoodBye + byeSpeaker.names)
	}

window.helloSpeaker = helloSpeaker;

})(window);
