function greaterNum(first, second) {
	if (first > second){
		return "The greater number of " + first + " and " + second + " is " + first + ".";
	} else if (second > first){
		return "The greater number of " + first + " and " + second + " is " + second + ".";
	}
}

greaterNum(5, 10)

function helloWorld(language){
 if (language == 'en'){
 	return "Hello, World";
 } else if (language == 'fr'){
 	return "Bonjour, le monde";
 } else if (language == "es"){
 	return "Hola mundo";
 }
}

helloWorld('en')

function assignGrade(number){
	if (number >= 80){
		return "A";
	} else if (number >= 70 && number <= 79){
		return "B";
	} else if (number >= 60 && number <= 69){
		return "C";
	} else if (number >= 50 && number <= 59){
		return "D";
	} else
		return "F";
	}
}

assignGrade(89)

function pluralizar(noun, number){
	if (number > 1){
		return number + " " + noun + "s";
	} else if (number == 1){
		return number + noun
	}
}

pluralizar('elephant', 3)