// Import functions from other modules
import returnMenu from "./returnMenu";
import data from "./data";

// Define a function named 'anyTime' using function expression syntax
const anyTime = function () {
    // Log the string 'This Week' to the console
    console.log('Any Time');

    // Retrieve lists from the 'data' module
    let lists = data();
    
    // Loop through each list
    for (let i = 0; i < lists.length; i++) {
        // Loop through each task in the current list
        for (let j = 0; j < lists[i].tasks.length; j++) {
            // Log task name and due date to the console
            console.log(lists[i].tasks[j].name + ' - ' + lists[i].tasks[j].dueDate);
        }
    }

    // Call the 'returnMenu' function
    returnMenu();
};

// Export the 'anyTime' function as the default export of this module
export default anyTime;