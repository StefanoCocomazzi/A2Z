function getText(){
	var usertext = textfield.value();
	var words = usertext.split(/(\W+)/);
	console.log(words);
	for(var i=0;i< words.length; i++){
		var span = createSpan(words[i]);
		span.parent(output);		
		if(!/\W+/.test(words[i])){
			span.mouseOver(function(){
				this.style("background-color", color(random(255), random(255), random(255)));
				this.style("color", "#FFF");
			});	
		}	 
	}
}
function setup(){
	noCanvas();
	textfield =select("#usertext");
	output = select("#output");
	button = select("#submit");
	button.mousePressed(getText);
}
