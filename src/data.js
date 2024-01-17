// Define a function named 'data'
const data = function () {
    // Create an empty array to store lists
    let lists = [];

     // Push objects representing lists with tasks and due dates into the 'lists' array
    lists.push({name: 'list1', tasks: [{name: 'task1', dueDate: '2020-03-01'}, {name: 'task2', dueDate: '2020-03-02'}]});
    lists.push({name: 'list2', tasks: [{name: 'task3', dueDate: '2020-03-03'}, {name: 'task4', dueDate: '2020-03-04'}]});
    lists.push({name: 'list3', tasks: [{name: 'task5', dueDate: '2020-03-05'}, {name: 'task6', dueDate: '2020-03-06'}]});
};

// Export the 'data' function as the default export
export default data;