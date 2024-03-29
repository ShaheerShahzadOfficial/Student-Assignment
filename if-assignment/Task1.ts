// Ask user to input a number and you have to determine whether the number is even or odd.

import inquirer from "inquirer";

async function main() {

    const { number } = await inquirer.prompt({ name: "number", type: "number", message: "Enter a number: " });

    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

main();

