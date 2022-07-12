import Controller from "./Controller";
import flatpickr from "flatpickr";
const { format } = require("date-fns")

// main 
const pageIDElement = document.querySelector('.page-id');
const emojiElement = document.querySelector('.emoji');
const titleElement = document.querySelector('.title');
const tasklistElement = document.querySelector('.tasklist');
// sidebar
const pagelistElement = document.querySelector('.pagelist');

export default class View {
    static load() {
        View.loadButtons();
    }

    static loadButtons() {
        const addTaskButton = document.querySelector('.button-add-task');
        const addPageButton = document.querySelector('.button-add-page');

        addTaskButton.addEventListener("click", View.addTask);
        addPageButton.addEventListener("click", View.addPage);
    }

    // ------- MAIN DISPLAY -------

    static displayEmoji(emoji) {
        emojiElement.innerHTML = emoji;
    }

    static displayTitle(title) {
        titleElement.innerHTML = title;
    }
    
    static displayTaskList(tasklist) { 
        if(document.querySelector(".task-date"))
            document.querySelectorAll(".task-date").forEach(e => e._flatpickr.destroy());  // delete existing calenders  

        tasklistElement.innerHTML = '';
        tasklist.forEach(t => {
            tasklistElement.appendChild(View.createTaskElement(t));
        });

        flatpickr(".task-date", {
            onChange: View.editTaskDate,
            onOpen: View.setCalenderDate
        });
    }

    static displayPage(page) {
        pageIDElement.id = page.id;
        View.displayEmoji(page.emoji);
        View.displayTitle(page.title);
        View.displayTaskList(page.tasklist);
    }

    // ------- SIDEBAR DISPLAY -------

    static displayPageList(pageList) {
        pagelistElement.innerHTML = '';
        pageList.forEach(p => {
            pagelistElement.appendChild(View.createPageElement(p));
        });
    }

    // ------- CREATE ELEMENTS -------

    static createTaskElement(task) {
        let dueDateElement = '';

        if(task.dueDate){
            let dueDateFormatted = format(new Date(task.dueDate), 'LLL dd yyyy');
            dueDateElement = `<span class="task-date"><i class="fa-regular fa-calendar"></i>${dueDateFormatted}</span>`;
        }

        let taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.id = task.id;
        taskElement.innerHTML = `<input type="checkbox">
        <span class="task-title" contenteditable="true">${task.title}</span>
        ${dueDateElement}
        <div class="edit-container">
        <i class="fa-solid fa-ellipsis task-edit"></i>
        <ul class="edit-menu hidden">
        <li class="task-date"><i class="fa-regular fa-calendar"></i>Due Date</li>
        <li class="task-duplicate"><i class="fa-regular fa-clone"></i>Duplicate</li>    
        <li class="task-delete"><i class="fa-regular fa-trash-can"></i></i>Delete</li>
        </ul></div>`;
        
        if(task.isDone){
            taskElement.children[0].checked = true;
            taskElement.children[1].classList.add('checked');
        }
        
        taskElement.addEventListener("click", View.taskEvent);
        taskElement.querySelector(".task-title").addEventListener("keypress", View.enterKeyPress);
        
        return taskElement;
    }

    static createPageElement(page) {
        let pageElement = document.createElement('div');
        pageElement.classList.add('page');
        pageElement.id = page.id;
        pageElement.innerHTML = `<span class="page-emoji">${page.emoji}</span>
        <span>${page.title}</span>
        <i class="fa-solid fa-ellipsis page-edit"></i>`;

        pageElement.addEventListener("click", View.pageEvent);

        return pageElement;
    }

    // ------- MAIN EVENTS -------

    static taskEvent(e) {
        let taskID = e.target.closest(".task").id;

        if(e.target.matches("input")) { // on checkbox, toggle task.isDone, refresh view
            Controller.toggleTaskDone(pageIDElement.id, taskID);
        } 
        else if(e.target.matches(".task-title")) { // on title click, when unfocused update new task.title
            document.activeElement.onblur = function () {
                Controller.editTaskTitle(pageIDElement.id, taskID, e.target.innerHTML);
                console.log(e.target.innerHTML);
            }
            return;
        }  
        else if(e.target.matches(".task-edit")) { // on edit click, close other menus, show menu, when clicked elsewhere close menu
            document.querySelectorAll('.edit-menu').forEach(menu => {
                if(!menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                }
            });

            let menu = e.target.nextElementSibling;
            menu.classList.remove("hidden");
            
            window.onclick = function(e2) {
                if(e2 != e) {
                    menu.classList.add("hidden");
                }
            }
            return;
        } else if(e.target.matches(".task-duplicate")) { // on duplicate click, 
            Controller.duplicateTask(pageIDElement.id, taskID);
            console.log('dupe');
        } else if(e.target.matches(".task-delete")) { // on delete click, delete task, refresh view
            Controller.deleteTask(pageIDElement.id, taskID);
        } else {
            return;
        }
        
        console.log("task event");
        let page = Controller.getPage(pageIDElement.id);
        View.displayTaskList(page.tasklist);
    }

    static enterKeyPress(e){ // on enter, unfocus from editing title 
        if (e.key === 'Enter') {
            e.preventDefault();
            document.activeElement.blur();
        }
    }

    static addTask(e) { // on button, add task, refresh view
        Controller.addTask(pageIDElement.id);

        let page = Controller.getPage(pageIDElement.id);
        View.displayTaskList(page.tasklist);
    }

    static editTaskDate(selectedDates, dateStr, instance) { // on calender change, set task date, refresh view
        let taskID = instance.element.closest(".task").id;
        let dueDate = new Date(instance.selectedDates[0]);
        dueDate.setMinutes(dueDate.getMinutes() + dueDate.getTimezoneOffset());
        Controller.editTaskDate(pageIDElement.id, taskID, dueDate.toDateString());

        console.log("date change");

        let page = Controller.getPage(pageIDElement.id);
        View.displayTaskList(page.tasklist);
    }

    static setCalenderDate(selectedDates, dateStr, instance) { // on calender open, get task date, set calender date
        let taskID = instance.element.closest(".task").id;
        let dueDate = Controller.getTaskDate(pageIDElement.id, taskID);
        if(dueDate)
            instance.setDate(new Date(dueDate));
    }

    // ------- SIDEBAR EVENTS -------

    static pageEvent(e) {
        let pageID = e.target.closest(".page").id;

        if(e.target.matches(".page-edit")){

        } 
        else if(e.target.matches(".page-emoji")) {

        } 
        else { // on page click, display page
            let page = Controller.getPage(pageID);
            View.displayPage(page);
        }
    }

    static addPage(e) {
        
    }
}