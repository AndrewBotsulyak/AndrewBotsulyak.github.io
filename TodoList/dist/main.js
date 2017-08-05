/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTodoElement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todoListItem__ = __webpack_require__(1);


const PLACEHOLDER_TITLE = 'Тема заметок...';
const PLACEHOLDER_INPUT = 'Заметка...';
function createTodoElement() {
    const div = document.createElement('div');
    div.classList.add('todo');
    div.innerHTML = `
		<form action="" class="todo-form">
			<div class="delete-todo">×</div>
			<div class='wrap-title-input input' tabindex='1'>		
				<input type='text' class='title' />
				<label class='title-label'>${PLACEHOLDER_TITLE}</label>			
			</div>
			<div class='wrap-main-input input'>
				<input type='text' class='main-input' />
				<label class='main-input-label'>${PLACEHOLDER_INPUT}</label>
			</div>
			<input type="submit" class="add-item btn mat-elevation-2dp" value="Add" />
			<button type='button' class="clearAll btn mat-elevation-2dp">Clear</button>
		</form>
		<ul class="todo-list">
		</ul>
	`;
    return div;
}

/**
 * Class represents TodoList.
 * @param {HTMLElement} todo - DOMElement wrap of ToDo.
 *
 * @property {HTMLElement} todoElem - DOM Element container of ToDo App.
 * @property {HTMLElement} input - text field for creating new todo.
 * @property {HTMLElement} add - adding todo in list (<ul>).
 * @property {HTMLElement} ul - container of TodoListItems (<li>).
 * @property {Array} arrItems - array with TodoListItems.
 */
class TodoList {
    constructor(todo = null, title = '', arrItems = []) {
        this.todoElem = todo;
        this.input = this.todoElem.querySelector('.main-input');
        this.add = this.todoElem.querySelector('.add-item');
        this.ul = this.todoElem.querySelector('.todo-list');
        this.clearList = this.todoElem.querySelector('.clearAll');
        this.titleElem = this.todoElem.querySelector('.title');
        this.deleteTodo = this.todoElem.querySelector('.delete-todo');
        this.wrapInput = this.todoElem.querySelector('.wrap-title-input');
        this.labelMain = this.todoElem.querySelector('.main-input-label');
        this.wrapMainInput = this.todoElem.querySelector('.wrap-main-input');
        this.label = this.todoElem.querySelector('.title-label');
        this.setTitle(title);
        this.title = title;
        this.arrItems = [];
        this.parent = (() => {
            let build = this.todoElem.parentElement;
            while (!build.classList.contains('content-canvas')) {
                build = build.parentElement;
            }
            return build;
        })();
        this.state = {
            title: title,
            arrItems
        };
        this.deleteTodo.addEventListener('click', (event) => this.onRemove(event));
        this.titleElem.addEventListener('keyup', (event) => this.onType(event));
        this.wrapInput.addEventListener('click', (event) => {
            if (event.target == this.titleElem || event.target == this.label) {
                if (!this.title) {
                    this.titleElem.focus(); // focus title
                    this.animLabel(true, 'label'); // add effects for label
                    this.wrapInput.classList.add('input-line'); // border effect
                }
            }
        });
        this.titleElem.addEventListener('focusout', (event) => {
            if (!this.title) {
                this.animLabel(false, 'label'); // reverse label effect 
            }
            this.wrapInput.classList.remove('input-line'); // remove border effect
        });
        //	subscribe on TodoListItem's 'closeItem' event
        this.ul.addEventListener('closeItem', (event) => this.onDeleteItem(event));
        this.todoElem.addEventListener('submit', (event) => this.onAddItem(event));
        this.clearList.addEventListener('click', (event) => this.clearAll(event));
        this.wrapMainInput.addEventListener('click', (event) => {
            if (event.target == this.labelMain || event.target == this.input) {
                if (!this.input.value) {
                    this.input.focus();
                    this.animLabel(true, 'labelMain');
                    this.wrapMainInput.classList.add('input-line');
                }
            }
        });
        this.input.addEventListener('focusout', (event) => {
            if (!this.input.value) {
                this.animLabel(false, 'labelMain');
            }
            this.wrapMainInput.classList.remove('input-line');
        });
    }
    setTitle(text) {
        if (text) {
            this.animLabel(true, 'label');
            this.titleElem.value = text;
            this.title = text;
        }
    }
    animLabel(flag, elem) {
        if (flag) {
            this[elem].classList.add('label-move');
        }
        else {
            this[elem].classList.remove('label-move');
        }
    }
    setState(newState) {
        this.state = Object.assign({}, this.state, newState);
        this.dispStateChangeEvent();
    }
    onRemove(event) {
        let closeEvent = new CustomEvent('TodoList.remove', {
            bubbles: true,
            cancelable: true,
            detail: {
                item: this
            }
        });
        this.todoElem.dispatchEvent(closeEvent);
        this.parent.removeChild(this.todoElem);
    }
    onType(event) {
        this.title = this.titleElem.value;
        this.setState({ title: this.title });
    }
    dispStateChangeEvent() {
        const stateEvent = new CustomEvent('todostatechange', {
            bubbles: true,
            detail: {
                item: this,
                state: this.state
            }
        });
        this.todoElem.dispatchEvent(stateEvent);
    }
    createFromStorage() {
        this.state.arrItems.forEach(el => {
            const newElem = this.ul.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__todoListItem__["a" /* createItemElement */])());
            const objItem = new __WEBPACK_IMPORTED_MODULE_0__todoListItem__["b" /* default */](newElem, el.checked, el.content);
            this.arrItems.push(objItem);
        });
    }
    onAddItem(event) {
        event.preventDefault();
        if (!this.isInputEmpty()) {
            const newElem = this.ul.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__todoListItem__["a" /* createItemElement */])());
            const objItem = new __WEBPACK_IMPORTED_MODULE_0__todoListItem__["b" /* default */](newElem, null, this.input.value);
            this.arrItems.push(objItem);
            this.setState({ arrItems: this.arrItems.map(el => el.state) });
        }
    }
    isInputEmpty() {
        return (this.input.value) ? false : true;
    }
    /**
     * @param {Object} obj - obj with styles
     */
    setStyle(obj) {
        for (let prop in obj) {
            this.todoElem.style[prop] = obj[prop];
        }
    }
    onDeleteItem(event) {
        const elem = event.detail.item;
        this.arrItems = this.arrItems.filter(el => el !== elem);
        this.setState({ arrItems: this.arrItems.map(el => el.state) });
    }
    // clear list of items
    clearAll(event) {
        if (this.arrItems.length !== 0) {
            this.arrItems.forEach(elem => elem.remove());
            this.arrItems = [];
            this.setState({ arrItems: [] });
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = TodoList;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createItemElement; });
function createItemElement() {
    const li = document.createElement('li');
    li.classList.add('todo-list--item');
    li.innerHTML = `
		<label class='check-label'>
			<input type="checkbox" class='check' />
		</label>
		<div class="edit-input" contenteditable="false" ></div>
		<div class="edit"></div>
		<div class="delete">×</div>
	`;
    return li;
}

