/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domfunctions.js":
/*!*****************************!*\
  !*** ./src/domfunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\nconst domFunctions = (() => {\n    const toggleModal = () => {\n        const modal = document.querySelector('.todo-modal');\n        modal.classList.toggle(\"show-modal\"); //toggles between .todo-modal class and .show-modal class\n    }\n\n    \n\n    const trigger = document.querySelector('.trigger');\n    trigger.addEventListener(\"click\", toggleModal);\n\n        \n    const closeButton = document.querySelector(\".close-button\");\n    closeButton.addEventListener(\"click\", toggleModal);\n \n   \n    const addProjectButton = document.querySelector(\"#add-button\");\n    addProjectButton.addEventListener(\"click\", (event)=> {\n        addNewProject(); \n        event.preventDefault();\n        document.getElementById('project-form').reset();\n    });\n\n    const projectBtns = document.querySelector(\".project-content\");\n    projectBtns.addEventListener('click', (e) => {\n        toggleProject();\n        e.target.classList.toggle(\"selected\");\n        // myProjects.find(project => project.id == e.target.dataset.key) //find the project where project.id = e.targetdatakey\n        \n        const allTodo = document.querySelectorAll(\".todo-div\");\n        allTodo.forEach((todo) => {\n            todo.dataset.id == e.target.dataset.key? todo.classList.remove(\"hidden\") : todo.classList.add(\"hidden\");   \n        })\n    });\n   \n    //when selected project clicked, go thru project.todolist and toggle classlist.\n\n\n    \n    const toggleProject = () => {\n        const allProjectBtns = document.querySelectorAll(\"[data-key]\");\n        allProjectBtns.forEach(project => {\n            if (project.classList.contains(\"selected\")) {\n                project.classList.toggle(\"selected\");\n            }\n        })\n    }\n\n    \n    \n\n    const formReset = () => {\n        const form = document.getElementById('form');\n        form.reset();\n    }\n\n    \n        const submitButton = document.querySelector(\"#submit-button\");\n        submitButton.addEventListener(\"click\", e => {\n            addTodoToProject();\n            renderTodo();\n            toggleModal();\n            e.preventDefault();\n            formReset();\n        });\n  \n        \n    const renderTodo = () => {\n        const todoContent = document.querySelector(\".todo-content\");\n        const todoDiv = document.createElement(\"div\");\n        const titleDiv = document.createElement(\"div\");\n        const descriptionDiv = document.createElement(\"div\");\n        const dueDateDiv = document.createElement(\"div\");\n        const priorityDiv = document.createElement(\"div\");\n        todoContent.appendChild(todoDiv);\n        todoDiv.appendChild(titleDiv);\n        todoDiv.appendChild(descriptionDiv);\n        todoDiv.appendChild(dueDateDiv);\n        todoDiv.appendChild(priorityDiv);\n\n        const selectedProjectBtn = document.querySelector(\".selected\");\n        const selectedProject = _project__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(project => project.id == selectedProjectBtn.dataset.key);\n        \n        \n        titleDiv.textContent = selectedProject.todoList[selectedProject.todoList.length-1].title; \n        // descriptionDiv.textContent = selectedProject.todoList[selectedProject.todoList.length-1].description;\n       \n        \n        \n\n        todoDiv.classList.add(\"todo-div\");\n        todoDiv.setAttribute(\"data-id\", document.querySelector(\".selected\").dataset.key);\n        titleDiv.classList.add(\"title-div\");\n        descriptionDiv.classList.add(\"description-div\");\n        dueDateDiv.classList.add(\"due-date-div\");\n        priorityDiv.classList.add(\"priority-div\");\n    }\n\n    const addTodoToProject = () => {\n        const title = document.getElementById(\"title\").value;\n        const description = document.getElementById(\"description\").value;\n        const dueDate = document.getElementById(\"due-date\").value;\n        const priority = document.querySelector('input[name=\"priority\"]:checked').value;\n        \n        const selectedProjectBtn = document.querySelector(\".selected\");\n        const selectedProject = _project__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(project => project.id == selectedProjectBtn.dataset.key);\n        selectedProject.addTodo(Date.now(), title, description, dueDate, priority);\n    }\n\n    const addNewProject = () => {\n        const projectTitle = document.getElementById(\"project-title\").value;\n        \n        if (_project__WEBPACK_IMPORTED_MODULE_0__.myProjects.some(x => x._title === projectTitle) === false && projectTitle !== \"\") { //if project title does not exist & not empty\n        const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project (Date.now(), projectTitle, [], false);\n        \n        project.addToProjects();\n        renderProject(project);\n        }\n    }\n\n    const renderProject = (project) => {\n        const projectContent = document.querySelector(\".project-content\");\n        const projectDiv = document.createElement(\"div\");\n        const removeBtn = document.createElement(\"button\");\n        removeBtn.addEventListener(\"click\", () => {\n            projectDiv.remove();\n            _project__WEBPACK_IMPORTED_MODULE_0__.myProjects.splice(_project__WEBPACK_IMPORTED_MODULE_0__.myProjects.indexOf(project), 1);\n        })\n\n        projectDiv.classList.add(\"project-div\");\n        projectDiv.textContent = project._title;\n        removeBtn.classList.add(\"remove-project\");\n        removeBtn.textContent = \"delete\";\n        projectDiv.setAttribute(\"data-key\", project.id);\n        projectContent.appendChild(projectDiv);\n        projectDiv.appendChild(removeBtn);\n    } \n    \n\n    const renderAllProjects = () => {\n        for (let i=0; i< _project__WEBPACK_IMPORTED_MODULE_0__.myProjects.length; i++) {\n            renderProject(_project__WEBPACK_IMPORTED_MODULE_0__.myProjects[i]);\n\n        }\n    }\n\n    return {toggleModal, formReset, renderTodo, addTodoToProject, addNewProject, renderProject, renderAllProjects};\n\n})();\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domFunctions);\n\n//# sourceURL=webpack://todo-list/./src/domfunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _domfunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domfunctions */ \"./src/domfunctions.js\");\n\n\n\n\n\n\n\nconst defaultProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project (234, \"default project\", []);\ndefaultProject.addToProjects();\n\nconsole.log(defaultProject.todoList);\nconsole.log(_project__WEBPACK_IMPORTED_MODULE_0__.myProjects);\n\n_domfunctions__WEBPACK_IMPORTED_MODULE_2__.default.renderAllProjects();\ndocument.querySelector(\"[data-key='234']\").classList.add(\"selected\");\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myProjects\": () => (/* binding */ myProjects),\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nlet myProjects = [];\n\nclass Project {\n    constructor(id, title, []) {\n        this.id = id;\n        this.title = title;\n        this.todoList = [];\n    }\n    \n    set title(newTitle) {\n        this._title = newTitle; // this.title = newTitle leads to infinite recursion\n    }\n\n    addTodo(title, description, dueDate, priority) {\n        const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.default(title, description, dueDate, priority);\n        this.todoList.push(newTodo);\n    }\n\n    addToProjects() {  \n        myProjects.push(this);\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n    constructor(id, title, description, dueDate, priority) {\n        this.id = id;\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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