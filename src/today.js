// Import the 'returnMenu' function
import returnMenu from "./returnMenu";
import todaydate from "./todaydate";
import data from "./data";

// Define a function named 'today' using function expression syntax
const today = function () {
    // Log the string 'TODAY' to the console
    console.log('TODAY');

    // Get the current date using the 'todaydate' module
    let today = todaydate();

    // Log the current date to the console
    console.log('Today is ' + today);

    // Retrieve lists from the 'data' module
    let lists = data();

    // Loop through each list
    for (let i = 0; i < lists.length; i++) {
        // Loop through each task in the current list
        for (let j = 0; j < lists[i].tasks.length; j++) {
            // Check if the due date of the task matches the current date
            if (lists[i].tasks[j].dueDate === today) {
                // Log the task name to the console if the due date matches
                console.log(lists[i].tasks[j].name);
            }
        }
    }

    // Call the 'returnMenu' function
    returnMenu();
};

// Export the 'today' function as the default export of this module
export default today;