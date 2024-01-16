// Import the 'returnMenu' function
import returnMenu from "./returnMenu";

// Define a function named 'anyTime' using function expression syntax
const anyTime = function () {
    // Log the string 'This Week' to the console
    console.log('Any Time');

    // Call the 'returnMenu' function
    returnMenu();
};

// Export the 'anyTime' function as the default export of this module
export default anyTime;