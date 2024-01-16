import returnMenu from "./returnMenu";

// Define a function named 'today' using function expression syntax
const today = function () {
    // Log the string 'TODAY' to the console
    console.log('TODAY');

    // Call the 'returnMenu' function
    returnMenu();
};

// Export the 'today' function as the default export of this module
export default today;