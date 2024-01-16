// Import functions
import today from "./today";
import thisweek from "./thisweek";

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
    // If the user's input is a number 2
    } else if (userInput === "2") {
        // Call the 'thisweek' function
        thisweek();
    }
};

// Export the 'input' function as the default export of this module
export default input;