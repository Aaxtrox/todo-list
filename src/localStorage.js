// Check for Local Storage availability and initialize lists if needed
if (typeof localStorage !== "undefined") {
    console.log("Local Storage is available");

    // Initialize 'lists' if it doesn't exist in localStorage
    if (!localStorage.getItem('lists')) {
        console.log("Lists not found in local storage. Initializing...");
        const lists = [];
        localStorage.setItem('lists', JSON.stringify(lists));
    } else {
        console.log("Lists already exist in local storage");
    }
} else {
    console.log("Local Storage is not available");
}