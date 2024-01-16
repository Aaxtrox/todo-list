// Import the 'returnMenu' function
import returnMenu from "./returnMenu";

// Define a function named 'thisWeek' using function expression syntax
const thisWeek = function () {
    // Log the string 'This Week' to the console
    console.log('This Week');

    // Call the 'returnMenu' function
    returnMenu();
};

// Export the 'thisWeek' function as the default export of this module
export default thisWeek;