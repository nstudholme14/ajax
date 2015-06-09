$(function(){

	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm= $('#query').val(); 
		console.log(searchTerm);
		//add string here to show that search is happening!
			console.log('result submitted');
		getRequest(searchTerm);
	});

//AJAX request to API

	function getRequest(searchTerm){
		var params = {
			s: searchTerm, 
			r: 'json',
			part: 'snippet',
			key: 'AIzaSyCY1te2NATavm5Z_7hjMeyoO5kw4VV_2k0',
			q: 'search term'
		};
		url='https://www.googleapis.com/youtube/v3/search'
		$.getJSON(url, params, function(data) {
			console.log(data);
			showResults(data.items);
			});
	}

	//end getRequest


	function showResults(results) {
		var html = '';
		$.each(results, function(index,value){
			html += '<iframe width="400" height="215" frameborder="0" src="' + value.id.videoId + '"></iframe>'
			console.log('https://www.youtube.com/watch?v='+ value.id.videoId); 
		});
		$('#results').html(html);

	};



}); 