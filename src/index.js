const { default: Page } = require("./Page");
const { default: Task } = require("./Task");
const { default: View } = require("./View");
const { default: Controller } = require("./Controller");

/* -------------------------------------------*/

const page1 = new Page('Welcome to your todo-list!', '👋');
const date = new Date();
const task1 = new Task('Open the todo-list app', date);
const task2 = new Task('Click the task text, title, & emoji to edit');
const task3 = new Task('Use the 3 dots to set due-date, duplicate, or delete');

task1.isDone = true;
page1.tasklist.push(task1);
page1.tasklist.push(task2);
page1.tasklist.push(task3);

Controller.savePageList([page1]);

View.load();
View.displayPage(page1);


// OPTIONAL ADDITIONS:
// Home, daily, weekly, all, & priority pages
// seperate completed list
// sub tasks
// task priority
// move tasks
// move projects
// project progress bar
// refesh single task only in view  