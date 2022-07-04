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
        let dueDateElement;

        if(task.dueDate)
            dueDateElement = '<i class="fa-regular fa-calendar"></i>' + task.dueDate;
        else   
            dueDateElement = '';

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.id = task.id;
        taskElement.innerHTML = `<input type="checkbox">
        <span class="task-content">${task.title}<span class="task-date">${dueDateElement}</span></span>
        <i class="fa-solid fa-ellipsis"></i>`;

        taskElement.addEventListener("click", View.taskEvent);
        
        return taskElement;
    }

    static createPageElement(page) {
        const pageElement = document.createElement('div');
        pageElement.classList.add('page');
        pageElement.id = page.id;
        pageElement.innerHTML = `<span class="page-emoji">${page.emoji}</span>
        <span>${page.title}</span>
        <i class="fa-solid fa-ellipsis button-edit"></i>`;

        pageElement.addEventListener("click", View.pageEvent);

        return pageElement;
    }

    // --- MAIN EVENTS ---

    static taskEvent(e) {
        
    }

    static addTask(e) {
        Controller.addTask(pageIDElement.id);

        let page = Controller.getPage(pageIDElement.id);
        View.displayTaskList(page.tasklist);
    }

    // --- SIDEBAR EVENTS ---

    static pageEvent(e) {
        let pageID = e.target.closest(".page").id;

        if(e.target.matches(".button-edit")){

        } else if(e.target.matches(".page-emoji")) {

        } else {
            let page = Controller.getPage(pageID);
            View.displayPage(page);
        }
    }

    static addPage(e) {

    }
}