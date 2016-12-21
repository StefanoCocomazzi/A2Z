function diastic(seed, words){
	var phrase = "";
	seed=splitTokens(seed, ' ,!.?()');
	for(var k=0;k<seed.length;k++){
		for (var i=0;i<seed[k].length;i++){
			var c = seed[k].charAt(i);
			for(var j=0;j<words.length;j++){
				if(words[j].charAt(i)==c){
					phrase += words[j];
					phrase += ' ';
					break;
				}
			}
		}
		phrase += '<br/>';
	}
	return phrase;
}

function setup(){
	noCanvas();
	var submit = select("#done");
	submit.mousePressed(function(){
		var srctxt =select("#usertext").value();
		var words = splitTokens(srctxt, ' ,!.?()');
		var seed= select("#seed").value();
		var phrase = diastic(seed, words);
		select("#poem").html(phrase);
	});
}
