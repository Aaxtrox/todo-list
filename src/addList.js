// Import functions from other modules
import data from "./data";
import returnMenu from "./returnMenu";

// Define a function named 'addList' using function expression syntax
const addList = function () {
    // Retrieve lists from the 'data' module
    let lists = data();

    // Ask the user for a list name
    let listName = prompt('Enter the name of the list:');

    // Iterate through the 'lists' array to check if 'listName' already exists
    for (let i = 0; i < lists.length; i++) {
        // If a list with the same name already exists
        if (lists[i].name === listName) {
            let count = 1;
            
            // Increment the count and append a number in parentheses until a unique name is found
            while (lists.some(list => list.name === listName + ` (${count})`)) {
                count++;
            }
            
            // Update 'listName' to include the count in parentheses for uniqueness
            listName += ` (${count})`;
            
            // Exit the loop once a unique name is found
            break;
        }
    }
    
    // Push an object representing a list into the 'lists' array
    lists.push({name: listName, tasks: []});
    
    // Log the string 'List added' to the console
    console.log('List added');

    // Log the names of the lists to the console
    for (let i = 0; i < lists.length; i++) {
        console.log(lists[i].name);
    }

    // Call the 'returnMenu' function
    returnMenu();

    // Return the 'lists' array
    return lists;
};

// Export the 'addList' function as the default export of this module
export default addList;