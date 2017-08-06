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
/******/ 	__webpack_require__.p = ".";
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
    navigator.serviceWorker.register('/TodoList/sw.js')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGEzNzBhNDVjMDEwYjI4YmRiZDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy90b2RvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9kby1saXN0L3RvZG8tbGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3RvZG8tbGlzdC8tLWl0ZW0vdG9kby1saXN0LS1pdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9vbGJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tYW5pZmVzdC5qc29uIiwid2VicGFjazovLy8uL3NyYy9qcy90b2RvQnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9kb0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxXQUFXLEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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LENBQUM7WUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDRixDQUFDO0NBRUQ7QUF0TkQsNEJBc05DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0cyB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQxOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSA9PT0gMCkge1xuIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoKTsgfSk7XG4gXHRcdH1cblxuIFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtEYXRhWzJdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHR9KTtcbiBcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZTtcblxuIFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG4gXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwMDAwO1xuXG4gXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHR9XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcIjBcIjpcInRvZG8taXRlbVwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRjaHVua1sxXShuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC4nKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiBcdFx0cmV0dXJuIHByb21pc2U7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi5cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGEzNzBhNDVjMDEwYjI4YmRiZDEiLCJpbXBvcnQgJy4vbWFpbi5zY3NzJztcblxuaW1wb3J0ICcuL3Njc3MvdG9kby5zY3NzJztcbmltcG9ydCAnLi9zY3NzL3RvZG8tbGlzdC90b2RvLWxpc3Quc2Nzcyc7XG5pbXBvcnQgJy4vc2Nzcy90b2RvLWxpc3QvLS1pdGVtL3RvZG8tbGlzdC0taXRlbS5zY3NzJztcblxuaW1wb3J0ICcuL3Njc3MvdG9vbGJhci5zY3NzJztcblxuaW1wb3J0ICcuL3Njc3MvYnV0dG9ucy5zY3NzJztcblxuaW1wb3J0ICcuLi9tYW5pZmVzdC5qc29uJztcblxuaW1wb3J0IFRvZG9CdWlsZGVyIGZyb20gJy4vanMvdG9kb0J1aWxkZXInOyBcblxuY29uc3QgY29udGFpbmVyID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWNhbnZhcycpO1xuXG5jb25zdCBidWlsZDogVG9kb0J1aWxkZXIgPSBuZXcgVG9kb0J1aWxkZXIoY29udGFpbmVyKTtcbnN0YXJ0KCk7XG5cblxuaWYoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcil7XG5cbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL1RvZG9MaXN0L3N3LmpzJykgXG4gICAgICAgIC50aGVuKChyZWcpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZWdpc3RyYXRpb24gc3VjY2VlZGVkLiBTY29wZSBpcyAke3JlZy5zY29wZX1gKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVnaXN0cmF0aW9uIGlzIGZhaWxlZCAke2Vycn1gKTtcbiAgICAgICAgfSk7XG59XG5cblxuZnVuY3Rpb24gc3RhcnQoKXtcbiAgICBpZihidWlsZC5oYXNMb2NhbFN0b3JhZ2UoKSl7XG4gICAgICAgIGJ1aWxkLmNyZWF0ZVRvZG9Gcm9tU3RvcmFnZSgpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBidWlsZC5jcmVhdGVUb2RvKCk7XG4gICAgfVxufSBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3RvZG8uc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvdG9kby1saXN0L3RvZG8tbGlzdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy90b2RvLWxpc3QvLS1pdGVtL3RvZG8tbGlzdC0taXRlbS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy90b29sYmFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL2J1dHRvbnMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5hbWVcIjpcIlRvRE8gTGlzdFwiLFwic2hvcnRfbmFtZVwiOlwiVG9Eb1wiLFwiaWNvbnNcIjpbe1wic3JjXCI6XCIvZmF2aWNvbi9hbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZ1wiLFwic2l6ZXNcIjpcIjE5MngxOTJcIixcInR5cGVcIjpcImltYWdlL3BuZ1wifSx7XCJzcmNcIjpcIi9mYXZpY29uL2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nXCIsXCJzaXplc1wiOlwiNTEyeDUxMlwiLFwidHlwZVwiOlwiaW1hZ2UvcG5nXCJ9XSxcInRoZW1lX2NvbG9yXCI6XCIjZmZmZmZmXCIsXCJiYWNrZ3JvdW5kX2NvbG9yXCI6XCIjZmZmZmZmXCIsXCJzdGFydF91cmxcIjpcImh0dHBzOi8vYW5kcmV3Ym90c3VseWFrLmdpdGh1Yi5pby9Ub2RvTGlzdC9cIixcImRpc3BsYXlcIjpcInN0YW5kYWxvbmVcIn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21hbmlmZXN0Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgVG9kb0xpc3QsIGNyZWF0ZVRvZG9FbGVtZW50IH0gZnJvbSAnLi90b2RvTGlzdCc7XG5pbXBvcnQgeyBJU3RhdGUsIElTdGF0ZUxpc3QgfSBmcm9tICcuL0lTdGF0ZXMnO1xuXG5cbmludGVyZmFjZSBJQ3VzdG9tRXZlbnR7XG5cbn1cblxuLyoqXG4gKiBjbGFzcyBjcmVhdGUgYWxsIFRvZG9MaXN0c1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIC0gRE9NRWxlbWVudCBjb250YWluZXIgb2YgVG9kb0xpc3RzLlxuICpcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lckVsZW0gLSBET01FbGVtZW50IGNvbnRhaW5lciBvZiBUb2RvTGlzdHMuXG4gKiBAcHJvcGVydHkge0FycmF5fSB0b2Rvc0FyciAtIGFycmF5IHdpdGggYWxsIFRvZG9MaXN0cy5cbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGJ0bkFkZFRvZG8gLSBidG4gd2hpY2ggaXMgYWRkZWQgbmV3IFRvZG9MaXN0LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvQnVpbGRlcntcblxuXHRjb250YWluZXJFbGVtOiBIVE1MRGl2RWxlbWVudDtcblx0dG9kb3NBcnI6IEFycmF5PFRvZG9MaXN0Pjtcblx0YnRuQWRkVG9kbzogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cdHN0YXRlOiBJU3RhdGU7XG5cblx0Y29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCl7XG5cblx0XHR0aGlzLmNvbnRhaW5lckVsZW0gPSBjb250YWluZXI7XG5cdFx0dGhpcy50b2Rvc0FyciA9IFtdO1xuXHRcdHRoaXMuYnRuQWRkVG9kbyA9IDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVpbGQtdG9kbycpO1xuXG5cdFx0XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dG9kb3NBcnI6IFtdXG5cdFx0fVxuXG5cdFx0dGhpcy5idG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkJ1aWxkKGV2ZW50KSk7XG5cblx0XHR0aGlzLmNvbnRhaW5lckVsZW0uYWRkRXZlbnRMaXN0ZW5lcignVG9kb0xpc3QucmVtb3ZlJywgKGV2ZW50OiBDdXN0b21FdmVudCkgPT4gdGhpcy5yZW1vdmVUb2RvKGV2ZW50KSk7XG5cblx0XHR0aGlzLmNvbnRhaW5lckVsZW0uYWRkRXZlbnRMaXN0ZW5lcigndG9kb3N0YXRlY2hhbmdlJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy51cGRhdGVTdG9yYWdlKGV2ZW50KSk7XG5cblx0fVxuXG5cdHVwZGF0ZVN0b3JhZ2UoZXZlbnQ6IEV2ZW50KTogdm9pZHtcblxuXHRcdHRoaXMuc3RhdGUudG9kb3NBcnIuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcblx0XHRcdHRvZG8uYXJySXRlbXMgPSB0aGlzLnRvZG9zQXJyW2luZGV4XS5hcnJJdGVtcy5tYXAoZWwgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWwuc3RhdGU7XG5cdFx0XHR9KTtcblx0XHRcdHRvZG8udGl0bGUgPSB0aGlzLnRvZG9zQXJyW2luZGV4XS5zdGF0ZS50aXRsZTtcblx0XHR9KTtcblxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcblx0fVxuXG5cdG9uQnVpbGQoZXZlbnQ6IEV2ZW50KTogdm9pZHtcblx0XHR0aGlzLmNyZWF0ZVRvZG8oKTtcblx0fVxuXG5cdHJlbW92ZVRvZG8oZXZlbnQ6IEN1c3RvbUV2ZW50KTogdm9pZHtcblx0XHRjb25zdCBlbGVtOiBUb2RvTGlzdCA9IGV2ZW50LmRldGFpbC5pdGVtO1xuXHRcdGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLnRvZG9zQXJyLmZpbmRJbmRleChlbCA9PiBlbCA9PT0gZWxlbSk7XHRcdFxuXHRcdHRoaXMudG9kb3NBcnIgPSB0aGlzLnRvZG9zQXJyLmZpbHRlcihlbCA9PiBlbCAhPT0gZWxlbSk7XG5cdFx0dGhpcy5zdGF0ZS50b2Rvc0FyciA9IHRoaXMuc3RhdGUudG9kb3NBcnIuZmlsdGVyKChlbCwgaSkgPT4gaSAhPT0gaW5kZXgpO1xuXHRcdGlmKHRoaXMudG9kb3NBcnIubGVuZ3RoID09PSAwKXtcblx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2RvcycpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtUb2RvTGlzdH0ganVzdCBjcmVhdGVkLlxuXHQgKi9cblx0Y3JlYXRlVG9kbygpOiBUb2RvTGlzdHtcblx0XHRsZXQgdG9kb0VsZW06IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9FbGVtZW50KCkpOyBcblx0XHRjb25zdCB0b2RvOiBUb2RvTGlzdCA9IG5ldyBUb2RvTGlzdCh0b2RvRWxlbSk7XHRcdFx0IFxuXHRcdHRvZG8uY3JlYXRlRnJvbVN0b3JhZ2UoKTtcblx0XHR0aGlzLnRvZG9zQXJyLnB1c2godG9kbyk7XG5cblx0XHR0aGlzLnN0YXRlLnRvZG9zQXJyLnB1c2godG9kby5zdGF0ZSk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xuXG5cdFx0cmV0dXJuIHRvZG87XG5cdH1cblxuXHRjcmVhdGVUb2RvRnJvbVN0b3JhZ2UoKTogdm9pZHtcblx0XHRsZXQgc3RhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcblx0XHR0aGlzLnN0YXRlID0gc3RhdGU7XG5cdFx0dGhpcy5zdGF0ZS50b2Rvc0Fyci5mb3JFYWNoKGVsID0+IHtcblx0XHRcdGxldCB0b2RvRWxlbTogSFRNTERpdkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0VsZW1lbnQoKSk7IFxuXHRcdFx0Y29uc3QgdG9kbzogVG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QodG9kb0VsZW0sIGVsLnRpdGxlLCBlbC5hcnJJdGVtcyk7XHRcdFx0IFxuXHRcdFx0dG9kby5jcmVhdGVGcm9tU3RvcmFnZSgpO1xuXHRcdFx0dGhpcy50b2Rvc0Fyci5wdXNoKHRvZG8pO1xuXHRcdH0pO1xuXHR9XG5cblx0aGFzTG9jYWxTdG9yYWdlKCk6IGJvb2xlYW57XG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpPyB0cnVlIDogZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtICB7TnVtYmVyfSBjb3VudCAtIHF1YW50aXR5IG9mIG5ldyBUb2RvTGlzdHMuXG5cdCAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBlbGVtZW50cyB3aGljaCBoYXMganVzdCBiZWVuIGFkZGVkIGluIERPTS5cblx0ICovXG5cdGNyZWF0ZVRvZG9zKGNvdW50OiBudW1iZXIpOiBBcnJheTxUb2RvTGlzdD57XG5cdFx0bGV0IGFycjogQXJyYXk8VG9kb0xpc3Q+ID0gW107XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspe1xuXHRcdFx0YXJyLnB1c2godGhpcy5jcmVhdGVUb2RvKCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyO1xuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9kb0J1aWxkZXIudHMiLCIvLyBpbXBvcnQgVG9kb0xpc3RJdGVtIGZyb20gJy4vdG9kb0xpc3RJdGVtJztcbi8vIGltcG9ydCB7IGNyZWF0ZUl0ZW1FbGVtZW50LCBJU3RhdGVMaXN0SXRlbSB9IGZyb20gJy4vdG9kb0xpc3RJdGVtJztcblxuaW1wb3J0IHsgSVN0YXRlTGlzdCwgSVN0YXRlTGlzdEl0ZW0gfSBmcm9tICcuL0lTdGF0ZXMnO1xuXG5cbmxldCBUb2RvTGlzdEl0ZW0gPSBudWxsLFxuIFx0Y3JlYXRlSXRlbUVsZW1lbnQgPSBudWxsO1xuXG5jb25zdCBQTEFDRUhPTERFUl9USVRMRSA9ICfQotC10LzQsCDQt9Cw0LzQtdGC0L7Qui4uLic7XG5jb25zdCBQTEFDRUhPTERFUl9JTlBVVCA9ICfQl9Cw0LzQtdGC0LrQsC4uLic7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9FbGVtZW50KCl7XG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkaXYuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuXHRkaXYuaW5uZXJIVE1MID0gYFxuXHRcdDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwidG9kby1mb3JtXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZGVsZXRlLXRvZG9cIj7DlzwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nd3JhcC10aXRsZS1pbnB1dCBpbnB1dCcgdGFiaW5kZXg9JzEnPlx0XHRcblx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSd0aXRsZScgLz5cblx0XHRcdFx0PGxhYmVsIGNsYXNzPSd0aXRsZS1sYWJlbCc+JHtQTEFDRUhPTERFUl9USVRMRX08L2xhYmVsPlx0XHRcdFxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPSd3cmFwLW1haW4taW5wdXQgaW5wdXQnPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9J21haW4taW5wdXQnIC8+XG5cdFx0XHRcdDxsYWJlbCBjbGFzcz0nbWFpbi1pbnB1dC1sYWJlbCc+JHtQTEFDRUhPTERFUl9JTlBVVH08L2xhYmVsPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYWRkLWl0ZW0gYnRuIG1hdC1lbGV2YXRpb24tMmRwXCIgdmFsdWU9XCJBZGRcIiAvPlxuXHRcdFx0PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPVwiY2xlYXJBbGwgYnRuIG1hdC1lbGV2YXRpb24tMmRwXCI+Q2xlYXI8L2J1dHRvbj5cblx0XHQ8L2Zvcm0+XG5cdFx0PHVsIGNsYXNzPVwidG9kby1saXN0XCI+XG5cdFx0PC91bD5cblx0YDtcblxuXHRyZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvRWxlbWVudCB9O1xuXG5cblxuXG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50cyBUb2RvTGlzdC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRvZG8gLSBET01FbGVtZW50IHdyYXAgb2YgVG9Eby5cbiAqXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSB0b2RvRWxlbSAtIERPTSBFbGVtZW50IGNvbnRhaW5lciBvZiBUb0RvIEFwcC5cbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGlucHV0IC0gdGV4dCBmaWVsZCBmb3IgY3JlYXRpbmcgbmV3IHRvZG8uXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBhZGQgLSBhZGRpbmcgdG9kbyBpbiBsaXN0ICg8dWw+KS5cbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IHVsIC0gY29udGFpbmVyIG9mIFRvZG9MaXN0SXRlbXMgKDxsaT4pLlxuICogQHByb3BlcnR5IHtBcnJheX0gYXJySXRlbXMgLSBhcnJheSB3aXRoIFRvZG9MaXN0SXRlbXMuIFxuICovXG5leHBvcnQgY2xhc3MgVG9kb0xpc3R7XG5cblx0dG9kb0VsZW06IEhUTUxEaXZFbGVtZW50O1xuXHRpbnB1dDogSFRNTElucHV0RWxlbWVudDtcblx0YWRkOiBIVE1MSW5wdXRFbGVtZW50O1xuXHR1bDogSFRNTFVMaXN0RWxlbWVudDtcblx0Y2xlYXJMaXN0OiBIVE1MQnV0dG9uRWxlbWVudDtcblx0dGl0bGVFbGVtOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRkZWxldGVUb2RvOiBIVE1MRGl2RWxlbWVudDtcblx0d3JhcElucHV0OiBIVE1MRGl2RWxlbWVudDtcblx0bGFiZWxNYWluOiBIVE1MTGFiZWxFbGVtZW50O1xuXHR3cmFwTWFpbklucHV0OiBIVE1MRGl2RWxlbWVudDtcblx0bGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XG5cdHRpdGxlOiBzdHJpbmc7XG5cdGFyckl0ZW1zOiBBcnJheTxhbnk+O1xuXHRwYXJlbnQ6IEhUTUxEaXZFbGVtZW50O1xuXHRzdGF0ZTogSVN0YXRlTGlzdDtcblxuXG5cdGNvbnN0cnVjdG9yKHRvZG86IEhUTUxEaXZFbGVtZW50ID0gbnVsbCwgdGl0bGU6IHN0cmluZyA9ICcnLCBhcnJJdGVtczpBcnJheTxJU3RhdGVMaXN0SXRlbT4gPSBbXSApe1xuXG5cdFx0dGhpcy50b2RvRWxlbSA9IHRvZG87XG5cdFx0dGhpcy5pbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMudG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLm1haW4taW5wdXQnKTtcblx0XHR0aGlzLmFkZCA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMudG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtJyk7XG5cdFx0dGhpcy51bCA9IDxIVE1MVUxpc3RFbGVtZW50PnRoaXMudG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuXHRcdHRoaXMuY2xlYXJMaXN0ID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMudG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLmNsZWFyQWxsJyk7XG5cdFx0dGhpcy50aXRsZUVsZW0gPSA8SFRNTElucHV0RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuXHRcdHRoaXMuZGVsZXRlVG9kbyA9IDxIVE1MRGl2RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtdG9kbycpO1xuXHRcdHRoaXMud3JhcElucHV0ID0gPEhUTUxEaXZFbGVtZW50PnRoaXMudG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLndyYXAtdGl0bGUtaW5wdXQnKTtcblx0XHR0aGlzLmxhYmVsTWFpbiA9ICA8SFRNTExhYmVsRWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWlucHV0LWxhYmVsJyk7XG5cdFx0dGhpcy53cmFwTWFpbklucHV0ID0gPEhUTUxEaXZFbGVtZW50PnRoaXMudG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLndyYXAtbWFpbi1pbnB1dCcpO1xuXHRcdHRoaXMubGFiZWwgPSA8SFRNTExhYmVsRWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1sYWJlbCcpO1xuXG5cdFx0dGhpcy5zZXRUaXRsZSh0aXRsZSk7XHRcdFxuXHRcdFxuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLmFyckl0ZW1zID0gW107XG5cblx0XHR0aGlzLnBhcmVudCA9IDxIVE1MRGl2RWxlbWVudD4oKCkgPT4ge1xuXHRcdFx0bGV0IGJ1aWxkOiBFbGVtZW50ID0gdGhpcy50b2RvRWxlbS5wYXJlbnRFbGVtZW50O1xuXHRcdFx0d2hpbGUoIWJ1aWxkLmNsYXNzTGlzdC5jb250YWlucygnY29udGVudC1jYW52YXMnKSl7XG5cdFx0XHRcdGJ1aWxkID0gYnVpbGQucGFyZW50RWxlbWVudDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBidWlsZDtcblx0XHR9KSgpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRpdGxlOiB0aXRsZSxcblx0XHRcdGFyckl0ZW1zXG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZGVsZXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25SZW1vdmUoZXZlbnQpKTtcblxuXHRcdHRoaXMudGl0bGVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vblR5cGUoZXZlbnQpKTtcblxuXHRcdHRoaXMud3JhcElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0aWYoZXZlbnQudGFyZ2V0ID09IHRoaXMudGl0bGVFbGVtIHx8IGV2ZW50LnRhcmdldCA9PSB0aGlzLmxhYmVsKXtcblx0XHRcdFx0aWYoIXRoaXMudGl0bGUpe1xuXHRcdFx0XHRcdHRoaXMudGl0bGVFbGVtLmZvY3VzKCk7XHRcdFx0XHRcdFx0XHRcdC8vIGZvY3VzIHRpdGxlXG5cdFx0XHRcdFx0dGhpcy5hbmltTGFiZWwodHJ1ZSwgJ2xhYmVsJyk7XHRcdFx0XHRcdFx0Ly8gYWRkIGVmZmVjdHMgZm9yIGxhYmVsXG5cdFx0XHRcdFx0dGhpcy53cmFwSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtbGluZScpOyBcdFx0Ly8gYm9yZGVyIGVmZmVjdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLnRpdGxlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChldmVudDogRXZlbnQpID0+IHtcblx0XHRcdGlmKCF0aGlzLnRpdGxlKXtcblx0XHRcdFx0dGhpcy5hbmltTGFiZWwoZmFsc2UsICdsYWJlbCcpO1x0XHRcdFx0XHRcdFx0XHQvLyByZXZlcnNlIGxhYmVsIGVmZmVjdCBcblx0XHRcdH1cblx0XHRcdHRoaXMud3JhcElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWxpbmUnKTtcdFx0XHQvLyByZW1vdmUgYm9yZGVyIGVmZmVjdFxuXHRcdH0pO1x0XHRcdFxuXG5cdFx0Ly9cdHN1YnNjcmliZSBvbiBUb2RvTGlzdEl0ZW0ncyAnY2xvc2VJdGVtJyBldmVudFxuXHRcdHRoaXMudWwuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2VJdGVtJywgKGV2ZW50OiBDdXN0b21FdmVudCkgPT4gdGhpcy5vbkRlbGV0ZUl0ZW0oZXZlbnQpKTsgIFxuXG5cdFx0dGhpcy50b2RvRWxlbS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uQWRkSXRlbShldmVudCkpO1xuXHRcdFxuXHRcdHRoaXMuY2xlYXJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5jbGVhckFsbChldmVudCkpO1xuXG5cblx0XHR0aGlzLndyYXBNYWluSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHRpZihldmVudC50YXJnZXQgPT0gdGhpcy5sYWJlbE1haW4gfHwgZXZlbnQudGFyZ2V0ID09IHRoaXMuaW5wdXQpe1xuXHRcdFx0XHRpZighdGhpcy5pbnB1dC52YWx1ZSl7XG5cdFx0XHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1x0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMuYW5pbUxhYmVsKHRydWUsICdsYWJlbE1haW4nKTtcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLndyYXBNYWluSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtbGluZScpOyBcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHRpZighdGhpcy5pbnB1dC52YWx1ZSl7XG5cdFx0XHRcdHRoaXMuYW5pbUxhYmVsKGZhbHNlLCAnbGFiZWxNYWluJyk7XHRcdFx0XHRcdFx0XHRcdCBcblx0XHRcdH1cblx0XHRcdHRoaXMud3JhcE1haW5JbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1saW5lJyk7XHRcdFx0XG5cdFx0fSk7XHRcblxuXG5cdH1cblxuXHRzZXRUaXRsZSh0ZXh0OiBzdHJpbmcpOiB2b2lke1xuXHRcdGlmKHRleHQpe1xuXHRcdFx0dGhpcy5hbmltTGFiZWwodHJ1ZSwgJ2xhYmVsJyk7XG5cdFx0XHR0aGlzLnRpdGxlRWxlbS52YWx1ZSA9IHRleHQ7XG5cdFx0XHR0aGlzLnRpdGxlID0gdGV4dDtcblx0XHR9XG5cdH1cblxuXHRhbmltTGFiZWwoZmxhZzogYm9vbGVhbiwgZWxlbTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYoZmxhZyl7XG5cdFx0XHR0aGlzW2VsZW1dLmNsYXNzTGlzdC5hZGQoJ2xhYmVsLW1vdmUnKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdHRoaXNbZWxlbV0uY2xhc3NMaXN0LnJlbW92ZSgnbGFiZWwtbW92ZScpO1xuXHRcdH1cblx0fVxuXG5cdHNldFN0YXRlKG5ld1N0YXRlOiBJU3RhdGVMaXN0KTogdm9pZHtcblx0XHR0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgbmV3U3RhdGUpO1xuXHRcdHRoaXMuZGlzcFN0YXRlQ2hhbmdlRXZlbnQoKTtcblx0fVxuXG5cdG9uUmVtb3ZlKGV2ZW50OiBFdmVudCk6IHZvaWR7XG5cdFx0bGV0IGNsb3NlRXZlbnQ6IEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdUb2RvTGlzdC5yZW1vdmUnLCB7XG5cdFx0XHQgXHRidWJibGVzOiB0cnVlLFxuXHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlLFxuXHRcdFx0XHRkZXRhaWw6e1xuXHRcdFx0XHRcdGl0ZW06IHRoaXNcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0dGhpcy50b2RvRWxlbS5kaXNwYXRjaEV2ZW50KGNsb3NlRXZlbnQpO1xuXHRcdHRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMudG9kb0VsZW0pO1xuXHR9XG5cblx0b25UeXBlKGV2ZW50OiBFdmVudCk6IHZvaWR7XG5cdFx0dGhpcy50aXRsZSA9IHRoaXMudGl0bGVFbGVtLnZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogdGhpcy50aXRsZSB9KTtcblx0fVxuXG5cdGRpc3BTdGF0ZUNoYW5nZUV2ZW50KCk6IHZvaWR7XG5cdFx0Y29uc3Qgc3RhdGVFdmVudDogRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9zdGF0ZWNoYW5nZScse1xuXHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdGRldGFpbDp7XG5cdFx0XHRcdGl0ZW06IHRoaXMsXG5cdFx0XHRcdHN0YXRlOiB0aGlzLnN0YXRlXG5cdFx0XHR9XG5cdFx0IH0pO1xuXHRcdCB0aGlzLnRvZG9FbGVtLmRpc3BhdGNoRXZlbnQoc3RhdGVFdmVudCk7XG5cdH1cblxuXHRjcmVhdGVGcm9tU3RvcmFnZSgpOiB2b2lkIHtcblx0XHRpZih0aGlzLnN0YXRlLmFyckl0ZW1zLmxlbmd0aCAhPT0gMCl7XG5cdFx0XHRpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ0b2RvLWl0ZW1cIiAqLyAnLi90b2RvTGlzdEl0ZW0nKVxuXHRcdFx0XHQudGhlbigobW9kdWxlKSA9PiB7XG5cdFx0XHRcdFx0VG9kb0xpc3RJdGVtID0gbW9kdWxlLlRvZG9MaXN0SXRlbTtcblx0XHRcdFx0XHRjcmVhdGVJdGVtRWxlbWVudCA9IG1vZHVsZS5jcmVhdGVJdGVtRWxlbWVudDtcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMuc3RhdGUuYXJySXRlbXMuZm9yRWFjaChlbCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBuZXdFbGVtOiBIVE1MTElFbGVtZW50ID0gdGhpcy51bC5hcHBlbmRDaGlsZChjcmVhdGVJdGVtRWxlbWVudCgpKTtcblx0XHRcdFx0XHRcdGNvbnN0IG9iakl0ZW0gPSAgbmV3IFRvZG9MaXN0SXRlbShuZXdFbGVtLCBlbC5jaGVja2VkLCBlbC5jb250ZW50KTtcblx0XHRcdFx0XHRcdHRoaXMuYXJySXRlbXMucHVzaChvYmpJdGVtKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdG9uQWRkSXRlbShldmVudDogRXZlbnQpOiB2b2lkIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmKCF0aGlzLmlzSW5wdXRFbXB0eSgpKXtcblx0XHRcdGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInRvZG8taXRlbVwiICovICcuL3RvZG9MaXN0SXRlbScpXG5cdFx0XHRcdC50aGVuKChtb2R1bGUpID0+IHtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRUb2RvTGlzdEl0ZW0gPSBtb2R1bGUuVG9kb0xpc3RJdGVtO1xuXHRcdFx0XHRcdGNyZWF0ZUl0ZW1FbGVtZW50ID0gbW9kdWxlLmNyZWF0ZUl0ZW1FbGVtZW50O1xuXG5cdFx0XHRcdFx0Y29uc3QgbmV3RWxlbTogSFRNTExJRWxlbWVudCA9IHRoaXMudWwuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbUVsZW1lbnQoKSk7XG5cdFx0XHRcdFx0Y29uc3Qgb2JqSXRlbSA9ICBuZXcgVG9kb0xpc3RJdGVtKG5ld0VsZW0sIG51bGwsIHRoaXMuaW5wdXQudmFsdWUpO1xuXHRcdFx0XHRcdHRoaXMuYXJySXRlbXMucHVzaChvYmpJdGVtKTtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgYXJySXRlbXM6IHRoaXMuYXJySXRlbXMubWFwKGVsID0+IGVsLnN0YXRlKX0pO1xuXHRcdFxuXHRcdFx0XHR9KTtcdFxuXHRcdH1cblx0fVxuXG5cdGlzSW5wdXRFbXB0eSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKHRoaXMuaW5wdXQudmFsdWUpID8gZmFsc2UgOiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBvYmogd2l0aCBzdHlsZXMgIFxuXHQgKi9cblx0c2V0U3R5bGUob2JqOiBhbnkpOiB2b2lke1xuXHRcdGZvcihsZXQgcHJvcCBpbiBvYmope1xuXHRcdFx0dGhpcy50b2RvRWxlbS5zdHlsZVtwcm9wXSA9IG9ialtwcm9wXTtcblx0XHR9XG5cdH1cblxuXHRvbkRlbGV0ZUl0ZW0oZXZlbnQ6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG5cdFx0Y29uc3QgZWxlbSA9IGV2ZW50LmRldGFpbC5pdGVtO1xuXHRcdHRoaXMuYXJySXRlbXMgPSB0aGlzLmFyckl0ZW1zLmZpbHRlcihlbCA9PiBlbCAhPT0gZWxlbSk7XG5cdFx0XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGFyckl0ZW1zOiB0aGlzLmFyckl0ZW1zLm1hcChlbCA9PiBlbC5zdGF0ZSl9KTtcblx0fVxuXG5cdC8vIGNsZWFyIGxpc3Qgb2YgaXRlbXNcblx0Y2xlYXJBbGwoZXZlbnQ6IEV2ZW50KTogdm9pZHtcblx0XHRpZih0aGlzLmFyckl0ZW1zLmxlbmd0aCAhPT0gMCl7XG5cdFx0XHR0aGlzLmFyckl0ZW1zLmZvckVhY2goZWxlbSA9PiBlbGVtLnJlbW92ZSgpKTtcblx0XHRcdHRoaXMuYXJySXRlbXMgPSBbXTtcblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFyckl0ZW1zOiBbXSB9KTtcblx0XHR9XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b2RvTGlzdC50cyJdLCJzb3VyY2VSb290IjoiIn0=