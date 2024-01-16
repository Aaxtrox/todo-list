// Define a function named 'input'
const input = function () {
    // Use the 'prompt' function to get user input and store it in 'userInput'
    let userInput = prompt("Enter a number");

    // Log the user's input to the console
    console.log('User input: ', userInput);
};

// Export the 'input' function as the default export of this module
export default input;