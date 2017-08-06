/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"todo-item"}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
const todoBuilder_1 = __webpack_require__(9);
const container = document.querySelector('.content-canvas');
const build = new todoBuilder_1.default(container);
start();
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js') ///TodoList/sw.js
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
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

module.exports = {"name":"ToDO List","short_name":"ToDo","icons":[{"src":"/favicon/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicon/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"theme_color":"#ffffff","background_color":"#ffffff","start_url":"https://andrewbotsulyak.github.io/TodoList/","display":"standalone"}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const todoList_1 = __webpack_require__(10);
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
        let todoElem = this.containerElem.appendChild(todoList_1.createTodoElement());
        const todo = new todoList_1.TodoList(todoElem);
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
            let todoElem = this.containerElem.appendChild(todoList_1.createTodoElement());
            const todo = new todoList_1.TodoList(todoElem, el.title, el.arrItems);
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
exports.default = TodoBuilder;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import TodoListItem from './todoListItem';
// import { createItemElement, IStateListItem } from './todoListItem';
Object.defineProperty(exports, "__esModule", { value: true });
let TodoListItem = null, createItemElement = null;
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
exports.createTodoElement = createTodoElement;
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
        if (this.state.arrItems.length !== 0) {
            __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 0))
                .then((module) => {
                TodoListItem = module.TodoListItem;
                createItemElement = module.createItemElement;
                this.state.arrItems.forEach(el => {
                    const newElem = this.ul.appendChild(createItemElement());
                    const objItem = new TodoListItem(newElem, el.checked, el.content);
                    this.arrItems.push(objItem);
                });
            });
        }
    }
    onAddItem(event) {
        event.preventDefault();
        if (!this.isInputEmpty()) {
            __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 0))
                .then((module) => {
                //debugger;
                TodoListItem = module.TodoListItem;
                createItemElement = module.createItemElement;
                const newElem = this.ul.appendChild(createItemElement());
                const objItem = new TodoListItem(newElem, null, this.input.value);
                this.arrItems.push(objItem);
                this.setState({ arrItems: this.arrItems.map(el => el.state) });
            });
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
exports.TodoList = TodoList;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjFjMjZjZmNkNTE5MjRhMDdlMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy90b2RvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9kby1saXN0L3RvZG8tbGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3RvZG8tbGlzdC8tLWl0ZW0vdG9kby1saXN0LS1pdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9vbGJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tYW5pZmVzdC5qc29uIiwid2VicGFjazovLy8uL3NyYy9qcy90b2RvQnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9kb0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxXQUFXLEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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LENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUVuQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNGLENBQUM7Q0FFRDtBQXhORCw0QkF3TkMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXSwgcmVzdWx0O1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3RzIHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDE6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhID09PSAwKSB7XG4gXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHsgcmVzb2x2ZSgpOyB9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRDaHVua0RhdGFbMl07XG4gXHRcdH1cblxuIFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdH0pO1xuIFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlO1xuXG4gXHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiBcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjAwMDA7XG5cbiBcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdH1cbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1wiMFwiOlwidG9kby1pdGVtXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCI7XG4gXHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLCAxMjAwMDApO1xuIFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRmdW5jdGlvbiBvblNjcmlwdENvbXBsZXRlKCkge1xuIFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdGNodW5rWzFdKG5ldyBFcnJvcignTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLicpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuIFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGYxYzI2Y2ZjZDUxOTI0YTA3ZTM4IiwiaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5cbmltcG9ydCAnLi9zY3NzL3RvZG8uc2Nzcyc7XG5pbXBvcnQgJy4vc2Nzcy90b2RvLWxpc3QvdG9kby1saXN0LnNjc3MnO1xuaW1wb3J0ICcuL3Njc3MvdG9kby1saXN0Ly0taXRlbS90b2RvLWxpc3QtLWl0ZW0uc2Nzcyc7XG5cbmltcG9ydCAnLi9zY3NzL3Rvb2xiYXIuc2Nzcyc7XG5cbmltcG9ydCAnLi9zY3NzL2J1dHRvbnMuc2Nzcyc7XG5cbmltcG9ydCAnLi4vbWFuaWZlc3QuanNvbic7XG5cbmltcG9ydCBUb2RvQnVpbGRlciBmcm9tICcuL2pzL3RvZG9CdWlsZGVyJzsgXG5cbmNvbnN0IGNvbnRhaW5lciA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jYW52YXMnKTtcblxuY29uc3QgYnVpbGQ6IFRvZG9CdWlsZGVyID0gbmV3IFRvZG9CdWlsZGVyKGNvbnRhaW5lcik7XG5zdGFydCgpO1xuXG5cbmlmKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3Ipe1xuXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy4vc3cuanMnKSAvLy9Ub2RvTGlzdC9zdy5qc1xuICAgICAgICAudGhlbigocmVnKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVnaXN0cmF0aW9uIHN1Y2NlZWRlZC4gU2NvcGUgaXMgJHtyZWcuc2NvcGV9YCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFJlZ2lzdHJhdGlvbiBpcyBmYWlsZWQgJHtlcnJ9YCk7XG4gICAgICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHN0YXJ0KCl7XG4gICAgaWYoYnVpbGQuaGFzTG9jYWxTdG9yYWdlKCkpe1xuICAgICAgICBidWlsZC5jcmVhdGVUb2RvRnJvbVN0b3JhZ2UoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYnVpbGQuY3JlYXRlVG9kbygpO1xuICAgIH1cbn0gXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy90b2RvLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3RvZG8tbGlzdC90b2RvLWxpc3Quc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvdG9kby1saXN0Ly0taXRlbS90b2RvLWxpc3QtLWl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvdG9vbGJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy9idXR0b25zLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJuYW1lXCI6XCJUb0RPIExpc3RcIixcInNob3J0X25hbWVcIjpcIlRvRG9cIixcImljb25zXCI6W3tcInNyY1wiOlwiL2Zhdmljb24vYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmdcIixcInNpemVzXCI6XCIxOTJ4MTkyXCIsXCJ0eXBlXCI6XCJpbWFnZS9wbmdcIn0se1wic3JjXCI6XCIvZmF2aWNvbi9hbmRyb2lkLWNocm9tZS01MTJ4NTEyLnBuZ1wiLFwic2l6ZXNcIjpcIjUxMng1MTJcIixcInR5cGVcIjpcImltYWdlL3BuZ1wifV0sXCJ0aGVtZV9jb2xvclwiOlwiI2ZmZmZmZlwiLFwiYmFja2dyb3VuZF9jb2xvclwiOlwiI2ZmZmZmZlwiLFwic3RhcnRfdXJsXCI6XCJodHRwczovL2FuZHJld2JvdHN1bHlhay5naXRodWIuaW8vVG9kb0xpc3QvXCIsXCJkaXNwbGF5XCI6XCJzdGFuZGFsb25lXCJ9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYW5pZmVzdC5qc29uXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IFRvZG9MaXN0LCBjcmVhdGVUb2RvRWxlbWVudCB9IGZyb20gJy4vdG9kb0xpc3QnO1xuaW1wb3J0IHsgSVN0YXRlLCBJU3RhdGVMaXN0IH0gZnJvbSAnLi9JU3RhdGVzJztcblxuXG5pbnRlcmZhY2UgSUN1c3RvbUV2ZW50e1xuXG59XG5cbi8qKlxuICogY2xhc3MgY3JlYXRlIGFsbCBUb2RvTGlzdHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIERPTUVsZW1lbnQgY29udGFpbmVyIG9mIFRvZG9MaXN0cy5cbiAqXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBjb250YWluZXJFbGVtIC0gRE9NRWxlbWVudCBjb250YWluZXIgb2YgVG9kb0xpc3RzLlxuICogQHByb3BlcnR5IHtBcnJheX0gdG9kb3NBcnIgLSBhcnJheSB3aXRoIGFsbCBUb2RvTGlzdHMuXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBidG5BZGRUb2RvIC0gYnRuIHdoaWNoIGlzIGFkZGVkIG5ldyBUb2RvTGlzdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0J1aWxkZXJ7XG5cblx0Y29udGFpbmVyRWxlbTogSFRNTERpdkVsZW1lbnQ7XG5cdHRvZG9zQXJyOiBBcnJheTxUb2RvTGlzdD47XG5cdGJ0bkFkZFRvZG86IEhUTUxCdXR0b25FbGVtZW50O1xuXHRzdGF0ZTogSVN0YXRlO1xuXG5cdGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpe1xuXG5cdFx0dGhpcy5jb250YWluZXJFbGVtID0gY29udGFpbmVyO1xuXHRcdHRoaXMudG9kb3NBcnIgPSBbXTtcblx0XHR0aGlzLmJ0bkFkZFRvZG8gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1aWxkLXRvZG8nKTtcblxuXHRcdFxuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZG9zQXJyOiBbXVxuXHRcdH1cblxuXHRcdHRoaXMuYnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25CdWlsZChldmVudCkpO1xuXG5cdFx0dGhpcy5jb250YWluZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ1RvZG9MaXN0LnJlbW92ZScsIChldmVudDogQ3VzdG9tRXZlbnQpID0+IHRoaXMucmVtb3ZlVG9kbyhldmVudCkpO1xuXG5cdFx0dGhpcy5jb250YWluZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvZG9zdGF0ZWNoYW5nZScsIChldmVudDogRXZlbnQpID0+IHRoaXMudXBkYXRlU3RvcmFnZShldmVudCkpO1xuXG5cdH1cblxuXHR1cGRhdGVTdG9yYWdlKGV2ZW50OiBFdmVudCk6IHZvaWR7XG5cblx0XHR0aGlzLnN0YXRlLnRvZG9zQXJyLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG5cdFx0XHR0b2RvLmFyckl0ZW1zID0gdGhpcy50b2Rvc0FycltpbmRleF0uYXJySXRlbXMubWFwKGVsID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsLnN0YXRlO1xuXHRcdFx0fSk7XG5cdFx0XHR0b2RvLnRpdGxlID0gdGhpcy50b2Rvc0FycltpbmRleF0uc3RhdGUudGl0bGU7XG5cdFx0fSk7XG5cblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XG5cdH1cblxuXHRvbkJ1aWxkKGV2ZW50OiBFdmVudCk6IHZvaWR7XG5cdFx0dGhpcy5jcmVhdGVUb2RvKCk7XG5cdH1cblxuXHRyZW1vdmVUb2RvKGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWR7XG5cdFx0Y29uc3QgZWxlbTogVG9kb0xpc3QgPSBldmVudC5kZXRhaWwuaXRlbTtcblx0XHRjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy50b2Rvc0Fyci5maW5kSW5kZXgoZWwgPT4gZWwgPT09IGVsZW0pO1x0XHRcblx0XHR0aGlzLnRvZG9zQXJyID0gdGhpcy50b2Rvc0Fyci5maWx0ZXIoZWwgPT4gZWwgIT09IGVsZW0pO1xuXHRcdHRoaXMuc3RhdGUudG9kb3NBcnIgPSB0aGlzLnN0YXRlLnRvZG9zQXJyLmZpbHRlcigoZWwsIGkpID0+IGkgIT09IGluZGV4KTtcblx0XHRpZih0aGlzLnRvZG9zQXJyLmxlbmd0aCA9PT0gMCl7XG5cdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb3MnKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VG9kb0xpc3R9IGp1c3QgY3JlYXRlZC5cblx0ICovXG5cdGNyZWF0ZVRvZG8oKTogVG9kb0xpc3R7XG5cdFx0bGV0IHRvZG9FbGVtOiBIVE1MRGl2RWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUb2RvRWxlbWVudCgpKTsgXG5cdFx0Y29uc3QgdG9kbzogVG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QodG9kb0VsZW0pO1x0XHRcdCBcblx0XHR0b2RvLmNyZWF0ZUZyb21TdG9yYWdlKCk7XG5cdFx0dGhpcy50b2Rvc0Fyci5wdXNoKHRvZG8pO1xuXG5cdFx0dGhpcy5zdGF0ZS50b2Rvc0Fyci5wdXNoKHRvZG8uc3RhdGUpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcblxuXHRcdHJldHVybiB0b2RvO1xuXHR9XG5cblx0Y3JlYXRlVG9kb0Zyb21TdG9yYWdlKCk6IHZvaWR7XG5cdFx0bGV0IHN0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cdFx0dGhpcy5zdGF0ZSA9IHN0YXRlO1xuXHRcdHRoaXMuc3RhdGUudG9kb3NBcnIuZm9yRWFjaChlbCA9PiB7XG5cdFx0XHRsZXQgdG9kb0VsZW06IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9FbGVtZW50KCkpOyBcblx0XHRcdGNvbnN0IHRvZG86IFRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KHRvZG9FbGVtLCBlbC50aXRsZSwgZWwuYXJySXRlbXMpO1x0XHRcdCBcblx0XHRcdHRvZG8uY3JlYXRlRnJvbVN0b3JhZ2UoKTtcblx0XHRcdHRoaXMudG9kb3NBcnIucHVzaCh0b2RvKTtcblx0XHR9KTtcblx0fVxuXG5cdGhhc0xvY2FsU3RvcmFnZSgpOiBib29sZWFue1xuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKT8gdHJ1ZSA6IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSAge051bWJlcn0gY291bnQgLSBxdWFudGl0eSBvZiBuZXcgVG9kb0xpc3RzLlxuXHQgKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgb2YgZWxlbWVudHMgd2hpY2ggaGFzIGp1c3QgYmVlbiBhZGRlZCBpbiBET00uXG5cdCAqL1xuXHRjcmVhdGVUb2Rvcyhjb3VudDogbnVtYmVyKTogQXJyYXk8VG9kb0xpc3Q+e1xuXHRcdGxldCBhcnI6IEFycmF5PFRvZG9MaXN0PiA9IFtdO1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKXtcblx0XHRcdGFyci5wdXNoKHRoaXMuY3JlYXRlVG9kbygpKTtcblx0XHR9XG5cdFx0cmV0dXJuIGFycjtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RvZG9CdWlsZGVyLnRzIiwiLy8gaW1wb3J0IFRvZG9MaXN0SXRlbSBmcm9tICcuL3RvZG9MaXN0SXRlbSc7XG4vLyBpbXBvcnQgeyBjcmVhdGVJdGVtRWxlbWVudCwgSVN0YXRlTGlzdEl0ZW0gfSBmcm9tICcuL3RvZG9MaXN0SXRlbSc7XG5cbmltcG9ydCB7IElTdGF0ZUxpc3QsIElTdGF0ZUxpc3RJdGVtIH0gZnJvbSAnLi9JU3RhdGVzJztcblxuXG5sZXQgVG9kb0xpc3RJdGVtID0gbnVsbCxcbiBcdGNyZWF0ZUl0ZW1FbGVtZW50ID0gbnVsbDtcblxuY29uc3QgUExBQ0VIT0xERVJfVElUTEUgPSAn0KLQtdC80LAg0LfQsNC80LXRgtC+0LouLi4nO1xuY29uc3QgUExBQ0VIT0xERVJfSU5QVVQgPSAn0JfQsNC80LXRgtC60LAuLi4nO1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvRWxlbWVudCgpe1xuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcblx0ZGl2LmlubmVySFRNTCA9IGBcblx0XHQ8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cInRvZG8tZm9ybVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImRlbGV0ZS10b2RvXCI+w5c8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9J3dyYXAtdGl0bGUtaW5wdXQgaW5wdXQnIHRhYmluZGV4PScxJz5cdFx0XG5cdFx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0ndGl0bGUnIC8+XG5cdFx0XHRcdDxsYWJlbCBjbGFzcz0ndGl0bGUtbGFiZWwnPiR7UExBQ0VIT0xERVJfVElUTEV9PC9sYWJlbD5cdFx0XHRcblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nd3JhcC1tYWluLWlucHV0IGlucHV0Jz5cblx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSdtYWluLWlucHV0JyAvPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3M9J21haW4taW5wdXQtbGFiZWwnPiR7UExBQ0VIT0xERVJfSU5QVVR9PC9sYWJlbD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImFkZC1pdGVtIGJ0biBtYXQtZWxldmF0aW9uLTJkcFwiIHZhbHVlPVwiQWRkXCIgLz5cblx0XHRcdDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz1cImNsZWFyQWxsIGJ0biBtYXQtZWxldmF0aW9uLTJkcFwiPkNsZWFyPC9idXR0b24+XG5cdFx0PC9mb3JtPlxuXHRcdDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxuXHRcdDwvdWw+XG5cdGA7XG5cblx0cmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kb0VsZW1lbnQgfTtcblxuXG5cblxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudHMgVG9kb0xpc3QuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0b2RvIC0gRE9NRWxlbWVudCB3cmFwIG9mIFRvRG8uXG4gKlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gdG9kb0VsZW0gLSBET00gRWxlbWVudCBjb250YWluZXIgb2YgVG9EbyBBcHAuXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBpbnB1dCAtIHRleHQgZmllbGQgZm9yIGNyZWF0aW5nIG5ldyB0b2RvLlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gYWRkIC0gYWRkaW5nIHRvZG8gaW4gbGlzdCAoPHVsPikuXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSB1bCAtIGNvbnRhaW5lciBvZiBUb2RvTGlzdEl0ZW1zICg8bGk+KS5cbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGFyckl0ZW1zIC0gYXJyYXkgd2l0aCBUb2RvTGlzdEl0ZW1zLiBcbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9MaXN0e1xuXG5cdHRvZG9FbGVtOiBIVE1MRGl2RWxlbWVudDtcblx0aW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdGFkZDogSFRNTElucHV0RWxlbWVudDtcblx0dWw6IEhUTUxVTGlzdEVsZW1lbnQ7XG5cdGNsZWFyTGlzdDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cdHRpdGxlRWxlbTogSFRNTElucHV0RWxlbWVudDtcblx0ZGVsZXRlVG9kbzogSFRNTERpdkVsZW1lbnQ7XG5cdHdyYXBJbnB1dDogSFRNTERpdkVsZW1lbnQ7XG5cdGxhYmVsTWFpbjogSFRNTExhYmVsRWxlbWVudDtcblx0d3JhcE1haW5JbnB1dDogSFRNTERpdkVsZW1lbnQ7XG5cdGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xuXHR0aXRsZTogc3RyaW5nO1xuXHRhcnJJdGVtczogQXJyYXk8YW55Pjtcblx0cGFyZW50OiBIVE1MRGl2RWxlbWVudDtcblx0c3RhdGU6IElTdGF0ZUxpc3Q7XG5cblxuXHRjb25zdHJ1Y3Rvcih0b2RvOiBIVE1MRGl2RWxlbWVudCA9IG51bGwsIHRpdGxlOiBzdHJpbmcgPSAnJywgYXJySXRlbXM6QXJyYXk8SVN0YXRlTGlzdEl0ZW0+ID0gW10gKXtcblxuXHRcdHRoaXMudG9kb0VsZW0gPSB0b2RvO1xuXHRcdHRoaXMuaW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWlucHV0Jyk7XG5cdFx0dGhpcy5hZGQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbScpO1xuXHRcdHRoaXMudWwgPSA8SFRNTFVMaXN0RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcblx0XHR0aGlzLmNsZWFyTGlzdCA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jbGVhckFsbCcpO1xuXHRcdHRoaXMudGl0bGVFbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcblx0XHR0aGlzLmRlbGV0ZVRvZG8gPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXRvZG8nKTtcblx0XHR0aGlzLndyYXBJbnB1dCA9IDxIVE1MRGl2RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy53cmFwLXRpdGxlLWlucHV0Jyk7XG5cdFx0dGhpcy5sYWJlbE1haW4gPSAgPEhUTUxMYWJlbEVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcubWFpbi1pbnB1dC1sYWJlbCcpO1xuXHRcdHRoaXMud3JhcE1haW5JbnB1dCA9IDxIVE1MRGl2RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy53cmFwLW1haW4taW5wdXQnKTtcblx0XHR0aGlzLmxhYmVsID0gPEhUTUxMYWJlbEVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcudGl0bGUtbGFiZWwnKTtcblxuXHRcdHRoaXMuc2V0VGl0bGUodGl0bGUpO1x0XHRcblx0XHRcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5hcnJJdGVtcyA9IFtdO1xuXG5cdFx0dGhpcy5wYXJlbnQgPSA8SFRNTERpdkVsZW1lbnQ+KCgpID0+IHtcblx0XHRcdGxldCBidWlsZDogRWxlbWVudCA9IHRoaXMudG9kb0VsZW0ucGFyZW50RWxlbWVudDtcblx0XHRcdHdoaWxlKCFidWlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRlbnQtY2FudmFzJykpe1xuXHRcdFx0XHRidWlsZCA9IGJ1aWxkLnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYnVpbGQ7XG5cdFx0fSkoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZTogdGl0bGUsXG5cdFx0XHRhcnJJdGVtc1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uUmVtb3ZlKGV2ZW50KSk7XG5cblx0XHR0aGlzLnRpdGxlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogRXZlbnQpID0+IHRoaXMub25UeXBlKGV2ZW50KSk7XG5cblx0XHR0aGlzLndyYXBJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHtcblx0XHRcdGlmKGV2ZW50LnRhcmdldCA9PSB0aGlzLnRpdGxlRWxlbSB8fCBldmVudC50YXJnZXQgPT0gdGhpcy5sYWJlbCl7XG5cdFx0XHRcdGlmKCF0aGlzLnRpdGxlKXtcblx0XHRcdFx0XHR0aGlzLnRpdGxlRWxlbS5mb2N1cygpO1x0XHRcdFx0XHRcdFx0XHQvLyBmb2N1cyB0aXRsZVxuXHRcdFx0XHRcdHRoaXMuYW5pbUxhYmVsKHRydWUsICdsYWJlbCcpO1x0XHRcdFx0XHRcdC8vIGFkZCBlZmZlY3RzIGZvciBsYWJlbFxuXHRcdFx0XHRcdHRoaXMud3JhcElucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWxpbmUnKTsgXHRcdC8vIGJvcmRlciBlZmZlY3Rcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy50aXRsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHRpZighdGhpcy50aXRsZSl7XG5cdFx0XHRcdHRoaXMuYW5pbUxhYmVsKGZhbHNlLCAnbGFiZWwnKTtcdFx0XHRcdFx0XHRcdFx0Ly8gcmV2ZXJzZSBsYWJlbCBlZmZlY3QgXG5cdFx0XHR9XG5cdFx0XHR0aGlzLndyYXBJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1saW5lJyk7XHRcdFx0Ly8gcmVtb3ZlIGJvcmRlciBlZmZlY3Rcblx0XHR9KTtcdFx0XHRcblxuXHRcdC8vXHRzdWJzY3JpYmUgb24gVG9kb0xpc3RJdGVtJ3MgJ2Nsb3NlSXRlbScgZXZlbnRcblx0XHR0aGlzLnVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlSXRlbScsIChldmVudDogQ3VzdG9tRXZlbnQpID0+IHRoaXMub25EZWxldGVJdGVtKGV2ZW50KSk7ICBcblxuXHRcdHRoaXMudG9kb0VsZW0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkFkZEl0ZW0oZXZlbnQpKTtcblx0XHRcblx0XHR0aGlzLmNsZWFyTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMuY2xlYXJBbGwoZXZlbnQpKTtcblxuXG5cdFx0dGhpcy53cmFwTWFpbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0aWYoZXZlbnQudGFyZ2V0ID09IHRoaXMubGFiZWxNYWluIHx8IGV2ZW50LnRhcmdldCA9PSB0aGlzLmlucHV0KXtcblx0XHRcdFx0aWYoIXRoaXMuaW5wdXQudmFsdWUpe1xuXHRcdFx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLmFuaW1MYWJlbCh0cnVlLCAnbGFiZWxNYWluJyk7XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy53cmFwTWFpbklucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWxpbmUnKTsgXHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0aWYoIXRoaXMuaW5wdXQudmFsdWUpe1xuXHRcdFx0XHR0aGlzLmFuaW1MYWJlbChmYWxzZSwgJ2xhYmVsTWFpbicpO1x0XHRcdFx0XHRcdFx0XHQgXG5cdFx0XHR9XG5cdFx0XHR0aGlzLndyYXBNYWluSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtbGluZScpO1x0XHRcdFxuXHRcdH0pO1x0XG5cblxuXHR9XG5cblx0c2V0VGl0bGUodGV4dDogc3RyaW5nKTogdm9pZHtcblx0XHRpZih0ZXh0KXtcblx0XHRcdHRoaXMuYW5pbUxhYmVsKHRydWUsICdsYWJlbCcpO1xuXHRcdFx0dGhpcy50aXRsZUVsZW0udmFsdWUgPSB0ZXh0O1xuXHRcdFx0dGhpcy50aXRsZSA9IHRleHQ7XG5cdFx0fVxuXHR9XG5cblx0YW5pbUxhYmVsKGZsYWc6IGJvb2xlYW4sIGVsZW06IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmKGZsYWcpe1xuXHRcdFx0dGhpc1tlbGVtXS5jbGFzc0xpc3QuYWRkKCdsYWJlbC1tb3ZlJyk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHR0aGlzW2VsZW1dLmNsYXNzTGlzdC5yZW1vdmUoJ2xhYmVsLW1vdmUnKTtcblx0XHR9XG5cdH1cblxuXHRzZXRTdGF0ZShuZXdTdGF0ZTogSVN0YXRlTGlzdCk6IHZvaWR7XG5cdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIG5ld1N0YXRlKTtcblx0XHR0aGlzLmRpc3BTdGF0ZUNoYW5nZUV2ZW50KCk7XG5cdH1cblxuXHRvblJlbW92ZShldmVudDogRXZlbnQpOiB2b2lke1xuXHRcdGxldCBjbG9zZUV2ZW50OiBFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnVG9kb0xpc3QucmVtb3ZlJywge1xuXHRcdFx0IFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOntcblx0XHRcdFx0XHRpdGVtOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHRoaXMudG9kb0VsZW0uZGlzcGF0Y2hFdmVudChjbG9zZUV2ZW50KTtcblx0XHR0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLnRvZG9FbGVtKTtcblx0fVxuXG5cdG9uVHlwZShldmVudDogRXZlbnQpOiB2b2lke1xuXHRcdHRoaXMudGl0bGUgPSB0aGlzLnRpdGxlRWxlbS52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHsgdGl0bGU6IHRoaXMudGl0bGUgfSk7XG5cdH1cblxuXHRkaXNwU3RhdGVDaGFuZ2VFdmVudCgpOiB2b2lke1xuXHRcdGNvbnN0IHN0YXRlRXZlbnQ6IEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2Rvc3RhdGVjaGFuZ2UnLHtcblx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRkZXRhaWw6e1xuXHRcdFx0XHRpdGVtOiB0aGlzLFxuXHRcdFx0XHRzdGF0ZTogdGhpcy5zdGF0ZVxuXHRcdFx0fVxuXHRcdCB9KTtcblx0XHQgdGhpcy50b2RvRWxlbS5kaXNwYXRjaEV2ZW50KHN0YXRlRXZlbnQpO1xuXHR9XG5cblx0Y3JlYXRlRnJvbVN0b3JhZ2UoKTogdm9pZCB7XG5cdFx0aWYodGhpcy5zdGF0ZS5hcnJJdGVtcy5sZW5ndGggIT09IDApe1xuXHRcdFx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidG9kby1pdGVtXCIgKi8gJy4vdG9kb0xpc3RJdGVtJylcblx0XHRcdFx0LnRoZW4oKG1vZHVsZSkgPT4ge1xuXHRcdFx0XHRcdFRvZG9MaXN0SXRlbSA9IG1vZHVsZS5Ub2RvTGlzdEl0ZW07XG5cdFx0XHRcdFx0Y3JlYXRlSXRlbUVsZW1lbnQgPSBtb2R1bGUuY3JlYXRlSXRlbUVsZW1lbnQ7XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmFyckl0ZW1zLmZvckVhY2goZWwgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV3RWxlbTogSFRNTExJRWxlbWVudCA9IHRoaXMudWwuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbUVsZW1lbnQoKSk7XG5cdFx0XHRcdFx0XHRjb25zdCBvYmpJdGVtID0gIG5ldyBUb2RvTGlzdEl0ZW0obmV3RWxlbSwgZWwuY2hlY2tlZCwgZWwuY29udGVudCk7XG5cdFx0XHRcdFx0XHR0aGlzLmFyckl0ZW1zLnB1c2gob2JqSXRlbSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRvbkFkZEl0ZW0oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRpZighdGhpcy5pc0lucHV0RW1wdHkoKSl7XG5cdFx0XHRpbXBvcnQoXG5cdFx0XHQvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInRvZG8taXRlbVwiICovXG5cdFx0XHQnLi90b2RvTGlzdEl0ZW0nKVxuXHRcdFx0XHQudGhlbigobW9kdWxlKSA9PiB7XG5cdFx0XHRcdFx0Ly9kZWJ1Z2dlcjtcblx0XHRcdFx0XHRUb2RvTGlzdEl0ZW0gPSBtb2R1bGUuVG9kb0xpc3RJdGVtO1xuXHRcdFx0XHRcdGNyZWF0ZUl0ZW1FbGVtZW50ID0gbW9kdWxlLmNyZWF0ZUl0ZW1FbGVtZW50O1xuXG5cdFx0XHRcdFx0Y29uc3QgbmV3RWxlbTogSFRNTExJRWxlbWVudCA9IHRoaXMudWwuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbUVsZW1lbnQoKSk7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqSXRlbSA9ICBuZXcgVG9kb0xpc3RJdGVtKG5ld0VsZW0sIG51bGwsIHRoaXMuaW5wdXQudmFsdWUpO1xuXHRcdFx0XHRcdHRoaXMuYXJySXRlbXMucHVzaChvYmpJdGVtKTtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgYXJySXRlbXM6IHRoaXMuYXJySXRlbXMubWFwKGVsID0+IGVsLnN0YXRlKX0pO1xuXHRcdFxuXHRcdFx0XHR9KTtcdFxuXHRcdH1cblx0fVxuXG5cdGlzSW5wdXRFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKHRoaXMuaW5wdXQudmFsdWUpID8gZmFsc2UgOiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBvYmogd2l0aCBzdHlsZXMgIFxuXHQgKi9cblx0c2V0U3R5bGUob2JqOiBhbnkpOiB2b2lke1xuXHRcdGZvcihsZXQgcHJvcCBpbiBvYmope1xuXHRcdFx0dGhpcy50b2RvRWxlbS5zdHlsZVtwcm9wXSA9IG9ialtwcm9wXTtcblx0XHR9XG5cdH1cblxuXHRvbkRlbGV0ZUl0ZW0oZXZlbnQ6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG5cdFx0Y29uc3QgZWxlbSA9IGV2ZW50LmRldGFpbC5pdGVtO1xuXHRcdHRoaXMuYXJySXRlbXMgPSB0aGlzLmFyckl0ZW1zLmZpbHRlcihlbCA9PiBlbCAhPT0gZWxlbSk7XG5cdFx0XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGFyckl0ZW1zOiB0aGlzLmFyckl0ZW1zLm1hcChlbCA9PiBlbC5zdGF0ZSl9KTtcblx0fVxuXG5cdC8vIGNsZWFyIGxpc3Qgb2YgaXRlbXNcblx0Y2xlYXJBbGwoZXZlbnQ6IEV2ZW50KTogdm9pZHtcblx0XHRpZih0aGlzLmFyckl0ZW1zLmxlbmd0aCAhPT0gMCl7XG5cdFx0XHR0aGlzLmFyckl0ZW1zLmZvckVhY2goZWxlbSA9PiBlbGVtLnJlbW92ZSgpKTtcblx0XHRcdHRoaXMuYXJySXRlbXMgPSBbXTtcblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFyckl0ZW1zOiBbXSB9KTtcblx0XHR9XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b2RvTGlzdC50cyJdLCJzb3VyY2VSb290IjoiIn0=