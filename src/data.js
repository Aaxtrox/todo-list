// Define a function named 'data' using closure to maintain state
const data = function () {
    // Create an empty array to store lists
    let lists = [];

    // check if lists exists in localStorage
    if (typeof localStorage !== "undefined") {
        // Initialize 'lists' if it doesn't exist in localStorage
        if (!localStorage.getItem('lists')) {
            const lists = [];
            localStorage.setItem('lists', JSON.stringify(lists));
        } else {
            // Retrieve lists from localStorage
            lists = JSON.parse(localStorage.getItem('lists'));
        }
    }

    // Return a function that retrieves or modifies 'lists' array
    return function () {
        // Return the 'lists' array
        return lists;
    };
}();

// Export the 'data' function as the default export
export default data;