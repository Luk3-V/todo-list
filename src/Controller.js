import Page from "./Page";
import Task from "./Task";


export default class Controller {
    // --- Storage ---

    static savePageList(pagelist) {
        localStorage.setItem("pagelist", JSON.stringify(pagelist));
    }

    static getPageList() {
        let pagelist = JSON.parse(localStorage.getItem('pagelist'));
        
        pagelist = pagelist.map(page => Object.assign(new Page(), page));
        pagelist.forEach(page => {
            page.tasklist = page.tasklist.map(task => Object.assign(new Task(), task));
        });

        return pagelist;
    }

    // --- Controls ----

    static addTask(pageID) {
        let pagelist = Controller.getPageList();
        let page = pagelist.find(page => page.id == pageID);
        page.tasklist.push(new Task());

        Controller.savePageList(pagelist);
    }

    static deleteTask(pageID, taskID) {
        let pagelist = Controller.getPageList();
        let page = pagelist.find(page => page.id == pageID);
        page.tasklist = page.tasklist.filter(task => {
            return task.id !== taskID;
        });

        Controller.savePageList(pagelist);
    }

    static duplicateTask(pageID, taskID) {
        let pagelist = Controller.getPageList();
        let page = pagelist.find(page => page.id == pageID);
        let taskIndex = page.tasklist.findIndex(task => task.id == taskID);
        page.tasklist.splice(taskIndex+1, 0, new Task(page.tasklist[taskIndex].title, page.tasklist[taskIndex].dueDate));

        Controller.savePageList(pagelist);
    }

    static toggleTaskDone(pageID, taskID) {
        let pagelist = Controller.getPageList();
        let page = pagelist.find(page => page.id == pageID);
        let task = page.tasklist.find(task => task.id == taskID);
        task.isDone = !task.isDone;

        Controller.savePageList(pagelist);
    }
    
    static editTaskTitle(pageID, taskID, title) {
        let pagelist = Controller.getPageList();
        let page = pagelist.find(page => page.id == pageID);
        let task = page.tasklist.find(task => task.id == taskID);
        task.title = title;

        Controller.savePageList(pagelist);
    }

    static editTaskDate(pageID, taskID, dueDate) {
        let pagelist = Controller.getPageList();
        let page = pagelist.find(page => page.id == pageID);
        let task = page.tasklist.find(task => task.id == taskID);
        task.dueDate = dueDate;

        Controller.savePageList(pagelist);
    }

    static getTaskDate(pageID, taskID) {
        let pagelist = Controller.getPageList();
        let page = pagelist.find(page => page.id == pageID);
        let task = page.tasklist.find(task => task.id == taskID);

        return task.dueDate;
    }

    static getPage(pageID) {
        let pagelist = Controller.getPageList();
        let page = pagelist.find(page => page.id == pageID);

        return page;
    }

    static addPage() {
        let pagelist = Controller.getPageList();
        pagelist.push(new Page());

        Controller.savePageList(pagelist);
    }

    static editPageTitle(pageID, title) {
        let pagelist = Controller.getPageList();
        let page = pagelist.find(page => page.id == pageID);
        page.title = title;

        Controller.savePageList(pagelist);
    }

    static editPageEmoji(pageID, emoji) {
        let pagelist = Controller.getPageList();
        let page = pagelist.find(page => page.id == pageID);
        page.emoji = emoji;

        Controller.savePageList(pagelist);
    }
}