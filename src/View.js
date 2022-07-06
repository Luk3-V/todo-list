import Controller from "./Controller";

/* main */
const pageIDElement = document.querySelector('.page-id');
const emojiElement = document.querySelector('.emoji');
const titleElement = document.querySelector('.title');
const tasklistElement = document.querySelector('.tasklist');
/*sidebar*/
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

    // --- MAIN DISPLAY ---

    static displayEmoji(emoji) {
        emojiElement.innerHTML = emoji;
    }

    static displayTitle(title) {
        titleElement.innerHTML = title;
    }
    
    static displayTaskList(tasklist) {
        tasklistElement.innerHTML = '';
        tasklist.forEach(t => {
            tasklistElement.appendChild(View.createTaskElement(t));
        });
    }

    static displayPage(page) {
        pageIDElement.id = page.id;
        View.displayEmoji(page.emoji);
        View.displayTitle(page.title);
        View.displayTaskList(page.tasklist);
    }

    // --- SIDEBAR DISPLAY ---

    static displayPageList(pageList) {
        pagelistElement.innerHTML = '';
        pageList.forEach(p => {
            pagelistElement.appendChild(View.createPageElement(p));
        });
    }

    // --- CREATE ELEMENTS ---

    static createTaskElement(task) {
        let dueDateElement = '';

        if(task.dueDate)
            dueDateElement = '<span class="task-date"><i class="fa-regular fa-calendar"></i>' + task.dueDate + '</span>';

        let taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.id = task.id;
        taskElement.innerHTML = `<input type="checkbox">
        <span class="task-title" contenteditable="true">${task.title}</span>
        ${dueDateElement}
        <i class="fa-solid fa-ellipsis task-edit"></i>`;
        
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

    // --- MAIN EVENTS ---

    static taskEvent(e) {
        let taskID = e.target.closest(".task").id;

        if(e.target.matches("input")) {
            console.log("check");
            Controller.toggleTaskDone(pageIDElement.id, taskID);
        } else if(e.target.matches(".task-title")) {
            document.activeElement.onblur = function () {
                Controller.editTaskTitle(e.target.innerHTML, pageIDElement.id, taskID);
            }
        } else if(e.target.matches(".task-date")) {

        }  else if(e.target.matches(".task-edit")) {

        }

        let page = Controller.getPage(pageIDElement.id);
        View.displayTaskList(page.tasklist);
    }

    static enterKeyPress(e){
        if (e.key === 'Enter') {
            e.preventDefault();
            document.activeElement.blur();
        }
    }

    static addTask(e) {
        Controller.addTask(pageIDElement.id);

        let page = Controller.getPage(pageIDElement.id);
        View.displayTaskList(page.tasklist);
    }

    // --- SIDEBAR EVENTS ---

    static pageEvent(e) {
        let pageID = e.target.closest(".page").id;

        if(e.target.matches(".page-edit")){

        } else if(e.target.matches(".page-emoji")) {

        } else {
            let page = Controller.getPage(pageID);
            View.displayPage(page);
        }
    }

    static addPage(e) {

    }
}