function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function randomFifty(){
	return Math.round(Math.random()) * 50
}
function getRandomThreeDigits(){
	return "" + randomNumber(0, 9) + randomNumber(0, 9) + randomNumber(0, 9)
}
function getRandomDate(minAge, maxAge){
	let birthDate = new Date()
	let rndYear = randomNumber((minAge *  31556952000), (maxAge * 31556952000 ))
	return rndYear = birthDate.getTime() - rndYear
}
function getPinDate(minAge, maxAge){
	let rndDate = getRandomDate(minAge, maxAge). 
}
function generatePIN(){ 
	let pin = "" + getRandomDate() + getRandomThreeDigits()
	let lastDigit = pin % 11
	return "" + pin + lastDigit
}

console.log(getRandomDate(18, 25));
