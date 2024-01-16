// Import functions from other files
import menu from './menu.js';
import input from './input';

const returnMenu = function () {
    // Use the 'prompt' function to get user input and store it in 'userInput'
    let userInput = prompt('Enter a number 1 to return to the menu');

    // If the user's input is a number 1
    if (userInput === '1') {
        // Call functions
        menu();
        input();
    }
};

// Export the 'returnMenu' function as the default export of this module
export default returnMenu;