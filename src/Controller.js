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

    static toggleTaskDone(pageID, taskID) {
        let pagelist = Controller.getPageList();
        let page = pagelist.find(page => page.id == pageID);
        let task = page.tasklist.find(task => task.id == taskID);
        task.isDone = !task.isDone;

        Controller.savePageList(pagelist);
    }

    static editTaskTitle(title, pageID, taskID) {
        let pagelist = Controller.getPageList();
        let page = pagelist.find(page => page.id == pageID);
        let task = page.tasklist.find(task => task.id == taskID);
        task.title = title;

        Controller.savePageList(pagelist);
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
}