/**
 * Class represents TodoListItem.
 * @param {HTMLElement} item - DOM Element (<li>).
 *
 * @property {HTMLElement} item - <li>.
 * @property {HTMLElement} delete - delete <li>.
 * @property {HTMLElement} check - checkbox inside <li>.
 * @property {HTMLElement} editElem -  btn for edit input
 */
class TodoListItem {
    constructor(item = null, checked = false, content = '') {
        this.itemElem = item;
        this.input = this.itemElem.querySelector('.edit-input');
        this.delete = this.itemElem.querySelector('.delete');
        this.check = this.itemElem.querySelector('.check');
        this.editElem = this.itemElem.querySelector('.edit');
        this.labelElem = this.itemElem.querySelector('.check-label');
        this.parent = (() => {
            let todo = this.itemElem.parentElement;
            while (!todo.classList.contains('todo-list')) {
                todo = todo.parentElement;
            }
            return todo;
        })();
        this.state = {
            checked: checked,
            content
        };
        this.setValue(content);
        this.setChecked(checked);
        // create Custom Event
        this.input.addEventListener('keyup', (event) => this.onType(event));
        this.editElem.addEventListener('click', (event) => this.onEdit(event));
        this.check.addEventListener('click', (event) => this.ClickCheckbox(event));
        this.delete.addEventListener('click', (event) => this.onDelete(event));
    }
    onType(event) {
        this.setState({ content: this.input.textContent });
    }
    dispStateChangeEvent() {
        const stateEvent = new CustomEvent('todostatechange', {
            bubbles: true,
            detail: {
                item: this,
                state: this.state
            }
        });
        this.itemElem.dispatchEvent(stateEvent);
    }
    setState(newState) {
        this.state = Object.assign({}, this.state, newState);
        this.dispStateChangeEvent();
    }
    ClickCheckbox(event) {
        if (this.isEditable())
            this.toggleEdit();
        if (this.isChecked()) {
            this.input.style.textDecoration = 'line-through';
            this.setEditable(false);
            this.labelElem.classList.add('check-label-active');
        }
        else {
            this.input.style.textDecoration = 'none';
            this.labelElem.classList.remove('check-label-active');
        }
        this.setState({ checked: this.isChecked() });
    }
    isChecked() {
        return this.check.checked;
    }
    setChecked(flag) {
        this.check.checked = flag;
        if (flag) {
            this.input.style.textDecoration = 'line-through';
            this.setEditable(false);
            this.labelElem.classList.add('check-label-active');
        }
        else {
            this.input.style.textDecoration = 'none';
            this.labelElem.classList.remove('check-label-active');
        }
    }
    setEditable(flag) {
        if (flag) {
            this.input.contentEditable = 'true';
        }
        else {
            this.input.contentEditable = 'false';
        }
    }
    isEditable() {
        return this.input.contentEditable === 'true';
    }
    toggleEdit() {
        if (!this.isEditable()) {
            this.setEditable(true);
            this.input.style.outline = 'auto 5px rgb(77, 144, 254)';
        }
        else {
            this.setEditable(false);
            this.input.style.outline = 'none';
        }
    }
    // click on 'this.editElem' callback
    onEdit(event) {
        if (this.isChecked())
            return;
        this.toggleEdit();
    }
    // click on 'this.delete' callback, dispatch 'closeItem' event.
    onDelete(event) {
        let closeEvent = new CustomEvent('closeItem', {
            bubbles: true,
            cancelable: true,
            detail: {
                item: this
            }
        });
        this.itemElem.dispatchEvent(closeEvent);
        this.remove();
    }
    remove() {
        this.parent.removeChild(this.itemElem);
        return this;
    }
    getItem() {
        return this.itemElem;
    }
    /**
     * @param {Object} obj - obj with styles
     */
    setStyle(obj) {
        for (let prop in obj) {
            this.itemElem.style[prop] = obj[prop];
        }
    }
    /**
     * @param {string} text - input value.
     */
    setValue(text = '') {
        this.input.textContent = text;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = TodoListItem;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_todo_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_todo_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_todo_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_todo_list_todo_list_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_todo_list_todo_list_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_todo_list_todo_list_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_todo_list_item_todo_list_item_scss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_todo_list_item_todo_list_item_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scss_todo_list_item_todo_list_item_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scss_toolbar_scss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scss_toolbar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__scss_toolbar_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_buttons_scss__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scss_buttons_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__scss_buttons_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_todoBuilder__ = __webpack_require__(9);







const container = document.querySelector('.content-canvas');
const build = new __WEBPACK_IMPORTED_MODULE_6__js_todoBuilder__["a" /* default */](container);
start();
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/TodoList/sw.js') ///TodoList/sw.js
        .then((reg) => {
        console.log(`Registration succeeded. Scope is ${reg.scope}`);
    })
        .catch(err => {
        console.log(`Registration is failed ${err}`);
    });
}
function start() {
    if (build.hasLocalStorage()) {
        build.createTodoFromStorage();
    }
    else {
        build.createTodo();
    }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todoList__ = __webpack_require__(0);


/**
 * class create all TodoLists
 * @param {HTMLElement} container - DOMElement container of TodoLists.
 *
 * @property {HTMLElement} containerElem - DOMElement container of TodoLists.
 * @property {Array} todosArr - array with all TodoLists.
 * @property {HTMLElement} btnAddTodo - btn which is added new TodoList.
 */
class TodoBuilder {
    constructor(container) {
        this.containerElem = container;
        this.todosArr = [];
        this.btnAddTodo = document.querySelector('.build-todo');
        this.state = {
            todosArr: []
        };
        this.btnAddTodo.addEventListener('click', (event) => this.onBuild(event));
        this.containerElem.addEventListener('TodoList.remove', (event) => this.removeTodo(event));
        this.containerElem.addEventListener('todostatechange', (event) => this.updateStorage(event));
    }
    updateStorage(event) {
        this.state.todosArr.forEach((todo, index) => {
            todo.arrItems = this.todosArr[index].arrItems.map(el => {
                return el.state;
            });
            todo.title = this.todosArr[index].state.title;
        });
        localStorage.setItem('todos', JSON.stringify(this.state));
    }
    onBuild(event) {
        this.createTodo();
    }
    removeTodo(event) {
        const elem = event.detail.item;
        const index = this.todosArr.findIndex(el => el === elem);
        this.todosArr = this.todosArr.filter(el => el !== elem);
        this.state.todosArr = this.state.todosArr.filter((el, i) => i !== index);
        if (this.todosArr.length === 0) {
            localStorage.removeItem('todos');
        }
        else {
            localStorage.setItem('todos', JSON.stringify(this.state));
        }
    }
    /**
     * @return {TodoList} just created.
     */
    createTodo() {
        let todoElem = this.containerElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__todoList__["a" /* createTodoElement */])());
        const todo = new __WEBPACK_IMPORTED_MODULE_0__todoList__["b" /* default */](todoElem);
        todo.createFromStorage();
        this.todosArr.push(todo);
        this.state.todosArr.push(todo.state);
        localStorage.setItem('todos', JSON.stringify(this.state));
        return todo;
    }
    createTodoFromStorage() {
        let state = JSON.parse(localStorage.getItem('todos'));
        this.state = state;
        this.state.todosArr.forEach(el => {
            let todoElem = this.containerElem.appendChild(Object(__WEBPACK_IMPORTED_MODULE_0__todoList__["a" /* createTodoElement */])());
            const todo = new __WEBPACK_IMPORTED_MODULE_0__todoList__["b" /* default */](todoElem, el.title, el.arrItems);
            todo.createFromStorage();
            this.todosArr.push(todo);
        });
    }
    hasLocalStorage() {
        return localStorage.getItem('todos') ? true : false;
    }
    /**
     * @param  {Number} count - quantity of new TodoLists.
     * @return {Array} array of elements which has just been added in DOM.
     */
    createTodos(count) {
        let arr = [];
        for (let i = 0; i < count; i++) {
            arr.push(this.createTodo());
        }
        return arr;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TodoBuilder;



/***/ })
/******/ ]);