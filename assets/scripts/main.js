let showAll = document.querySelector('#show-All');
let diceRollInput = document.querySelector('#dice-roll-input');
let numberOfDiceRoll = document.querySelector('number-of-dice-roll');
let letsRoll = document.querySelector('#lets-roll');



var dieRolls = []



letsRoll.addEventListener("click", function () {
    console.log("lets-roll");
    console.log(diceRollInput.value)
    let rolls = diceRollInput.value
    console.log(rolls)

    let letsPlay = 0

    for (let i = 0; i < rolls; i++) {
     letsPlay = Math.floor(Math.random() * 6) + 1;
    console.log('You rolled a ' + letsPlay);

    dieRolls.push(letsPlay)
    
    
    }
    console.log(dieRolls)

   
    var total = ["1", "2", "3", "4", "5", "6"];
    var text = "16";
    var i;
    for (i = 0; i < total.length; i++) {
      text += total[i] + "<br>";
    }
    document.getElementById("total-number").innerHTML = text;



})
