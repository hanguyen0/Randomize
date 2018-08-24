var list = [0, 1, 5];

for(var i = 1; i <= 5; i++) {
	console.log("id#: " + i, "random injection: " + list[Math.floor(Math.random() * list.length)]);
}


//print out in the console
//id#: 1 random injection: 0
//id#: 2 random injection: 5
//id#: 3 random injection: 1
//id#: 4 random injection: 1
//id#: 5 random injection: 0
