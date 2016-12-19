function cutUp(words,l){
	var poem = "";
	for(i=0;i<l;i++){
		poem += random(words) + " ";
	}
	return poem;
	
}


function setup(){
	noCanvas();
	var button = select("#cutup");
	button.mousePressed(function(){
		var usertext = select("#usertext").value();
		var words = splitTokens(usertext, ' ,!.?()');
		var plength = select("#length").value();
		var poem = cutUp(words,plength);
		var p=select("#poem");
		p.html(poem);
		select("#poemtitle").html("Your Poem");
		button.html("Cut-Up Again");
	});
}
