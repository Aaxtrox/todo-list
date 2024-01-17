// Define a function named 'todaydate'
const todaydate = () => {
    // Create a new Date object to get the current date
    let today = new Date();

    // Extract day, month, and year components from the current date
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // Months are zero-based, so add 1
    let yyyy = today.getFullYear();

    // Format day and month with leading zeros if necessary
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm ='0' + mm;
    }

    // Construct a string representation of the current date in 'YYYY-MM-DD' format
    today = yyyy + '-' + mm + '-' + dd;

    // Return the formatted date string
    return today;
};

// Export the 'todaydate' function as the default export
export default todaydate;