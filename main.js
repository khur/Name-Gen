console.log("this is the start! WOO!")

var wdi = new Array("Kyle Hurst", "Shawn Rodriguez", "Jimmy Garzon", "Jimmy Garzon", "Danny D", "Glenn Harris", "Blaise Thomas");
var celeb = new Array("Jessica Biel", "J-Lo", "Lady Gaga", "Halle Berry", "Helen Hunt", "Zoe Saldana")


var button = document.getElementById("cupid");

/*function nameAlert(){

	for(var i = 0; i < wdi.length; i++){
		console.log( wdi[i] );
	};

}*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



button.onclick = function(){
	var rando = getRandomInt(0, wdi.length);
	var babe = getRandomInt(0, celeb.length);
	console.log("Jimmy says " + wdi[rando] + "  & " + celeb[babe]);
	
};


console.log("here? #1");







console.log("HERE! #2");