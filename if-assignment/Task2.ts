// Ask user to enter a number and you have to determine whether the number is positive, negative or zero.

import inquirer from "inquirer";

async function main() {
    
const {number} =  await inquirer.prompt({name: "number", type: "number", message: "Enter a number: "});

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
}

main();