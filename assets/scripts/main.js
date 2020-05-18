const rollButton = document.querySelector("#roll-button")
const dieRolls = []

// rollButton.addEventListener("click", function() {
    
// })

const sides = ["One" , "Two" , "Three" , "Four" , "Five" , "Six"];
const roll = () => sides[Math.floor(Math.random() * 6)]

const rolls = (n) => {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(roll());
    }
    return result;
};

const count = (rolls) => {
    const result = new Map();
    for (const roll of rolls) {
        result.set(
            roll,
            1 + (result.get(roll) || 0));
    }
    return result;
}

let diceRollDisplay = document.querySelector('#dice-roll-display');
diceRollDisplay.addEventListener("click", function(){
    console.log("dice-roll-display");
})


let roll = document.querySelector('#roll');
roll.addEventListener("click", function(){
    console.log('roll');
})

var dieRolls = new Array();


let showAll = document.querySelector('#show-All');
showAll.addEventListener("click", function(){
    console.log("#show-all");
})


let numberOfDiceRoll = document.querySelector('#number-of-dice-roll');
numberOfDiceRoll.addEventListener("click", function(){
    console.log("number-of-dice-roll");
})
