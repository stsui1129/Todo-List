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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectclass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectclass */ \"./src/projectclass.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n\n\n\nconst domFunctions = (() => {\n    const toggleModal = () => {\n        const modal = document.querySelector('.todo-modal');\n        modal.classList.toggle(\"show-modal\");\n    }\n\n    const trigger = document.querySelector('.trigger');\n    trigger.addEventListener(\"click\", toggleModal);\n\n        \n    const closeButton = document.querySelector(\".close-button\");\n    closeButton.addEventListener(\"click\", toggleModal);\n \n   \n    const addProjectButton = document.querySelector(\"#add-button\");\n    addProjectButton.addEventListener(\"click\", (event)=> {\n        addNewProject(); \n        event.preventDefault();\n        document.getElementById('project-form').reset();\n    });\n\n    const projectBtns = document.querySelector(\".project-content\");\n    projectBtns.addEventListener('click', (e) => {\n        toggleProject();\n        e.target.classList.toggle(\"selected\");\n        (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.populateStorage)();\n        const allTodo = document.querySelectorAll(\".todo-div\"); // if todo dataid == selected project's datakey, then remove hidden\n        allTodo.forEach((todo) => {\n            todo.dataset.id == e.target.dataset.key? todo.classList.remove(\"hidden\") : todo.classList.add(\"hidden\");   \n        })\n    });\n    \n    const toggleProject = () => {\n        const allProjectBtns = document.querySelectorAll(\"[data-key]\");\n        allProjectBtns.forEach(project => {\n            if (project.classList.contains(\"selected\")) { // makes selected project unselected when another project is clicked\n                project.classList.toggle(\"selected\");\n            }\n        })  \n    }\n\n    const formReset = () => {\n        const formCreate = document.getElementById('form-create');\n        formCreate.reset();\n    }\n\n    document.getElementById('form-create').addEventListener(\"submit\", e => { //submit eventlistener must be attached to form\n            addTodoToProject();\n            renderTodo();   \n            toggleModal();\n            e.preventDefault();\n            formReset();   \n        });\n\n    const toggleEditModal = () => {\n        const editModal = document.querySelector(\".todo-modal-edit\");\n        editModal.classList.toggle(\"show-modal\");\n    }\n\n    const closeEditButton = document.querySelector(\".close-button-edit\");\n    closeEditButton.addEventListener(\"click\", toggleEditModal); \n\n    const editTodo = (e) => {\n        const selectedProjectBtn = document.querySelector(\".selected\");\n        const selectedProject = _projectclass__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(project => project.id == selectedProjectBtn.dataset.key);\n        let currentTodo = selectedProject.todoList.find(todo => todo.id == e.target.parentNode.id); // todo.id same as tododiv.id\n        // need to use let because we are redefining variable later\n        let currentTodoDiv = e.target.parentNode;\n        \n        document.getElementById('form-edit').addEventListener(\"submit\", e => {\n            // console.log(currentTodo);\n            const title = document.getElementById(\"edit-title\").value;\n            const description = document.getElementById(\"edit-description\").value;\n            const dueDate = document.getElementById(\"edit-due-date\").value;\n            const priority = document.querySelector('input[name=\"edit-priority\"]:checked').value; \n\n            if (currentTodo && currentTodoDiv) { // this fixes the 'cannot read property of null' error\n                    currentTodo.editThisTodo(title, description, dueDate, priority);\n                \n                    if (currentTodo.priority === \"High\") {\n                        currentTodoDiv.style.background = \"red\";\n                    }\n                    if (currentTodo.priority === \"Medium\") {\n                        currentTodoDiv.style.background = \"orange\";\n                    }\n                    if (currentTodo.priority === \"Low\") {\n                        currentTodoDiv.style.background = \"lime\";\n                    }\n            \n                    currentTodoDiv.childNodes[0].textContent = title; //childNodes[0] = titleDiv etc...\n                    currentTodoDiv.childNodes[2].textContent = dueDate;\n                }\n\n            currentTodo = null; //need to reset this as everytime edit button is clicked, there's more than 1 currentTodo\n            currentTodoDiv = null;\n            const editModal = document.querySelector(\".todo-modal-edit\");\n            editModal.classList.remove(\"show-modal\");\n            e.preventDefault();    \n        })\n\n        ;(0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.populateStorage)();\n    }\n\n    document.addEventListener('click', (e) => {\n        if (e.target.className === \"edit-button\"){ // edit button eventlistener\n            toggleEditModal();\n            editTodo(e);\n        }\n        if (e.target.className === \"delete-button\") { // delete button eventlistener\n            e.target.parentNode.remove();\n\n            const selectedProjectBtn = document.querySelector(\".selected\");\n            const selectedProject = _projectclass__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(project => project.id == selectedProjectBtn.dataset.key);\n\n            const currentIndex = selectedProject.todoList.findIndex(todo => todo.id == e.target.parentNode.id);\n            // finds index of current todo in selected project array and splice it out\n            selectedProject.todoList.splice(currentIndex, 1);   \n\n            (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.populateStorage)();\n        }\n    })\n   \n    const renderTodo = (addedTodo) => {\n        const todoContent = document.querySelector(\".todo-content\");\n        const todoDiv = document.createElement(\"div\");\n        const titleDiv = document.createElement(\"div\");\n        const descriptionDiv = document.createElement(\"div\");\n        const dueDateDiv = document.createElement(\"div\");\n        const editButton = document.createElement(\"button\");\n        const deleteButton = document.createElement(\"button\");\n        todoContent.appendChild(todoDiv);\n        todoDiv.appendChild(titleDiv);\n        todoDiv.appendChild(descriptionDiv);\n        todoDiv.appendChild(dueDateDiv);\n        todoDiv.appendChild(editButton);\n        todoDiv.appendChild(deleteButton);\n\n        const selectedProjectBtn = document.querySelector(\".selected\");\n        const selectedProject = _projectclass__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(project => project.id == selectedProjectBtn.dataset.key);\n        \n        addedTodo = selectedProject.todoList[selectedProject.todoList.length-1];\n        // newly added todo is always the last element of the array\n        titleDiv.textContent = addedTodo.title; \n        \n        dueDateDiv.textContent = addedTodo.dueDate;\n        editButton.textContent = \"Edit details\";\n\n        deleteButton.textContent = \"Delete\";\n\n        if (addedTodo.priority === \"High\") {\n            todoDiv.style.background = \"red\";\n        }\n        if (addedTodo.priority === \"Medium\") {\n            todoDiv.style.background = \"orange\";\n        }\n        if (addedTodo.priority === \"Low\") {\n            todoDiv.style.background = \"lime\";\n        }\n        \n        todoDiv.classList.add(\"todo-div\");\n        todoDiv.setAttribute(\"id\", addedTodo.id);\n        todoDiv.setAttribute(\"data-id\", document.querySelector(\".selected\").dataset.key);\n        titleDiv.classList.add(\"title-div\");\n        descriptionDiv.classList.add(\"description-div\");\n        dueDateDiv.classList.add(\"due-date-div\");\n        editButton.classList.add(\"edit-button\");\n        deleteButton.classList.add(\"delete-button\");\n    }\n\n    const addTodoToProject = () => {\n        const title = document.getElementById(\"title\").value;\n        const description = document.getElementById(\"description\").value;\n        const dueDate = document.getElementById(\"due-date\").value;\n        const priority = document.querySelector('input[name=\"priority\"]:checked').value;\n        \n        const selectedProjectBtn = document.querySelector(\".selected\");\n        const selectedProject = _projectclass__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(project => project.id == selectedProjectBtn.dataset.key);\n        selectedProject.addTodo(Date.now(), title, description, dueDate, priority); // Date.now() gives random number\n\n        (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.populateStorage)();\n    }\n\n    const addNewProject = () => {\n        const projectTitle = document.getElementById(\"project-title\").value;\n        \n        if (_projectclass__WEBPACK_IMPORTED_MODULE_0__.myProjects.some(x => x._title === projectTitle) === false && projectTitle !== \"\") { //if project title does not exist & not empty\n        const project = new _projectclass__WEBPACK_IMPORTED_MODULE_0__.Project (Date.now(), projectTitle, [], false);\n        \n        project.addToProjects();\n        renderProject(project);\n        }\n\n        (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.populateStorage)();\n    }\n\n    const renderProject = (project) => {\n        const projectContent = document.querySelector(\".project-content\");\n        const projectDiv = document.createElement(\"div\");\n        const removeBtn = document.createElement(\"button\");\n        removeBtn.addEventListener(\"click\", () => {\n            projectDiv.remove();\n            project.deleteProject();\n        })\n\n        projectDiv.classList.add(\"project-div\");\n        projectDiv.textContent = project._title;\n        removeBtn.classList.add(\"remove-project\");\n        removeBtn.textContent = \"delete\";\n        projectDiv.setAttribute(\"data-key\", project.id); \n        projectContent.appendChild(projectDiv);\n        projectDiv.appendChild(removeBtn);\n    } \n    \n    return {renderTodo, renderProject}; //only functions used elsewhere\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domFunctions);\n\n//# sourceURL=webpack://todo-list/./src/domfunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectclass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectclass */ \"./src/projectclass.js\");\n/* harmony import */ var _domfunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domfunctions */ \"./src/domfunctions.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n\n\n\n\nconst defaultProject = new _projectclass__WEBPACK_IMPORTED_MODULE_0__.Project (234, \"default project\", []);\ndefaultProject.addToProjects();\n\n// console.log(defaultProject.todoList);\n// console.log(myProjects);\n\n_domfunctions__WEBPACK_IMPORTED_MODULE_1__.default.renderProject(defaultProject);\ndocument.querySelector(\"[data-key='234']\").classList.add(\"selected\");\n\n// retrieveData();\nlocalStorage.clear();\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateStorage\": () => (/* binding */ populateStorage),\n/* harmony export */   \"retrieveData\": () => (/* binding */ retrieveData)\n/* harmony export */ });\n/* harmony import */ var _domfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domfunctions */ \"./src/domfunctions.js\");\n/* harmony import */ var _projectclass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectclass */ \"./src/projectclass.js\");\n\n\n\nfunction populateStorage() {\n    localStorage.setItem(\"myProjects\", JSON.stringify(_projectclass__WEBPACK_IMPORTED_MODULE_1__.myProjects)); //projects being stored in key called \"myProjects\"\n    localStorage.setItem(\"selectedProjectID\", document.querySelector(\".selected\").dataset.key);\n};\n\nfunction retrieveData() {\n    if(!localStorage[\"myProjects\"]) {\n        populateStorage();\n    } else {\n        let retrievedData = localStorage.getItem(\"myProjects\"); //get data string\n        let storedProjects = JSON.parse(retrievedData); //parse into array\n        let selectedProjectID = localStorage.getItem(\"selectedProjectID\");\n        let currentProject = _projectclass__WEBPACK_IMPORTED_MODULE_1__.myProjects.find(project => project.id == selectedProjectID);\n        storedProjects.forEach(project => _domfunctions__WEBPACK_IMPORTED_MODULE_0__.default.renderProject(project));\n        storedProjects.forEach(project => {\n            project.todoList.forEach(todo => _domfunctions__WEBPACK_IMPORTED_MODULE_0__.default.renderTodo(todo))\n        });\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/localstorage.js?");

/***/ }),

/***/ "./src/projectclass.js":
/*!*****************************!*\
  !*** ./src/projectclass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myProjects\": () => (/* binding */ myProjects),\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todoclass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoclass */ \"./src/todoclass.js\");\n\n\nlet myProjects = [];\n\nclass Project {\n    constructor(id, title, []) {\n        this.id = id;\n        this.title = title;\n        this.todoList = [];\n    }\n    \n    set title(newTitle) {\n        this._title = newTitle; // this.title = newTitle leads to infinite recursion\n    }\n\n    addTodo(id, title, description, dueDate, priority) {\n        const newTodo = new _todoclass__WEBPACK_IMPORTED_MODULE_0__.default(id, title, description, dueDate, priority);\n        this.todoList.push(newTodo);\n    }\n\n    addToProjects() {  \n        myProjects.push(this);\n    }\n\n    deleteProject() {\n        myProjects.splice(myProjects.indexOf(this), 1);\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectclass.js?");

/***/ }),

/***/ "./src/todoclass.js":
/*!**************************!*\
  !*** ./src/todoclass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n    constructor(id, title, description, dueDate, priority) {\n        this.id = id;\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n\n    editThisTodo(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/todoclass.js?");

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