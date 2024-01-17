// Import functions from other modules
import returnMenu from "./returnMenu";
import todaydate from "./todaydate";
import data from "./data";

// Define a function named 'thisWeek' using function expression syntax
const thisWeek = function () {
    // Log the string 'This Week' to the console
    console.log('This Week');

    // Get the current date using the 'todaydate' module
    let today = todaydate();

    // Log the current date to the console
    console.log('Today is ' + today);

    // Retrieve lists from the 'data' module
    let lists = data();

    // Calculate the end date for the next 7 days from today
    let endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 7);
    endDate = endDate.toISOString().slice(0, 10);
    console.log('End date for the next 7 days: ' + endDate);

    // Loop through each list
    for (let i = 0; i < lists.length; i++) {
        // Loop through each task in the current list
        for (let j = 0; j < lists[i].tasks.length; j++) {
            // Check if the due date of the task is within the date range (today to next 7 days)
            if (lists[i].tasks[j].dueDate >= today && lists[i].tasks[j].dueDate <= endDate) {
                // Log the task name to the console if it's within the date range
                console.log(lists[i].tasks[j].name);
            }
        }
    }

    // Call the 'returnMenu' function
    returnMenu();
};

// Export the 'thisWeek' function as the default export of this module
export default thisWeek;