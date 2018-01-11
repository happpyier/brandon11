function roll(){
		var a = Math.random(9);
		var b = Math.random(9);
		var c = Math.random(9);
		document.getElementById("rollResults").innerHTML = a+" "+b+" "+c;
}