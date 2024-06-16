// Define a function named 'data' using closure to maintain state
const data = (function () {
    // Create an empty array to store lists
    let lists = [];

    // Return a function that retrieves or modifies 'lists' array
    return function () {
        // Return the 'lists' array
        return lists;
    };
})();

// Export the 'data' function as the default export
export default data;