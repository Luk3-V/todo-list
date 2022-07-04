export default class Page {
    constructor(title, emoji) {
        this._title = title;
        this._emoji = emoji;
        this._tasklist = [];
        this._id =  Math.random().toString(16).slice(2);
    }

    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }

    get emoji() {
        return this._emoji;
    }
    set emoji(emoji) {
        this._emoji = emoji;
    }

    get tasklist() {
        return this._tasklist;
    }
    set tasklist(tasklist) {
        this._tasklist = tasklist;
    }

    get id() {
        return this._id;
    }
}