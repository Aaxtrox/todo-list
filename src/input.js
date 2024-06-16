// Import functions
import today from "./today";
import thisweek from "./thisweek";
import anyTime from "./anytime";
import listnames from "./listnames";
import addList from "./addList";

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
    // If the user's input is a number 3
    } else if (userInput === "3") {
        // Call the 'anyTime' function
        anyTime();
    } else if (userInput === "4") {
        // Call the 'listNames' function
        listnames();
    } else if (userInput === "5") {
        // Call the 'addList' function
        addList();
    }
};

// Export the 'input' function as the default export of this module
export default input;