    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    function randomFifty(){
        return Math.round(Math.random()) * 50
    }
    function randomMonth(){
        return randomNumber(1, 13) + randomFifty()
    }
    function getRandomThreeDigits(){
        return "" + randomNumber(0, 9) + randomNumber(0, 9) + randomNumber(0, 9)
    }
    function getRandomDate(minAge, maxAge){
	    let birthDate = new Date()
	    let rndYear = randomNumber(minAge, maxAge)
	    if (rndYear == minAge){
		    birthDate.setFullYear(birthDate.getFullYear() - rndYear, randomNumber(0, birthDate.getMonth()), randomNumber(0, birthDate.getDay()))
	    } else if (rndYear == maxAge){
		    birthDate.setFullYear(birthDate.getFullYear() - rndYear, randomNumber(birthDate.getMonth(), 11), randomNumber(birthDate.getDay(), 31))
	    } else {
		    birthDate.setFullYear(birthDate.getFullYear() - rndYear, randomNumber(0, 11), randomNumber(0, 31))
	    }
        return "" + randomNumber(50, 100) + randomMonth() + randomNumber(1, 28) 
    }
  function generatePIN(){ 
        let pin = "" + getRandomDate() + getRandomThreeDigits()
        let lastDigit = pin % 11
        return "" + pin + lastDigit
  }

console.log(generatePIN());
