var serviceURL = "http://localhost/directory/services/";
var myURL = "http://introducer-app.net/api/listprofiles?userId=5&latitude=16&longitude=17&callback=?";

var employees;

$('#ideaListPage').bind('pageinit', function(event) {
	console.log('employeelist.bind');
	getIdeaList();
});

$('#btnRefresh').click(function() {	
	getIdeaList();
});

function getRandom(myArray) {
	return myArray[Math.floor(Math.random() * myArray.length)]
}

var ideaGenerators = { items: [] };

function getIdea() {
	//console.log(typeof(ideaGenerators.items[0]));
		return getRandom(ideaGenerators.items)();

}

function getIdeaList() {
	
	//$.getJSON(myURL, function(data) {
		//alert(data);
		$('#ideaList li').remove();
		
		var data = {
    		items: []
		};
		
		data.items.push(getIdea());
		data.items.push(getIdea());
		data.items.push(getIdea());
		
		employees = data.items;
		//employees = [{"id" :1, "nickname" : "Amy Jones",  "picture" : "amy_jones.jpg" }];
		$.each(employees, function(index, employee) {
			$('#ideaList').append('<li style=background:' + employee.color + '>' + employee.text + '</li>');
		});
		$('#ideaList').listview('refresh');
	//});
}