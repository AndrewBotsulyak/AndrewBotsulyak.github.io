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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzRiZGM4MmE4OTYxNjZkZWNkZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy90b2RvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9kby1saXN0L3RvZG8tbGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3RvZG8tbGlzdC8tLWl0ZW0vdG9kby1saXN0LS1pdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9vbGJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tYW5pZmVzdC5qc29uIiwid2VicGFjazovLy8uL3NyYy9qcy90b2RvQnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9kb0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxXQUFXLEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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LENBQUM7WUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDRixDQUFDO0NBRUQ7QUF0TkQsNEJBc05DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0cyB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQxOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSA9PT0gMCkge1xuIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoKTsgfSk7XG4gXHRcdH1cblxuIFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtEYXRhWzJdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHR9KTtcbiBcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZTtcblxuIFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG4gXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwMDAwO1xuXG4gXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHR9XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcIjBcIjpcInRvZG8taXRlbVwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRjaHVua1sxXShuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC4nKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiBcdFx0cmV0dXJuIHByb21pc2U7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NGJkYzgyYTg5NjE2NmRlY2RmNSIsImltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5pbXBvcnQgJy4vc2Nzcy90b2RvLnNjc3MnO1xuaW1wb3J0ICcuL3Njc3MvdG9kby1saXN0L3RvZG8tbGlzdC5zY3NzJztcbmltcG9ydCAnLi9zY3NzL3RvZG8tbGlzdC8tLWl0ZW0vdG9kby1saXN0LS1pdGVtLnNjc3MnO1xuXG5pbXBvcnQgJy4vc2Nzcy90b29sYmFyLnNjc3MnO1xuXG5pbXBvcnQgJy4vc2Nzcy9idXR0b25zLnNjc3MnO1xuXG5pbXBvcnQgJy4uL21hbmlmZXN0Lmpzb24nO1xuXG5pbXBvcnQgVG9kb0J1aWxkZXIgZnJvbSAnLi9qcy90b2RvQnVpbGRlcic7IFxuXG5jb25zdCBjb250YWluZXIgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY2FudmFzJyk7XG5cbmNvbnN0IGJ1aWxkOiBUb2RvQnVpbGRlciA9IG5ldyBUb2RvQnVpbGRlcihjb250YWluZXIpO1xuc3RhcnQoKTtcblxuXG5pZignc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKXtcblxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvVG9kb0xpc3Qvc3cuanMnKSBcbiAgICAgICAgLnRoZW4oKHJlZykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFJlZ2lzdHJhdGlvbiBzdWNjZWVkZWQuIFNjb3BlIGlzICR7cmVnLnNjb3BlfWApO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZWdpc3RyYXRpb24gaXMgZmFpbGVkICR7ZXJyfWApO1xuICAgICAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBzdGFydCgpe1xuICAgIGlmKGJ1aWxkLmhhc0xvY2FsU3RvcmFnZSgpKXtcbiAgICAgICAgYnVpbGQuY3JlYXRlVG9kb0Zyb21TdG9yYWdlKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGJ1aWxkLmNyZWF0ZVRvZG8oKTtcbiAgICB9XG59IFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4udHMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvdG9kby5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy90b2RvLWxpc3QvdG9kby1saXN0LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3RvZG8tbGlzdC8tLWl0ZW0vdG9kby1saXN0LS1pdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3Rvb2xiYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvYnV0dG9ucy5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0ge1wibmFtZVwiOlwiVG9ETyBMaXN0XCIsXCJzaG9ydF9uYW1lXCI6XCJUb0RvXCIsXCJpY29uc1wiOlt7XCJzcmNcIjpcIi9mYXZpY29uL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nXCIsXCJzaXplc1wiOlwiMTkyeDE5MlwiLFwidHlwZVwiOlwiaW1hZ2UvcG5nXCJ9LHtcInNyY1wiOlwiL2Zhdmljb24vYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmdcIixcInNpemVzXCI6XCI1MTJ4NTEyXCIsXCJ0eXBlXCI6XCJpbWFnZS9wbmdcIn1dLFwidGhlbWVfY29sb3JcIjpcIiNmZmZmZmZcIixcImJhY2tncm91bmRfY29sb3JcIjpcIiNmZmZmZmZcIixcInN0YXJ0X3VybFwiOlwiaHR0cHM6Ly9hbmRyZXdib3RzdWx5YWsuZ2l0aHViLmlvL1RvZG9MaXN0L1wiLFwiZGlzcGxheVwiOlwic3RhbmRhbG9uZVwifVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFuaWZlc3QuanNvblxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgeyBUb2RvTGlzdCwgY3JlYXRlVG9kb0VsZW1lbnQgfSBmcm9tICcuL3RvZG9MaXN0JztcbmltcG9ydCB7IElTdGF0ZSwgSVN0YXRlTGlzdCB9IGZyb20gJy4vSVN0YXRlcyc7XG5cblxuaW50ZXJmYWNlIElDdXN0b21FdmVudHtcblxufVxuXG4vKipcbiAqIGNsYXNzIGNyZWF0ZSBhbGwgVG9kb0xpc3RzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgLSBET01FbGVtZW50IGNvbnRhaW5lciBvZiBUb2RvTGlzdHMuXG4gKlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gY29udGFpbmVyRWxlbSAtIERPTUVsZW1lbnQgY29udGFpbmVyIG9mIFRvZG9MaXN0cy5cbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IHRvZG9zQXJyIC0gYXJyYXkgd2l0aCBhbGwgVG9kb0xpc3RzLlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gYnRuQWRkVG9kbyAtIGJ0biB3aGljaCBpcyBhZGRlZCBuZXcgVG9kb0xpc3QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9CdWlsZGVye1xuXG5cdGNvbnRhaW5lckVsZW06IEhUTUxEaXZFbGVtZW50O1xuXHR0b2Rvc0FycjogQXJyYXk8VG9kb0xpc3Q+O1xuXHRidG5BZGRUb2RvOiBIVE1MQnV0dG9uRWxlbWVudDtcblx0c3RhdGU6IElTdGF0ZTtcblxuXHRjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KXtcblxuXHRcdHRoaXMuY29udGFpbmVyRWxlbSA9IGNvbnRhaW5lcjtcblx0XHR0aGlzLnRvZG9zQXJyID0gW107XG5cdFx0dGhpcy5idG5BZGRUb2RvID0gPEhUTUxCdXR0b25FbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idWlsZC10b2RvJyk7XG5cblx0XHRcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0b2Rvc0FycjogW11cblx0XHR9XG5cblx0XHR0aGlzLmJ0bkFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uQnVpbGQoZXZlbnQpKTtcblxuXHRcdHRoaXMuY29udGFpbmVyRWxlbS5hZGRFdmVudExpc3RlbmVyKCdUb2RvTGlzdC5yZW1vdmUnLCAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB0aGlzLnJlbW92ZVRvZG8oZXZlbnQpKTtcblxuXHRcdHRoaXMuY29udGFpbmVyRWxlbS5hZGRFdmVudExpc3RlbmVyKCd0b2Rvc3RhdGVjaGFuZ2UnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLnVwZGF0ZVN0b3JhZ2UoZXZlbnQpKTtcblxuXHR9XG5cblx0dXBkYXRlU3RvcmFnZShldmVudDogRXZlbnQpOiB2b2lke1xuXG5cdFx0dGhpcy5zdGF0ZS50b2Rvc0Fyci5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuXHRcdFx0dG9kby5hcnJJdGVtcyA9IHRoaXMudG9kb3NBcnJbaW5kZXhdLmFyckl0ZW1zLm1hcChlbCA9PiB7XG5cdFx0XHRcdHJldHVybiBlbC5zdGF0ZTtcblx0XHRcdH0pO1xuXHRcdFx0dG9kby50aXRsZSA9IHRoaXMudG9kb3NBcnJbaW5kZXhdLnN0YXRlLnRpdGxlO1xuXHRcdH0pO1xuXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xuXHR9XG5cblx0b25CdWlsZChldmVudDogRXZlbnQpOiB2b2lke1xuXHRcdHRoaXMuY3JlYXRlVG9kbygpO1xuXHR9XG5cblx0cmVtb3ZlVG9kbyhldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lke1xuXHRcdGNvbnN0IGVsZW06IFRvZG9MaXN0ID0gZXZlbnQuZGV0YWlsLml0ZW07XG5cdFx0Y29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMudG9kb3NBcnIuZmluZEluZGV4KGVsID0+IGVsID09PSBlbGVtKTtcdFx0XG5cdFx0dGhpcy50b2Rvc0FyciA9IHRoaXMudG9kb3NBcnIuZmlsdGVyKGVsID0+IGVsICE9PSBlbGVtKTtcblx0XHR0aGlzLnN0YXRlLnRvZG9zQXJyID0gdGhpcy5zdGF0ZS50b2Rvc0Fyci5maWx0ZXIoKGVsLCBpKSA9PiBpICE9PSBpbmRleCk7XG5cdFx0aWYodGhpcy50b2Rvc0Fyci5sZW5ndGggPT09IDApe1xuXHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvZG9zJyk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEByZXR1cm4ge1RvZG9MaXN0fSBqdXN0IGNyZWF0ZWQuXG5cdCAqL1xuXHRjcmVhdGVUb2RvKCk6IFRvZG9MaXN0e1xuXHRcdGxldCB0b2RvRWxlbTogSFRNTERpdkVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lckVsZW0uYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0VsZW1lbnQoKSk7IFxuXHRcdGNvbnN0IHRvZG86IFRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KHRvZG9FbGVtKTtcdFx0XHQgXG5cdFx0dG9kby5jcmVhdGVGcm9tU3RvcmFnZSgpO1xuXHRcdHRoaXMudG9kb3NBcnIucHVzaCh0b2RvKTtcblxuXHRcdHRoaXMuc3RhdGUudG9kb3NBcnIucHVzaCh0b2RvLnN0YXRlKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XG5cblx0XHRyZXR1cm4gdG9kbztcblx0fVxuXG5cdGNyZWF0ZVRvZG9Gcm9tU3RvcmFnZSgpOiB2b2lke1xuXHRcdGxldCBzdGF0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xuXHRcdHRoaXMuc3RhdGUgPSBzdGF0ZTtcblx0XHR0aGlzLnN0YXRlLnRvZG9zQXJyLmZvckVhY2goZWwgPT4ge1xuXHRcdFx0bGV0IHRvZG9FbGVtOiBIVE1MRGl2RWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUb2RvRWxlbWVudCgpKTsgXG5cdFx0XHRjb25zdCB0b2RvOiBUb2RvTGlzdCA9IG5ldyBUb2RvTGlzdCh0b2RvRWxlbSwgZWwudGl0bGUsIGVsLmFyckl0ZW1zKTtcdFx0XHQgXG5cdFx0XHR0b2RvLmNyZWF0ZUZyb21TdG9yYWdlKCk7XG5cdFx0XHR0aGlzLnRvZG9zQXJyLnB1c2godG9kbyk7XG5cdFx0fSk7XG5cdH1cblxuXHRoYXNMb2NhbFN0b3JhZ2UoKTogYm9vbGVhbntcblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJyk/IHRydWUgOiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gIHtOdW1iZXJ9IGNvdW50IC0gcXVhbnRpdHkgb2YgbmV3IFRvZG9MaXN0cy5cblx0ICogQHJldHVybiB7QXJyYXl9IGFycmF5IG9mIGVsZW1lbnRzIHdoaWNoIGhhcyBqdXN0IGJlZW4gYWRkZWQgaW4gRE9NLlxuXHQgKi9cblx0Y3JlYXRlVG9kb3MoY291bnQ6IG51bWJlcik6IEFycmF5PFRvZG9MaXN0Pntcblx0XHRsZXQgYXJyOiBBcnJheTxUb2RvTGlzdD4gPSBbXTtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKyl7XG5cdFx0XHRhcnIucHVzaCh0aGlzLmNyZWF0ZVRvZG8oKSk7XG5cdFx0fVxuXHRcdHJldHVybiBhcnI7XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90b2RvQnVpbGRlci50cyIsIi8vIGltcG9ydCBUb2RvTGlzdEl0ZW0gZnJvbSAnLi90b2RvTGlzdEl0ZW0nO1xuLy8gaW1wb3J0IHsgY3JlYXRlSXRlbUVsZW1lbnQsIElTdGF0ZUxpc3RJdGVtIH0gZnJvbSAnLi90b2RvTGlzdEl0ZW0nO1xuXG5pbXBvcnQgeyBJU3RhdGVMaXN0LCBJU3RhdGVMaXN0SXRlbSB9IGZyb20gJy4vSVN0YXRlcyc7XG5cblxubGV0IFRvZG9MaXN0SXRlbSA9IG51bGwsXG4gXHRjcmVhdGVJdGVtRWxlbWVudCA9IG51bGw7XG5cbmNvbnN0IFBMQUNFSE9MREVSX1RJVExFID0gJ9Ci0LXQvNCwINC30LDQvNC10YLQvtC6Li4uJztcbmNvbnN0IFBMQUNFSE9MREVSX0lOUFVUID0gJ9CX0LDQvNC10YLQutCwLi4uJztcblxuZnVuY3Rpb24gY3JlYXRlVG9kb0VsZW1lbnQoKXtcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRpdi5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG5cdGRpdi5pbm5lckhUTUwgPSBgXG5cdFx0PGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJ0b2RvLWZvcm1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJkZWxldGUtdG9kb1wiPsOXPC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPSd3cmFwLXRpdGxlLWlucHV0IGlucHV0JyB0YWJpbmRleD0nMSc+XHRcdFxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9J3RpdGxlJyAvPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3M9J3RpdGxlLWxhYmVsJz4ke1BMQUNFSE9MREVSX1RJVExFfTwvbGFiZWw+XHRcdFx0XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9J3dyYXAtbWFpbi1pbnB1dCBpbnB1dCc+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0nbWFpbi1pbnB1dCcgLz5cblx0XHRcdFx0PGxhYmVsIGNsYXNzPSdtYWluLWlucHV0LWxhYmVsJz4ke1BMQUNFSE9MREVSX0lOUFVUfTwvbGFiZWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJhZGQtaXRlbSBidG4gbWF0LWVsZXZhdGlvbi0yZHBcIiB2YWx1ZT1cIkFkZFwiIC8+XG5cdFx0XHQ8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9XCJjbGVhckFsbCBidG4gbWF0LWVsZXZhdGlvbi0yZHBcIj5DbGVhcjwvYnV0dG9uPlxuXHRcdDwvZm9ybT5cblx0XHQ8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cblx0XHQ8L3VsPlxuXHRgO1xuXG5cdHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG9FbGVtZW50IH07XG5cblxuXG5cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRzIFRvZG9MaXN0LlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdG9kbyAtIERPTUVsZW1lbnQgd3JhcCBvZiBUb0RvLlxuICpcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IHRvZG9FbGVtIC0gRE9NIEVsZW1lbnQgY29udGFpbmVyIG9mIFRvRG8gQXBwLlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gaW5wdXQgLSB0ZXh0IGZpZWxkIGZvciBjcmVhdGluZyBuZXcgdG9kby5cbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGFkZCAtIGFkZGluZyB0b2RvIGluIGxpc3QgKDx1bD4pLlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gdWwgLSBjb250YWluZXIgb2YgVG9kb0xpc3RJdGVtcyAoPGxpPikuXG4gKiBAcHJvcGVydHkge0FycmF5fSBhcnJJdGVtcyAtIGFycmF5IHdpdGggVG9kb0xpc3RJdGVtcy4gXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdHtcblxuXHR0b2RvRWxlbTogSFRNTERpdkVsZW1lbnQ7XG5cdGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXHRhZGQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdHVsOiBIVE1MVUxpc3RFbGVtZW50O1xuXHRjbGVhckxpc3Q6IEhUTUxCdXR0b25FbGVtZW50O1xuXHR0aXRsZUVsZW06IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdGRlbGV0ZVRvZG86IEhUTUxEaXZFbGVtZW50O1xuXHR3cmFwSW5wdXQ6IEhUTUxEaXZFbGVtZW50O1xuXHRsYWJlbE1haW46IEhUTUxMYWJlbEVsZW1lbnQ7XG5cdHdyYXBNYWluSW5wdXQ6IEhUTUxEaXZFbGVtZW50O1xuXHRsYWJlbDogSFRNTExhYmVsRWxlbWVudDtcblx0dGl0bGU6IHN0cmluZztcblx0YXJySXRlbXM6IEFycmF5PGFueT47XG5cdHBhcmVudDogSFRNTERpdkVsZW1lbnQ7XG5cdHN0YXRlOiBJU3RhdGVMaXN0O1xuXG5cblx0Y29uc3RydWN0b3IodG9kbzogSFRNTERpdkVsZW1lbnQgPSBudWxsLCB0aXRsZTogc3RyaW5nID0gJycsIGFyckl0ZW1zOkFycmF5PElTdGF0ZUxpc3RJdGVtPiA9IFtdICl7XG5cblx0XHR0aGlzLnRvZG9FbGVtID0gdG9kbztcblx0XHR0aGlzLmlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcubWFpbi1pbnB1dCcpO1xuXHRcdHRoaXMuYWRkID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0nKTtcblx0XHR0aGlzLnVsID0gPEhUTUxVTGlzdEVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG5cdFx0dGhpcy5jbGVhckxpc3QgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcuY2xlYXJBbGwnKTtcblx0XHR0aGlzLnRpdGxlRWxlbSA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMudG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XG5cdFx0dGhpcy5kZWxldGVUb2RvID0gPEhUTUxEaXZFbGVtZW50PnRoaXMudG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLmRlbGV0ZS10b2RvJyk7XG5cdFx0dGhpcy53cmFwSW5wdXQgPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcud3JhcC10aXRsZS1pbnB1dCcpO1xuXHRcdHRoaXMubGFiZWxNYWluID0gIDxIVE1MTGFiZWxFbGVtZW50PnRoaXMudG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLm1haW4taW5wdXQtbGFiZWwnKTtcblx0XHR0aGlzLndyYXBNYWluSW5wdXQgPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcud3JhcC1tYWluLWlucHV0Jyk7XG5cdFx0dGhpcy5sYWJlbCA9IDxIVE1MTGFiZWxFbGVtZW50PnRoaXMudG9kb0VsZW0ucXVlcnlTZWxlY3RvcignLnRpdGxlLWxhYmVsJyk7XG5cblx0XHR0aGlzLnNldFRpdGxlKHRpdGxlKTtcdFx0XG5cdFx0XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuYXJySXRlbXMgPSBbXTtcblxuXHRcdHRoaXMucGFyZW50ID0gPEhUTUxEaXZFbGVtZW50PigoKSA9PiB7XG5cdFx0XHRsZXQgYnVpbGQ6IEVsZW1lbnQgPSB0aGlzLnRvZG9FbGVtLnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR3aGlsZSghYnVpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250ZW50LWNhbnZhcycpKXtcblx0XHRcdFx0YnVpbGQgPSBidWlsZC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJ1aWxkO1xuXHRcdH0pKCk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dGl0bGU6IHRpdGxlLFxuXHRcdFx0YXJySXRlbXNcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5kZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vblJlbW92ZShldmVudCkpO1xuXG5cdFx0dGhpcy50aXRsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uVHlwZShldmVudCkpO1xuXG5cdFx0dGhpcy53cmFwSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHRpZihldmVudC50YXJnZXQgPT0gdGhpcy50aXRsZUVsZW0gfHwgZXZlbnQudGFyZ2V0ID09IHRoaXMubGFiZWwpe1xuXHRcdFx0XHRpZighdGhpcy50aXRsZSl7XG5cdFx0XHRcdFx0dGhpcy50aXRsZUVsZW0uZm9jdXMoKTtcdFx0XHRcdFx0XHRcdFx0Ly8gZm9jdXMgdGl0bGVcblx0XHRcdFx0XHR0aGlzLmFuaW1MYWJlbCh0cnVlLCAnbGFiZWwnKTtcdFx0XHRcdFx0XHQvLyBhZGQgZWZmZWN0cyBmb3IgbGFiZWxcblx0XHRcdFx0XHR0aGlzLndyYXBJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1saW5lJyk7IFx0XHQvLyBib3JkZXIgZWZmZWN0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMudGl0bGVFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0aWYoIXRoaXMudGl0bGUpe1xuXHRcdFx0XHR0aGlzLmFuaW1MYWJlbChmYWxzZSwgJ2xhYmVsJyk7XHRcdFx0XHRcdFx0XHRcdC8vIHJldmVyc2UgbGFiZWwgZWZmZWN0IFxuXHRcdFx0fVxuXHRcdFx0dGhpcy53cmFwSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtbGluZScpO1x0XHRcdC8vIHJlbW92ZSBib3JkZXIgZWZmZWN0XG5cdFx0fSk7XHRcdFx0XG5cblx0XHQvL1x0c3Vic2NyaWJlIG9uIFRvZG9MaXN0SXRlbSdzICdjbG9zZUl0ZW0nIGV2ZW50XG5cdFx0dGhpcy51bC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZUl0ZW0nLCAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB0aGlzLm9uRGVsZXRlSXRlbShldmVudCkpOyAgXG5cblx0XHR0aGlzLnRvZG9FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudDogRXZlbnQpID0+IHRoaXMub25BZGRJdGVtKGV2ZW50KSk7XG5cdFx0XG5cdFx0dGhpcy5jbGVhckxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLmNsZWFyQWxsKGV2ZW50KSk7XG5cblxuXHRcdHRoaXMud3JhcE1haW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHtcblx0XHRcdGlmKGV2ZW50LnRhcmdldCA9PSB0aGlzLmxhYmVsTWFpbiB8fCBldmVudC50YXJnZXQgPT0gdGhpcy5pbnB1dCl7XG5cdFx0XHRcdGlmKCF0aGlzLmlucHV0LnZhbHVlKXtcblx0XHRcdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5hbmltTGFiZWwodHJ1ZSwgJ2xhYmVsTWFpbicpO1x0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMud3JhcE1haW5JbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1saW5lJyk7IFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChldmVudDogRXZlbnQpID0+IHtcblx0XHRcdGlmKCF0aGlzLmlucHV0LnZhbHVlKXtcblx0XHRcdFx0dGhpcy5hbmltTGFiZWwoZmFsc2UsICdsYWJlbE1haW4nKTtcdFx0XHRcdFx0XHRcdFx0IFxuXHRcdFx0fVxuXHRcdFx0dGhpcy53cmFwTWFpbklucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0LWxpbmUnKTtcdFx0XHRcblx0XHR9KTtcdFxuXG5cblx0fVxuXG5cdHNldFRpdGxlKHRleHQ6IHN0cmluZyk6IHZvaWR7XG5cdFx0aWYodGV4dCl7XG5cdFx0XHR0aGlzLmFuaW1MYWJlbCh0cnVlLCAnbGFiZWwnKTtcblx0XHRcdHRoaXMudGl0bGVFbGVtLnZhbHVlID0gdGV4dDtcblx0XHRcdHRoaXMudGl0bGUgPSB0ZXh0O1xuXHRcdH1cblx0fVxuXG5cdGFuaW1MYWJlbChmbGFnOiBib29sZWFuLCBlbGVtOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZihmbGFnKXtcblx0XHRcdHRoaXNbZWxlbV0uY2xhc3NMaXN0LmFkZCgnbGFiZWwtbW92ZScpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0dGhpc1tlbGVtXS5jbGFzc0xpc3QucmVtb3ZlKCdsYWJlbC1tb3ZlJyk7XG5cdFx0fVxuXHR9XG5cblx0c2V0U3RhdGUobmV3U3RhdGU6IElTdGF0ZUxpc3QpOiB2b2lke1xuXHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXdTdGF0ZSk7XG5cdFx0dGhpcy5kaXNwU3RhdGVDaGFuZ2VFdmVudCgpO1xuXHR9XG5cblx0b25SZW1vdmUoZXZlbnQ6IEV2ZW50KTogdm9pZHtcblx0XHRsZXQgY2xvc2VFdmVudDogRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ1RvZG9MaXN0LnJlbW92ZScsIHtcblx0XHRcdCBcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWUsXG5cdFx0XHRcdGRldGFpbDp7XG5cdFx0XHRcdFx0aXRlbTogdGhpc1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR0aGlzLnRvZG9FbGVtLmRpc3BhdGNoRXZlbnQoY2xvc2VFdmVudCk7XG5cdFx0dGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy50b2RvRWxlbSk7XG5cdH1cblxuXHRvblR5cGUoZXZlbnQ6IEV2ZW50KTogdm9pZHtcblx0XHR0aGlzLnRpdGxlID0gdGhpcy50aXRsZUVsZW0udmFsdWU7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHRpdGxlOiB0aGlzLnRpdGxlIH0pO1xuXHR9XG5cblx0ZGlzcFN0YXRlQ2hhbmdlRXZlbnQoKTogdm9pZHtcblx0XHRjb25zdCBzdGF0ZUV2ZW50OiBFdmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9kb3N0YXRlY2hhbmdlJyx7XG5cdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0ZGV0YWlsOntcblx0XHRcdFx0aXRlbTogdGhpcyxcblx0XHRcdFx0c3RhdGU6IHRoaXMuc3RhdGVcblx0XHRcdH1cblx0XHQgfSk7XG5cdFx0IHRoaXMudG9kb0VsZW0uZGlzcGF0Y2hFdmVudChzdGF0ZUV2ZW50KTtcblx0fVxuXG5cdGNyZWF0ZUZyb21TdG9yYWdlKCk6IHZvaWQge1xuXHRcdGlmKHRoaXMuc3RhdGUuYXJySXRlbXMubGVuZ3RoICE9PSAwKXtcblx0XHRcdGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInRvZG8taXRlbVwiICovICcuL3RvZG9MaXN0SXRlbScpXG5cdFx0XHRcdC50aGVuKChtb2R1bGUpID0+IHtcblx0XHRcdFx0XHRUb2RvTGlzdEl0ZW0gPSBtb2R1bGUuVG9kb0xpc3RJdGVtO1xuXHRcdFx0XHRcdGNyZWF0ZUl0ZW1FbGVtZW50ID0gbW9kdWxlLmNyZWF0ZUl0ZW1FbGVtZW50O1x0XHRcblx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5hcnJJdGVtcy5mb3JFYWNoKGVsID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld0VsZW06IEhUTUxMSUVsZW1lbnQgPSB0aGlzLnVsLmFwcGVuZENoaWxkKGNyZWF0ZUl0ZW1FbGVtZW50KCkpO1xuXHRcdFx0XHRcdFx0Y29uc3Qgb2JqSXRlbSA9ICBuZXcgVG9kb0xpc3RJdGVtKG5ld0VsZW0sIGVsLmNoZWNrZWQsIGVsLmNvbnRlbnQpO1xuXHRcdFx0XHRcdFx0dGhpcy5hcnJJdGVtcy5wdXNoKG9iakl0ZW0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0b25BZGRJdGVtKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYoIXRoaXMuaXNJbnB1dEVtcHR5KCkpe1xuXHRcdFx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidG9kby1pdGVtXCIgKi8gJy4vdG9kb0xpc3RJdGVtJylcblx0XHRcdFx0LnRoZW4oKG1vZHVsZSkgPT4ge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFRvZG9MaXN0SXRlbSA9IG1vZHVsZS5Ub2RvTGlzdEl0ZW07XG5cdFx0XHRcdFx0Y3JlYXRlSXRlbUVsZW1lbnQgPSBtb2R1bGUuY3JlYXRlSXRlbUVsZW1lbnQ7XG5cblx0XHRcdFx0XHRjb25zdCBuZXdFbGVtOiBIVE1MTElFbGVtZW50ID0gdGhpcy51bC5hcHBlbmRDaGlsZChjcmVhdGVJdGVtRWxlbWVudCgpKTtcblx0XHRcdFx0XHRjb25zdCBvYmpJdGVtID0gIG5ldyBUb2RvTGlzdEl0ZW0obmV3RWxlbSwgbnVsbCwgdGhpcy5pbnB1dC52YWx1ZSk7XG5cdFx0XHRcdFx0dGhpcy5hcnJJdGVtcy5wdXNoKG9iakl0ZW0pO1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhcnJJdGVtczogdGhpcy5hcnJJdGVtcy5tYXAoZWwgPT4gZWwuc3RhdGUpfSk7XG5cdFx0XG5cdFx0XHRcdH0pO1x0XG5cdFx0fVxuXHR9XG5cblx0aXNJbnB1dEVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAodGhpcy5pbnB1dC52YWx1ZSkgPyBmYWxzZSA6IHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIG9iaiB3aXRoIHN0eWxlcyAgXG5cdCAqL1xuXHRzZXRTdHlsZShvYmo6IGFueSk6IHZvaWR7XG5cdFx0Zm9yKGxldCBwcm9wIGluIG9iail7XG5cdFx0XHR0aGlzLnRvZG9FbGVtLnN0eWxlW3Byb3BdID0gb2JqW3Byb3BdO1xuXHRcdH1cblx0fVxuXG5cdG9uRGVsZXRlSXRlbShldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcblx0XHRjb25zdCBlbGVtID0gZXZlbnQuZGV0YWlsLml0ZW07XG5cdFx0dGhpcy5hcnJJdGVtcyA9IHRoaXMuYXJySXRlbXMuZmlsdGVyKGVsID0+IGVsICE9PSBlbGVtKTtcblx0XHRcblx0XHR0aGlzLnNldFN0YXRlKHsgYXJySXRlbXM6IHRoaXMuYXJySXRlbXMubWFwKGVsID0+IGVsLnN0YXRlKX0pO1xuXHR9XG5cblx0Ly8gY2xlYXIgbGlzdCBvZiBpdGVtc1xuXHRjbGVhckFsbChldmVudDogRXZlbnQpOiB2b2lke1xuXHRcdGlmKHRoaXMuYXJySXRlbXMubGVuZ3RoICE9PSAwKXtcblx0XHRcdHRoaXMuYXJySXRlbXMuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xuXHRcdFx0dGhpcy5hcnJJdGVtcyA9IFtdO1xuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYXJySXRlbXM6IFtdIH0pO1xuXHRcdH1cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RvZG9MaXN0LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==