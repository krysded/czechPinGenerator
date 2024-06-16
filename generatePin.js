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
function getRndPinDate(minAge, maxAge){
	let rndDate = getRandomDate(minAge, maxAge) 
	let rndPinDate = new Date(rndDate)
	let rndPinYear = rndPinDate.getUTCFullYear().toString().slice(-2)
	let rndPinMonth = rndPinDate.getUTCMonth() + 1 + randomFifty() 
	rndPinMonth = rndPinMonth.toString().padStart(2, "0")
	let rndPinDay = rndPinDate.getUTCDay() + 1
	rndPinDay = rndPinDay.toString().padStart(2, "0")
	return "" + rndPinYear + rndPinMonth + rndPinDay
	
}
function generatePIN(minAge, maxAge){ 
	let rndPinDate = getRndPinDate(minAge, maxAge)
	let pin = "" + rndPinDate + getRandomThreeDigits()
	if (parseInt(rndPinDate.slice(2)) < 54){
		return pin
	}
	let lastDigit = pin % 11
	if (lastDigit == 10){
		return "" + pin + "0" 
	}
	return "" + pin + lastDigit
}
