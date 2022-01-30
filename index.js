function countWords(text){
	x=text.split(" ");
	for (var i = 0; i<x.length; i++){
		while (x[i] === ""){
			x.splice(i,1);
		}
	}
	return x.length;

}

document.querySelector("button.count").addEventListener("click",function (){
	var target = document.querySelector("textarea#targetText").value;
	var wordLength = countWords(target);
	document.querySelector("h3#result").textContent="Words: "+wordLength;
});