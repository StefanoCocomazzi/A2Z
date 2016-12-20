function displayWords(words){	
	for(var i=0;i<words.length;i++){
		span=createSpan(words[i]);
		p.child(span);
	}		
}
var p;
function setup(){
	noCanvas();
	var button = select("#done");
	button.mousePressed(function(){
		var usertext = select("#usertext").value();
		var words = splitTokens(usertext, ' ');
		p=select('#poem');
		displayWords(words);
		spans=selectAll("span");
		for(var i=0;i<spans.length;i++){
			spans[i].mousePressed(function(){
				if(this.class()=="hidden")
					this.removeClass("hidden");
				else
					this.addClass("hidden");
			});
		}	
	});
}
