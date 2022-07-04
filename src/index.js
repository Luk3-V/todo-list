const { default: Page } = require("./Page");
const { default: Task } = require("./Task");
const { default: View } = require("./View");


/* -------------------------------------------*/

const page1 = new Page('page1', '🙂');
const page2 = new Page('page2', '🙃');
const date = new Date();
const task1 = new Task('task 1', date);
const task2 = new Task('task 2');
page1.tasklist.push(task1);
page1.tasklist.push(task2);

const view = new View();

view.displayPage(page1);

view.displayPageList([page1, page1])


// TODO
// switch page view
// Add task button
// Add project button
// complete task
// uncomplete task
// delete task
// delete project
// edit task title
// edit project title
// edit emoji
// add due date to task
// add due date to project

// move tasks
// move projects
// duplicate tasks
// duplicate projects
// task priority
// sub tasks
// project progress bar

// Home tab
// daily tasks
// weekly tasks
// all tasks
// priority tasks