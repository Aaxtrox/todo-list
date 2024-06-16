// Import functions from other modules
import returnMenu from "./returnMenu";
import data from "./data";

// Define a function named 'listNames' using function expression syntax
const listNames = function () {
    // Log the string 'List Names' to the console
    console.log('List Names');

    // Retrieve lists from the 'data' module
    let lists = data();

    // Loop through each list
    for (let i = 0; i < lists.length; i++) {
        // Log the name of the current list to the console
        console.log(lists[i].name);
    }

    // Call the 'returnMenu' function
    returnMenu();
};

// Export the 'listNames' function as the default export of this module
export default listNames;