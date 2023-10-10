
function temperatureConverter1(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}

function temperatureConverter(valNum) {
	valNum = parseFloat(valNum);
	document.getElementById("outputFahrenheit").innerHTML = (valNum*1.8) + 32;
}

function logout() {
	let response = confirm("Are you sure u want to logout??");

	if(response){
		window.close('Temp.html')
		window.open('index.html')
	}
}