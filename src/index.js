const { default: Page } = require("./Page");
const { default: Task } = require("./Task");
const { default: View } = require("./View");
const { default: Controller } = require("./Controller");

/* -------------------------------------------*/

const page1 = new Page('Welcome to your todo-list!', '👋');
const page2 = new Page('Untitled', '📄');
const date = new Date();
const task1 = new Task('Open the todo-list app', date);
const task2 = new Task('Click the task text, title, & emoji to edit');
const task3 = new Task('Use the 3 dots to set due-date, duplicate, or delete');

task1.isDone = true;
page1.tasklist.push(task1);
page1.tasklist.push(task2);
page1.tasklist.push(task3);

Controller.savePageList([page1, page2]);

View.load();
View.displayPage(page1);


// BUGS:
// Fix title not bluring when replacing whole title.

// TODO:
// local storage -------
// switch page view ---------
// Add project button -----------
// complete task -------------
// uncomplete task -----------
// delete task -------------
// delete project --------------
// edit task title -----------
// edit project title ---------
// edit emoji -------------
// add due date to task -------------
// add due date to project
// edit task menu --------------
// edit project menu ----------------
// duplicate tasks -------------
// duplicate projects ------------
// rename pages ----------
// darkmode toggle ------------------
// collapsable sidebar --------------

// intitial load ~~
// Add task button ~~ (add focus)
// Style CSS ~~

// refesh task only in view  
// Clean up code

// OPTIONAL ADDITIONS:
// Home tab
// daily tasks tab
// weekly tasks tab
// all tasks tab
// priority tasks tab
// seperate completed list
// sub tasks
// task priority
// move tasks
// move projects
// project progress bar