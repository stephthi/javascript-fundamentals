function checkEven() {
	for (i = 0; i < 21; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even.");
    } else {
        console.log(i + " is odd.");
    }
	}
}

checEven(10)

function multiplication() {
  for (i = 1; i < 11; i++) {
    for (j = 1; j < 11; j++) {
      console.log(i + " * " + j + " = " + (i * j))
    }
  }
}

multiplication(9)

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

function grades() {
 for (i = 60; i < 101; i += 1) {
    console.log("For " + i + ", your grade is " + assignGrade(i) + ".")
  }
}

grades(70)