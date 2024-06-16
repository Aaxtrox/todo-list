// Import functions from other modules
import data from "./data";
import returnMenu from "./returnMenu";

// Define a function named 'addList' using function expression syntax
const addList = function (listName) {
    // Retrieve lists from the 'data' module
    let lists = data();

    // Ask the user for a list name
    let listName = prompt('Enter the name of the list:');
    
    // Push an object representing a list into the 'lists' array
    lists.push({name: listName, tasks: []});
    
    // Log the string 'List added' to the console
    console.log('List added');
    
    // Return the 'lists' array
    return lists;
};

// Export the 'addList' function as the default export of this module
export default addList;