export default class Task {
    constructor(title = '', dueDate = null) {
        this._title = title;
        this._dueDate = dueDate;
        this._isDone = false;
        this._id =  Math.random().toString(16).slice(2);
    }

    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }

    get dueDate() {
        return this._dueDate;
    }
    set dueDate(dueDate) {
        this._dueDate = dueDate;
    }

    get isDone() {
        return this._isDone;
    }
    set isDone(value){
        this._isDone = value;
    }

    get id() {
        return this._id;
    }
}