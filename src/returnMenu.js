// Import functions from other files
import menu from './menu.js';
import input from './input';

// Create a function called 'returnMenu'
const returnMenu = function () {
    // Call the 'menu' function
    menu();
    input();
};

// Export the 'returnMenu' function as the default export of this module
export default returnMenu;