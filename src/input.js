// Import the 'today' function from the 'today.js' module
import today from "./today";

// Define a function named 'input'
const input = function () {
    // Use the 'prompt' function to get user input and store it in 'userInput'
    let userInput = prompt("Enter a number");

    // Log the user's input to the console
    console.log('User input: ', userInput);

    // If the user's input is a number 1
    if (userInput === "1") {
        // Call the 'today' function
        today();
    }
};

// Export the 'input' function as the default export of this module
export default input;