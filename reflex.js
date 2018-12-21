var startTime = new Date();
var endTime = new Date();
var startPressed = false;
var bgChangeStarted = false;
var maxWait = 20;
var timerID;

var randMULTIPLIER = 0x015a4e35;
var randINCREMENT = 1;
var today = new Date();
var randSeed = today.getSeconds();

function startTest() {
	document.body.style.backgroundImage = "url('cockroaches.gif')";//document.response.bgColorChange.options[document.response.bgColorChange.selectedIndex].text;
	bgChangeStarted = true;
	startTime = new Date();
}

function remark(responseTime) {
	var responseString="";
	if (responseTime < 0.10)
		responseString="Новачкам щастить! Красава! Палучі шавуху ;)";
	if (responseTime >= 0.10 && responseTime < 0.40)
		responseString="Нот бед! Таргани тебе не зжеруть. Палучі шавуху ;)";
	if (responseTime >= 0.40 && responseTime < 0.60)
		responseString="Ну тіпа такоє.";
	if (responseTime >= 0.60 && responseTime < 1)
		responseString="Мдемс. А ти, дивлюся, реакцію таку собі маєш.";
	if (responseTime >= 1)
		responseString="Чьо спимо? Якщо ти так тарганів завжди валити будеш, то ви подружитеся, да.";

	return responseString;
}

function stopTest() {
	if (bgChangeStarted) {
		endTime = new Date();
		var responseTime = (endTime.getTime() - startTime.getTime()) / 1000;

		document.body.style.background="white";       
		alert("Час реакції " + responseTime + " секунди " + "\n" + remark(responseTime));
		startPressed = false;
		bgChangeStarted = false;
	}
	else {
		if (!startPressed) {
			alert("Тицьни \"Го\", написано ж зверху.");
		}
		else {       
			clearTimeout(timerID);
			startPressed = false;             
			alert("Альо! Не махай тапком, поки тарганів не побачив!");
		}               
	}
}

function randNumber() {
	randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
	return((randSeed >> 15) & 0x7fff) / 32767;
}

function startit() {
	if (startPressed) {
		alert("Already started. Press stop to stop");
		return;
	}
	else {
		startPressed = true; 
		timerID = setTimeout('startTest()', 6000 * randNumber());
	}
}