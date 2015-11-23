function fortuneTeller(children, partner, location, job) {
	var output = "You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids." ;
	return output;
}

fortuneTeller(3, "Fiona", "Toronto", "doctor")

function ageCalculator(birthYear, currentYear) {
	var age = currentYear - birthYear;
	var otherAge = currentYear - birthYear - 1;
	var output = "They are either " + age + " or " + otherage + "." ;
	return output;
}

ageCalculator(1990, 2015)

function supplyCalculator(currentAge, maxAge, amount) {
	var lifespan = maxAge - currentAge;
	var foodAmount = lifespan * amount;
	var output = "You will need " + foodAmount + " to last you until the ripe old age of " + lifespan + "." ;
	return output;
}

supplyCalculator(21, 90, 3)

function geometrizer(radius) {
	var circumference = 2 * radius * 3.14;
	var area = radius ^ 2 * 3.14;
	var output = "The circumference is " + circumference + ". The area is " + area ;
	return output;
}

geometrizer(10)

function tempCalculator(celcius) {
	var fahrenheit = celcius * 1.8 + 32;
	var output = celcius + "°C is " + fahrenheit + "°F.";
	return output;
}

tempCalculator(30)

function celciusCalc(fahrenheit)
	var celcius = (fahrenheit - 32) / 1.8;
	var output = fahrenheit + "°F is " + celcius + "°C.";
	return output;
}

celciusCalc(88)