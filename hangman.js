var can_play = true;
var words = new Array("PIVAS", "KOMENDA", "SHARA", "VERAPETROVNA", "SESSIA", "DOPKA");

var to_guess = "";
var display_word = "";
var used_letters = "";
var wrong_guesses = 0;
var max_wrong_quesses = 10;

function selectLetter(l)
{
	//alert(player.energy);
	if (can_play == false) {
		return;
	}

	if (used_letters.indexOf(l) != -1) {
		return;
	}
	
	used_letters += l;
	document.game.usedLetters.value = used_letters;
	
	if (to_guess.indexOf(l) != -1) {
		 // correct letter guess
		pos = 0;
		temp_mask = display_word;


		while (to_guess.indexOf(l, pos) != -1) {
			pos = to_guess.indexOf(l, pos);			
			end = pos + 1;

			start_text = temp_mask.substring(0, pos);
			end_text = temp_mask.substring(end, temp_mask.length);

			temp_mask = start_text + l + end_text;
			pos = end;
		}

		display_word = temp_mask;
		document.game.displayWord.value = display_word;
			
		if (display_word.indexOf("#") == -1) {
			alert("Конгратюлейшн. Ти виграв шавуху :)");

			can_play = false;
			location.replace("second_part.html");
		}
	}
	else {
		// incortect letter guess
		wrong_guesses += 1;
		eval("document.hm.src=\"hangman_pictures/hm" + wrong_guesses + ".gif\"");
		
		if (wrong_guesses == max_wrong_quesses) {
		// lost
			alert("ну ти й лошара.");
			can_play = false;
			location.replace("second_part.html");
		}
	}
}

function reset() {
	selectWord();
	document.game.usedLetters.value = "";
	used_letters = "";
	wrong_guesses = 0;
	document.hm.src="hangman_pictures/hmstart.gif";
}

function selectWord() {
	can_play = true;
	random_number = Math.round(Math.random() * (words.length - 1));
	to_guess = words[random_number];
	//document.game.theWord.value = to_guess;

	masked_word = createMask(to_guess);
	document.game.displayWord.value = masked_word;
	display_word = masked_word;
}

function createMask(m) {
	mask = "";
	word_lenght = m.length;


	for (i = 0; i < word_lenght; i ++) {
		mask += "#";
	}
	return mask;
}
