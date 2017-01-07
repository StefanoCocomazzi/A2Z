$.ajax({
	  url: 'https://api.open-notify.org/astros.json',
	  dataType: 'jsonp',
	  success: function (data) {
		console.log(data);
		$("#hNumber").html(`There are <strong>${data.number}</strong> people in space right now`);
		var people = data.people;
		for(var i=0;i<people.length;i++){
			queryName(people[i].name, people[i].craft);
		}
	  }
	});

function queryName(name,craft){
	$.ajax({
	  url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + name + '&limit=1&namespace=0&format=json&prop=url',
	  dataType:'jsonp',
	  success: function (x) {
		var url= x[3][0];
		$('#hAstronauts').append('<div><h4><a href="'+url+'" target="_blank">'+name+'</a><h4><h6>('+craft+')</h6></div><\hr>');
	  },
	});
}

