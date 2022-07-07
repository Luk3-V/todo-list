const { default: Page } = require("./Page");
const { default: Task } = require("./Task");
const { default: View } = require("./View");
const { default: Controller } = require("./Controller");
const { format } = require("date-fns")

/* -------------------------------------------*/

const page1 = new Page('page1', '🙂');
const page2 = new Page('page2', '🙃');
const date = format(new Date(), 'LLL dd, yyyy')
const task1 = new Task('task 1', date);
const task2 = new Task('task 2');
page1.tasklist.push(task1);
page1.tasklist.push(task2);

Controller.savePageList([page1, page2]);

View.load();
View.displayPage(page1);
View.displayPageList([page1, page2])



// TODO

// local storage -------
// switch page view ---------
// intitial load ~~
// Add task button ~~
// Add project button 
// complete task -------------
// uncomplete task -----------
// delete task
// delete project
// edit task title -----------
// edit project title
// edit emoji
// add due date to task
// add due date to project
// edit task menu --------------
// edit project menu
// refesh task only in view
// seperate completed list

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