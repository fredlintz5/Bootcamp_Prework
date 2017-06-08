//When "Grow" button clicked, "box", will change height
document.getElementById("button1").addEventListener("click", function(){

	document.getElementById("box").style.height = "450px";

});
//When "Blue" button clicked, "box", will change color
document.getElementById("button2").addEventListener("click", function(){

	document.getElementById("box").style.backgroundColor = "blue";

});	
//When "Fade" button clicked, "box", will change opacity
document.getElementById("button3").addEventListener("click", function(){

	document.getElementById("box").style.opacity = "0.5";

});
//When "Reset" button clicked, "box", will go back to original format
document.getElementById("button4").addEventListener("click", function (){

	document.getElementById("box").style.height = "150px";
	document.getElementById("box").style.backgroundColor = "orange";
	document.getElementById("box").style.opacity = "1.0";
	document.getElementById("box").style.backgroundImage = "url('')";

});
//When mouse over "box", current date will show
document.getElementById("box").addEventListener("mouseover", function(){

	document.getElementById("box").innerHTML = Date();

});
//When mouse not over "box", date will hide
document.getElementById("box").addEventListener("mouseout", function(){

	document.getElementById("box").innerHTML = "";

});


// When the "Spirit Animal" button is clicked...
document.getElementById("button5").addEventListener("click", function() {
	// We generate a random number between 0 and 3 (the number of facts in the catFactArray)
	var number = Math.floor((Math.random() * spiritAnimal.length));
	// We display an image from the spiritAnimal Array that is in the random position we just generated.
	document.getElementById("box").style.backgroundImage = (spiritAnimal[number]);

});

// This array holds all of our Spirit Animal images!
var spiritAnimal = [

	"url('file:///Users/fredlintz/Google%20Drive/PREWORK_FJL/MODULE%20-%2010%20-%20Jiggle%20into%20Javascript/Alpaca.jpg')" , 
	"url('file:///Users/fredlintz/Google%20Drive/PREWORK_FJL/MODULE%20-%2010%20-%20Jiggle%20into%20Javascript/honey%20badger.jpg')" ,
	"url('file:///Users/fredlintz/Google%20Drive/PREWORK_FJL/MODULE%20-%2010%20-%20Jiggle%20into%20Javascript/unicorn.jpg')"  ,
	"url('file:///Users/fredlintz/Google%20Drive/PREWORK_FJL/MODULE%20-%2010%20-%20Jiggle%20into%20Javascript/grizzly%20bear.jpg')"  
	

	]


































