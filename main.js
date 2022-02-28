var age = 15
var registeredEarly = false; 

var raceNumber = Math.floor(Math.random() * 1000);

if (age > 18){
    raceNumber += 1000
}

if(age > 18 && registeredEarly === true){
    console.log(`Your race will begin at 9:30 AM and your race number will be ${raceNumber}`)
} else  if (age > 18 && !registeredEarly){
    console.log(`Your race will begin at 11:00 AM and your race number will be ${raceNumber}`)
} else if (age < 18)
    console.log (`Your race will begin at 12:30 PM and your race number will be ${raceNumber}`)
