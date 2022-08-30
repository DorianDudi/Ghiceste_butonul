function getRandomIntFromTo(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let winning_number = getRandomIntFromTo(1, 3);
document.getElementById('winner').innerText = winning_number;

function getClickID() {
	if(event.target.id == winning_number) {
		alert("Correct!");
		winning_number = getRandomIntFromTo(1, 3);
		document.getElementById('winner').innerText = winning_number;
	} else {
		alert("Try, try... Try again!");
	}
}
