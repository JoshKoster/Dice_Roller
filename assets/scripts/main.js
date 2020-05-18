const rollButton = document.querySelector("#roll-button")
const dieRolls = []

rollButton.addEventListener("click", function() {
    
})

const sides = ["One" , "Two" , "Three" , "Four" , "Five" , "Six"];
const roll = () => sides[Math.floor(Math.random() * 6)]

// const rolls = (n) => {
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         result.push(roll());
//     }
//     return result;
// };

const count = (rolls) => {
    const result = new Map();
    for (const roll of rolls) {
        result.set(
            roll,
            1 + (result.get(roll) || 0));
    }
    return result;
