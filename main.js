/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Page.js":
/*!*********************!*\
  !*** ./src/Page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\nclass Page {\r\n    constructor(title, emoji) {\r\n        this._title = title;\r\n        this._emoji = emoji;\r\n        this._tasklist = [];\r\n    }\r\n\r\n    get title() {\r\n        return this._title;\r\n    }\r\n    set title(title) {\r\n        this._title = title;\r\n    }\r\n\r\n    get emoji() {\r\n        return this._emoji;\r\n    }\r\n    set emoji(emoji) {\r\n        this._emoji = emoji;\r\n    }\r\n\r\n    get tasklist() {\r\n        return this._tasklist;\r\n    }\r\n    set tasklist(tasklist) {\r\n        this._tasklist = tasklist;\r\n    }\r\n\r\n    addTask(task) {\r\n        this._tasklist.push(task);\r\n    }\r\n\r\n    removeTask(task) {\r\n        \r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Page.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor(title, dueDate = null) {\r\n        this._title = title;\r\n        this._dueDate = dueDate;\r\n        this._id =  Math.random().toString(16).slice(2);\r\n        this._isDone = false;\r\n    }\r\n\r\n    get title() {\r\n        return this._title;\r\n    }\r\n    set title(title) {\r\n        this._title = title;\r\n    }\r\n\r\n    get dueDate() {\r\n        return this._dueDate;\r\n    }\r\n    set dueDate(dueDate) {\r\n        this._dueDate = dueDate;\r\n    }\r\n\r\n    get id() {\r\n        return this._id;\r\n    }\r\n\r\n    get isDone() {\r\n        return this._isDone;\r\n    }\r\n    set isDone(value){\r\n        this._isDone = value;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/Task.js?");

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\n/* main */\r\nconst emojiElement = document.querySelector('.emoji');\r\nconst titleElement = document.querySelector('.title');\r\nconst tasklistElement = document.querySelector('.tasklist');\r\nconst addPageButton = document.querySelector('.button-add-page');\r\n/*sidebar*/\r\nconst pagelistElement = document.querySelector('.pagelist');\r\n\r\nclass View {\r\n    constructor() {\r\n        \r\n    }\r\n\r\n    // --- MAIN ---\r\n\r\n    displayEmoji(emoji) {\r\n        emojiElement.innerHTML = emoji;\r\n    }\r\n\r\n    displayTitle(title) {\r\n        titleElement.innerHTML = title;\r\n    }\r\n    \r\n    displayTaskList(tasklist) {\r\n        tasklistElement.innerHTML = '';\r\n        tasklist.forEach(t => {\r\n            tasklistElement.appendChild(this.createTaskElement(t));\r\n        });\r\n    }\r\n\r\n    displayPage(page) {\r\n        this.displayEmoji(page.emoji);\r\n        this.displayTitle(page.title);\r\n        this.displayTaskList(page.tasklist);\r\n    }\r\n\r\n    // --- SIDEBAR ---\r\n\r\n    displayPageList(pageList) {\r\n        pagelistElement.innerHTML = '';\r\n        pageList.forEach(p => {\r\n            pagelistElement.appendChild(this.createPageElement(p));\r\n        });\r\n    }\r\n\r\n    // --- CREATE ELEMENTS ---\r\n\r\n    createTaskElement(task) {\r\n        let dueDateElement;\r\n        if(task.dueDate)\r\n            dueDateElement = '<i class=\"fa-regular fa-calendar\"></i>' + task.dueDate.toLocaleDateString(\"en-US\");\r\n        else   \r\n            dueDateElement = '';\r\n\r\n        const taskElement = document.createElement('div');\r\n        taskElement.classList.add('task');\r\n        taskElement.innerHTML = `<input type=\"checkbox\">\r\n        <span class=\"task-content\">${task.title}<span class=\"task-date\">${dueDateElement}</span></span>\r\n        <i class=\"fa-solid fa-ellipsis\"></i>`;\r\n        \r\n        return taskElement;\r\n    }\r\n\r\n    createPageElement(page) {\r\n        const pageElement = document.createElement('div');\r\n        pageElement.classList.add('page');\r\n        pageElement.innerHTML = `<span>${page.emoji}</span>\r\n        <span>${page.title}</span>\r\n        <i class=\"fa-solid fa-ellipsis\"></i>`;\r\n\r\n        return pageElement;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/View.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { default: Page } = __webpack_require__(/*! ./Page */ \"./src/Page.js\");\r\nconst { default: Task } = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\r\nconst { default: View } = __webpack_require__(/*! ./View */ \"./src/View.js\");\r\n\r\n\r\n/* -------------------------------------------*/\r\n\r\nconst page1 = new Page('page1', '🙂');\r\nconst page2 = new Page('page2', '🙃');\r\nconst date = new Date();\r\nconst task1 = new Task('task 1', date);\r\nconst task2 = new Task('task 2');\r\npage1.tasklist.push(task1);\r\npage1.tasklist.push(task2);\r\n\r\nconst view = new View();\r\n\r\nview.displayPage(page1);\r\n\r\nview.displayPageList([page1, page1])\r\n\r\n\r\n// TODO\r\n// switch page view\r\n// Add task button\r\n// Add project button\r\n// complete task\r\n// uncomplete task\r\n// delete task\r\n// delete project\r\n// edit task title\r\n// edit project title\r\n// edit emoji\r\n// add due date to task\r\n// add due date to project\r\n\r\n// move tasks\r\n// move projects\r\n// duplicate tasks\r\n// duplicate projects\r\n// task priority\r\n// sub tasks\r\n// project progress bar\r\n\r\n// Home tab\r\n// daily tasks\r\n// weekly tasks\r\n// all tasks\r\n// priority tasks\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;