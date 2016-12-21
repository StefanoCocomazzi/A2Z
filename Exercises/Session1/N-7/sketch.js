function setup(){
	noCanvas();
	
	var button = select("#done");
	button.mousePressed(function(){
		var lang= select("#ita").elt.checked ? 'it' : 'en';
		var usertext = select("#usertext").value();
		var words = splitTokens(usertext, ' ,.()<>"');
		words=n7(words,lang);
	});
}

function n7(words,lang){
	loadStrings("words_"+lang+".txt", function(dictionary){
		dictionary = join(dictionary,' ');
		dictionary = split(dictionary, ' ');
		p=select('#poem');
		var poem='';
		for(i=0;i<words.length;i++){
			var index = dictionary.indexOf(words[i].toLowerCase());
			if(index!=-1){
				words[i]=dictionary[index+7];	
			}
			poem += words[i] + ' ';
				
		}
		p.html(poem);	
		
	});
	
	
}