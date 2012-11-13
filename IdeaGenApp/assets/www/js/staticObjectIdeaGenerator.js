ideaGenerators.items.push(function() {
		var color = getRandom(colors.items);		
		var appearance = getRandom(appearances.items);		
		var material = getRandom(materials.items);
		var mainObject = getRandom(objects.items);
		var object2 = getRandom(objects.items);
		var verb = getRandom(verbsIng.items);

		var idea = { 
	        "id" : 1,
	        "text"  : "A " + appearance.name + " " + color.name.toLowerCase() + " " + mainObject.name + " for " + verb.name + " " + object2.name + " made of " + material.name + ".",
	        "color" : color.code
	    };
	    
	    //console.log(idea.text);
	    
	    return idea;

});