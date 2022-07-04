/* main */
const emojiElement = document.querySelector('.emoji');
const titleElement = document.querySelector('.title');
const tasklistElement = document.querySelector('.tasklist');
const addPageButton = document.querySelector('.button-add-page');
/*sidebar*/
const pagelistElement = document.querySelector('.pagelist');

export default class View {
    constructor() {
        
    }

    // --- MAIN ---

    displayEmoji(emoji) {
        emojiElement.innerHTML = emoji;
    }

    displayTitle(title) {
        titleElement.innerHTML = title;
    }
    
    displayTaskList(tasklist) {
        tasklistElement.innerHTML = '';
        tasklist.forEach(t => {
            tasklistElement.appendChild(this.createTaskElement(t));
        });
    }

    displayPage(page) {
        this.displayEmoji(page.emoji);
        this.displayTitle(page.title);
        this.displayTaskList(page.tasklist);
    }

    // --- SIDEBAR ---

    displayPageList(pageList) {
        pagelistElement.innerHTML = '';
        pageList.forEach(p => {
            pagelistElement.appendChild(this.createPageElement(p));
        });
    }

    // --- CREATE ELEMENTS ---

    createTaskElement(task) {
        let dueDateElement;
        if(task.dueDate)
            dueDateElement = '<i class="fa-regular fa-calendar"></i>' + task.dueDate.toLocaleDateString("en-US");
        else   
            dueDateElement = '';

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `<input type="checkbox">
        <span class="task-content">${task.title}<span class="task-date">${dueDateElement}</span></span>
        <i class="fa-solid fa-ellipsis"></i>`;
        
        return taskElement;
    }

    createPageElement(page) {
        const pageElement = document.createElement('div');
        pageElement.classList.add('page');
        pageElement.innerHTML = `<span>${page.emoji}</span>
        <span>${page.title}</span>
        <i class="fa-solid fa-ellipsis"></i>`;

        return pageElement;
    }
}