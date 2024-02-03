    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    function randomFifty(){
        return Math.round(Math.random()) * 50
    }
    function randomMonth(){
        return randomNumber(1, 13) + randomFifty()
    }
    function getRandomThreeDigits(){
        return "" + randomNumber(0, 10) + randomNumber(0, 10) + randomNumber(0, 10)
    }
    function getRandomDate(minAge, maxAge){
	    let birthDate = new Date()
	    birthDate.setFullYear((birthDate.getFullYear() - randomNumber(minAge, maxAge)), randomNumber(, max))
        return "" + randomNumber(50, 100) + randomMonth() + randomNumber(1, 28) 
    }
  function generatePIN(){ 
        let pin = "" + getRandomDate() + getRandomThreeDigits()
        let lastDigit = pin % 11
        return "" + pin + lastDigit
  }

console.log(generatePIN());
