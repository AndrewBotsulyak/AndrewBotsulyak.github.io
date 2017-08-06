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
/******/ 	__webpack_require__.p = "dist/";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjdmOWQyOTc5MGM1OWNkYmIwNDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy90b2RvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9kby1saXN0L3RvZG8tbGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3RvZG8tbGlzdC8tLWl0ZW0vdG9kby1saXN0LS1pdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9vbGJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tYW5pZmVzdC5qc29uIiwid2VicGFjazovLy8uL3NyYy9qcy90b2RvQnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9kb0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxXQUFXLEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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LENBQUM7WUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDRixDQUFDO0NBRUQ7QUF0TkQsNEJBc05DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0cyB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQxOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSA9PT0gMCkge1xuIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoKTsgfSk7XG4gXHRcdH1cblxuIFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtEYXRhWzJdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHR9KTtcbiBcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZTtcblxuIFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG4gXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwMDAwO1xuXG4gXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHR9XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcIjBcIjpcInRvZG8taXRlbVwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRjaHVua1sxXShuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC4nKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiBcdFx0cmV0dXJuIHByb21pc2U7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3QvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY3ZjlkMjk3OTBjNTljZGJiMDQ5IiwiaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5cbmltcG9ydCAnLi9zY3NzL3RvZG8uc2Nzcyc7XG5pbXBvcnQgJy4vc2Nzcy90b2RvLWxpc3QvdG9kby1saXN0LnNjc3MnO1xuaW1wb3J0ICcuL3Njc3MvdG9kby1saXN0Ly0taXRlbS90b2RvLWxpc3QtLWl0ZW0uc2Nzcyc7XG5cbmltcG9ydCAnLi9zY3NzL3Rvb2xiYXIuc2Nzcyc7XG5cbmltcG9ydCAnLi9zY3NzL2J1dHRvbnMuc2Nzcyc7XG5cbmltcG9ydCAnLi4vbWFuaWZlc3QuanNvbic7XG5cbmltcG9ydCBUb2RvQnVpbGRlciBmcm9tICcuL2pzL3RvZG9CdWlsZGVyJzsgXG5cbmNvbnN0IGNvbnRhaW5lciA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jYW52YXMnKTtcblxuY29uc3QgYnVpbGQ6IFRvZG9CdWlsZGVyID0gbmV3IFRvZG9CdWlsZGVyKGNvbnRhaW5lcik7XG5zdGFydCgpO1xuXG5cbmlmKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3Ipe1xuXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9Ub2RvTGlzdC9zdy5qcycpIFxuICAgICAgICAudGhlbigocmVnKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVnaXN0cmF0aW9uIHN1Y2NlZWRlZC4gU2NvcGUgaXMgJHtyZWcuc2NvcGV9YCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFJlZ2lzdHJhdGlvbiBpcyBmYWlsZWQgJHtlcnJ9YCk7XG4gICAgICAgIH0pO1xufVxuXG5cbmZ1bmN0aW9uIHN0YXJ0KCl7XG4gICAgaWYoYnVpbGQuaGFzTG9jYWxTdG9yYWdlKCkpe1xuICAgICAgICBidWlsZC5jcmVhdGVUb2RvRnJvbVN0b3JhZ2UoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYnVpbGQuY3JlYXRlVG9kbygpO1xuICAgIH1cbn0gXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy90b2RvLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3RvZG8tbGlzdC90b2RvLWxpc3Quc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvdG9kby1saXN0Ly0taXRlbS90b2RvLWxpc3QtLWl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvdG9vbGJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy9idXR0b25zLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJuYW1lXCI6XCJUb0RPIExpc3RcIixcInNob3J0X25hbWVcIjpcIlRvRG9cIixcImljb25zXCI6W3tcInNyY1wiOlwiL2Zhdmljb24vYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmdcIixcInNpemVzXCI6XCIxOTJ4MTkyXCIsXCJ0eXBlXCI6XCJpbWFnZS9wbmdcIn0se1wic3JjXCI6XCIvZmF2aWNvbi9hbmRyb2lkLWNocm9tZS01MTJ4NTEyLnBuZ1wiLFwic2l6ZXNcIjpcIjUxMng1MTJcIixcInR5cGVcIjpcImltYWdlL3BuZ1wifV0sXCJ0aGVtZV9jb2xvclwiOlwiI2ZmZmZmZlwiLFwiYmFja2dyb3VuZF9jb2xvclwiOlwiI2ZmZmZmZlwiLFwic3RhcnRfdXJsXCI6XCJodHRwczovL2FuZHJld2JvdHN1bHlhay5naXRodWIuaW8vVG9kb0xpc3QvXCIsXCJkaXNwbGF5XCI6XCJzdGFuZGFsb25lXCJ9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYW5pZmVzdC5qc29uXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IFRvZG9MaXN0LCBjcmVhdGVUb2RvRWxlbWVudCB9IGZyb20gJy4vdG9kb0xpc3QnO1xuaW1wb3J0IHsgSVN0YXRlLCBJU3RhdGVMaXN0IH0gZnJvbSAnLi9JU3RhdGVzJztcblxuXG5pbnRlcmZhY2UgSUN1c3RvbUV2ZW50e1xuXG59XG5cbi8qKlxuICogY2xhc3MgY3JlYXRlIGFsbCBUb2RvTGlzdHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIERPTUVsZW1lbnQgY29udGFpbmVyIG9mIFRvZG9MaXN0cy5cbiAqXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBjb250YWluZXJFbGVtIC0gRE9NRWxlbWVudCBjb250YWluZXIgb2YgVG9kb0xpc3RzLlxuICogQHByb3BlcnR5IHtBcnJheX0gdG9kb3NBcnIgLSBhcnJheSB3aXRoIGFsbCBUb2RvTGlzdHMuXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBidG5BZGRUb2RvIC0gYnRuIHdoaWNoIGlzIGFkZGVkIG5ldyBUb2RvTGlzdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0J1aWxkZXJ7XG5cblx0Y29udGFpbmVyRWxlbTogSFRNTERpdkVsZW1lbnQ7XG5cdHRvZG9zQXJyOiBBcnJheTxUb2RvTGlzdD47XG5cdGJ0bkFkZFRvZG86IEhUTUxCdXR0b25FbGVtZW50O1xuXHRzdGF0ZTogSVN0YXRlO1xuXG5cdGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpe1xuXG5cdFx0dGhpcy5jb250YWluZXJFbGVtID0gY29udGFpbmVyO1xuXHRcdHRoaXMudG9kb3NBcnIgPSBbXTtcblx0XHR0aGlzLmJ0bkFkZFRvZG8gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1aWxkLXRvZG8nKTtcblxuXHRcdFxuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZG9zQXJyOiBbXVxuXHRcdH1cblxuXHRcdHRoaXMuYnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25CdWlsZChldmVudCkpO1xuXG5cdFx0dGhpcy5jb250YWluZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ1RvZG9MaXN0LnJlbW92ZScsIChldmVudDogQ3VzdG9tRXZlbnQpID0+IHRoaXMucmVtb3ZlVG9kbyhldmVudCkpO1xuXG5cdFx0dGhpcy5jb250YWluZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvZG9zdGF0ZWNoYW5nZScsIChldmVudDogRXZlbnQpID0+IHRoaXMudXBkYXRlU3RvcmFnZShldmVudCkpO1xuXG5cdH1cblxuXHR1cGRhdGVTdG9yYWdlKGV2ZW50OiBFdmVudCk6IHZvaWR7XG5cblx0XHR0aGlzLnN0YXRlLnRvZG9zQXJyLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG5cdFx0XHR0b2RvLmFyckl0ZW1zID0gdGhpcy50b2Rvc0FycltpbmRleF0uYXJySXRlbXMubWFwKGVsID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsLnN0YXRlO1xuXHRcdFx0fSk7XG5cdFx0XHR0b2RvLnRpdGxlID0gdGhpcy50b2Rvc0FycltpbmRleF0uc3RhdGUudGl0bGU7XG5cdFx0fSk7XG5cblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XG5cdH1cblxuXHRvbkJ1aWxkKGV2ZW50OiBFdmVudCk6IHZvaWR7XG5cdFx0dGhpcy5jcmVhdGVUb2RvKCk7XG5cdH1cblxuXHRyZW1vdmVUb2RvKGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWR7XG5cdFx0Y29uc3QgZWxlbTogVG9kb0xpc3QgPSBldmVudC5kZXRhaWwuaXRlbTtcblx0XHRjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy50b2Rvc0Fyci5maW5kSW5kZXgoZWwgPT4gZWwgPT09IGVsZW0pO1x0XHRcblx0XHR0aGlzLnRvZG9zQXJyID0gdGhpcy50b2Rvc0Fyci5maWx0ZXIoZWwgPT4gZWwgIT09IGVsZW0pO1xuXHRcdHRoaXMuc3RhdGUudG9kb3NBcnIgPSB0aGlzLnN0YXRlLnRvZG9zQXJyLmZpbHRlcigoZWwsIGkpID0+IGkgIT09IGluZGV4KTtcblx0XHRpZih0aGlzLnRvZG9zQXJyLmxlbmd0aCA9PT0gMCl7XG5cdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb3MnKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VG9kb0xpc3R9IGp1c3QgY3JlYXRlZC5cblx0ICovXG5cdGNyZWF0ZVRvZG8oKTogVG9kb0xpc3R7XG5cdFx0bGV0IHRvZG9FbGVtOiBIVE1MRGl2RWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUb2RvRWxlbWVudCgpKTsgXG5cdFx0Y29uc3QgdG9kbzogVG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QodG9kb0VsZW0pO1x0XHRcdCBcblx0XHR0b2RvLmNyZWF0ZUZyb21TdG9yYWdlKCk7XG5cdFx0dGhpcy50b2Rvc0Fyci5wdXNoKHRvZG8pO1xuXG5cdFx0dGhpcy5zdGF0ZS50b2Rvc0Fyci5wdXNoKHRvZG8uc3RhdGUpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcblxuXHRcdHJldHVybiB0b2RvO1xuXHR9XG5cblx0Y3JlYXRlVG9kb0Zyb21TdG9yYWdlKCk6IHZvaWR7XG5cdFx0bGV0IHN0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cdFx0dGhpcy5zdGF0ZSA9IHN0YXRlO1xuXHRcdHRoaXMuc3RhdGUudG9kb3NBcnIuZm9yRWFjaChlbCA9PiB7XG5cdFx0XHRsZXQgdG9kb0VsZW06IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9FbGVtZW50KCkpOyBcblx0XHRcdGNvbnN0IHRvZG86IFRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KHRvZG9FbGVtLCBlbC50aXRsZSwgZWwuYXJySXRlbXMpO1x0XHRcdCBcblx0XHRcdHRvZG8uY3JlYXRlRnJvbVN0b3JhZ2UoKTtcblx0XHRcdHRoaXMudG9kb3NBcnIucHVzaCh0b2RvKTtcblx0XHR9KTtcblx0fVxuXG5cdGhhc0xvY2FsU3RvcmFnZSgpOiBib29sZWFue1xuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKT8gdHJ1ZSA6IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSAge051bWJlcn0gY291bnQgLSBxdWFudGl0eSBvZiBuZXcgVG9kb0xpc3RzLlxuXHQgKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgb2YgZWxlbWVudHMgd2hpY2ggaGFzIGp1c3QgYmVlbiBhZGRlZCBpbiBET00uXG5cdCAqL1xuXHRjcmVhdGVUb2Rvcyhjb3VudDogbnVtYmVyKTogQXJyYXk8VG9kb0xpc3Q+e1xuXHRcdGxldCBhcnI6IEFycmF5PFRvZG9MaXN0PiA9IFtdO1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKXtcblx0XHRcdGFyci5wdXNoKHRoaXMuY3JlYXRlVG9kbygpKTtcblx0XHR9XG5cdFx0cmV0dXJuIGFycjtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RvZG9CdWlsZGVyLnRzIiwiLy8gaW1wb3J0IFRvZG9MaXN0SXRlbSBmcm9tICcuL3RvZG9MaXN0SXRlbSc7XG4vLyBpbXBvcnQgeyBjcmVhdGVJdGVtRWxlbWVudCwgSVN0YXRlTGlzdEl0ZW0gfSBmcm9tICcuL3RvZG9MaXN0SXRlbSc7XG5cbmltcG9ydCB7IElTdGF0ZUxpc3QsIElTdGF0ZUxpc3RJdGVtIH0gZnJvbSAnLi9JU3RhdGVzJztcblxuXG5sZXQgVG9kb0xpc3RJdGVtID0gbnVsbCxcbiBcdGNyZWF0ZUl0ZW1FbGVtZW50ID0gbnVsbDtcblxuY29uc3QgUExBQ0VIT0xERVJfVElUTEUgPSAn0KLQtdC80LAg0LfQsNC80LXRgtC+0LouLi4nO1xuY29uc3QgUExBQ0VIT0xERVJfSU5QVVQgPSAn0JfQsNC80LXRgtC60LAuLi4nO1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvRWxlbWVudCgpe1xuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcblx0ZGl2LmlubmVySFRNTCA9IGBcblx0XHQ8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cInRvZG8tZm9ybVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImRlbGV0ZS10b2RvXCI+w5c8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9J3dyYXAtdGl0bGUtaW5wdXQgaW5wdXQnIHRhYmluZGV4PScxJz5cdFx0XG5cdFx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0ndGl0bGUnIC8+XG5cdFx0XHRcdDxsYWJlbCBjbGFzcz0ndGl0bGUtbGFiZWwnPiR7UExBQ0VIT0xERVJfVElUTEV9PC9sYWJlbD5cdFx0XHRcblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nd3JhcC1tYWluLWlucHV0IGlucHV0Jz5cblx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSdtYWluLWlucHV0JyAvPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3M9J21haW4taW5wdXQtbGFiZWwnPiR7UExBQ0VIT0xERVJfSU5QVVR9PC9sYWJlbD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImFkZC1pdGVtIGJ0biBtYXQtZWxldmF0aW9uLTJkcFwiIHZhbHVlPVwiQWRkXCIgLz5cblx0XHRcdDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz1cImNsZWFyQWxsIGJ0biBtYXQtZWxldmF0aW9uLTJkcFwiPkNsZWFyPC9idXR0b24+XG5cdFx0PC9mb3JtPlxuXHRcdDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxuXHRcdDwvdWw+XG5cdGA7XG5cblx0cmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kb0VsZW1lbnQgfTtcblxuXG5cblxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudHMgVG9kb0xpc3QuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0b2RvIC0gRE9NRWxlbWVudCB3cmFwIG9mIFRvRG8uXG4gKlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gdG9kb0VsZW0gLSBET00gRWxlbWVudCBjb250YWluZXIgb2YgVG9EbyBBcHAuXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBpbnB1dCAtIHRleHQgZmllbGQgZm9yIGNyZWF0aW5nIG5ldyB0b2RvLlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gYWRkIC0gYWRkaW5nIHRvZG8gaW4gbGlzdCAoPHVsPikuXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSB1bCAtIGNvbnRhaW5lciBvZiBUb2RvTGlzdEl0ZW1zICg8bGk+KS5cbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGFyckl0ZW1zIC0gYXJyYXkgd2l0aCBUb2RvTGlzdEl0ZW1zLiBcbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9MaXN0e1xuXG5cdHRvZG9FbGVtOiBIVE1MRGl2RWxlbWVudDtcblx0aW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdGFkZDogSFRNTElucHV0RWxlbWVudDtcblx0dWw6IEhUTUxVTGlzdEVsZW1lbnQ7XG5cdGNsZWFyTGlzdDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cdHRpdGxlRWxlbTogSFRNTElucHV0RWxlbWVudDtcblx0ZGVsZXRlVG9kbzogSFRNTERpdkVsZW1lbnQ7XG5cdHdyYXBJbnB1dDogSFRNTERpdkVsZW1lbnQ7XG5cdGxhYmVsTWFpbjogSFRNTExhYmVsRWxlbWVudDtcblx0d3JhcE1haW5JbnB1dDogSFRNTERpdkVsZW1lbnQ7XG5cdGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xuXHR0aXRsZTogc3RyaW5nO1xuXHRhcnJJdGVtczogQXJyYXk8YW55Pjtcblx0cGFyZW50OiBIVE1MRGl2RWxlbWVudDtcblx0c3RhdGU6IElTdGF0ZUxpc3Q7XG5cblxuXHRjb25zdHJ1Y3Rvcih0b2RvOiBIVE1MRGl2RWxlbWVudCA9IG51bGwsIHRpdGxlOiBzdHJpbmcgPSAnJywgYXJySXRlbXM6QXJyYXk8SVN0YXRlTGlzdEl0ZW0+ID0gW10gKXtcblxuXHRcdHRoaXMudG9kb0VsZW0gPSB0b2RvO1xuXHRcdHRoaXMuaW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWlucHV0Jyk7XG5cdFx0dGhpcy5hZGQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbScpO1xuXHRcdHRoaXMudWwgPSA8SFRNTFVMaXN0RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcblx0XHR0aGlzLmNsZWFyTGlzdCA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jbGVhckFsbCcpO1xuXHRcdHRoaXMudGl0bGVFbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcblx0XHR0aGlzLmRlbGV0ZVRvZG8gPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXRvZG8nKTtcblx0XHR0aGlzLndyYXBJbnB1dCA9IDxIVE1MRGl2RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy53cmFwLXRpdGxlLWlucHV0Jyk7XG5cdFx0dGhpcy5sYWJlbE1haW4gPSAgPEhUTUxMYWJlbEVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcubWFpbi1pbnB1dC1sYWJlbCcpO1xuXHRcdHRoaXMud3JhcE1haW5JbnB1dCA9IDxIVE1MRGl2RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy53cmFwLW1haW4taW5wdXQnKTtcblx0XHR0aGlzLmxhYmVsID0gPEhUTUxMYWJlbEVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcudGl0bGUtbGFiZWwnKTtcblxuXHRcdHRoaXMuc2V0VGl0bGUodGl0bGUpO1x0XHRcblx0XHRcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5hcnJJdGVtcyA9IFtdO1xuXG5cdFx0dGhpcy5wYXJlbnQgPSA8SFRNTERpdkVsZW1lbnQ+KCgpID0+IHtcblx0XHRcdGxldCBidWlsZDogRWxlbWVudCA9IHRoaXMudG9kb0VsZW0ucGFyZW50RWxlbWVudDtcblx0XHRcdHdoaWxlKCFidWlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRlbnQtY2FudmFzJykpe1xuXHRcdFx0XHRidWlsZCA9IGJ1aWxkLnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYnVpbGQ7XG5cdFx0fSkoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZTogdGl0bGUsXG5cdFx0XHRhcnJJdGVtc1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uUmVtb3ZlKGV2ZW50KSk7XG5cblx0XHR0aGlzLnRpdGxlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogRXZlbnQpID0+IHRoaXMub25UeXBlKGV2ZW50KSk7XG5cblx0XHR0aGlzLndyYXBJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHtcblx0XHRcdGlmKGV2ZW50LnRhcmdldCA9PSB0aGlzLnRpdGxlRWxlbSB8fCBldmVudC50YXJnZXQgPT0gdGhpcy5sYWJlbCl7XG5cdFx0XHRcdGlmKCF0aGlzLnRpdGxlKXtcblx0XHRcdFx0XHR0aGlzLnRpdGxlRWxlbS5mb2N1cygpO1x0XHRcdFx0XHRcdFx0XHQvLyBmb2N1cyB0aXRsZVxuXHRcdFx0XHRcdHRoaXMuYW5pbUxhYmVsKHRydWUsICdsYWJlbCcpO1x0XHRcdFx0XHRcdC8vIGFkZCBlZmZlY3RzIGZvciBsYWJlbFxuXHRcdFx0XHRcdHRoaXMud3JhcElucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWxpbmUnKTsgXHRcdC8vIGJvcmRlciBlZmZlY3Rcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy50aXRsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHRpZighdGhpcy50aXRsZSl7XG5cdFx0XHRcdHRoaXMuYW5pbUxhYmVsKGZhbHNlLCAnbGFiZWwnKTtcdFx0XHRcdFx0XHRcdFx0Ly8gcmV2ZXJzZSBsYWJlbCBlZmZlY3QgXG5cdFx0XHR9XG5cdFx0XHR0aGlzLndyYXBJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1saW5lJyk7XHRcdFx0Ly8gcmVtb3ZlIGJvcmRlciBlZmZlY3Rcblx0XHR9KTtcdFx0XHRcblxuXHRcdC8vXHRzdWJzY3JpYmUgb24gVG9kb0xpc3RJdGVtJ3MgJ2Nsb3NlSXRlbScgZXZlbnRcblx0XHR0aGlzLnVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlSXRlbScsIChldmVudDogQ3VzdG9tRXZlbnQpID0+IHRoaXMub25EZWxldGVJdGVtKGV2ZW50KSk7ICBcblxuXHRcdHRoaXMudG9kb0VsZW0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkFkZEl0ZW0oZXZlbnQpKTtcblx0XHRcblx0XHR0aGlzLmNsZWFyTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMuY2xlYXJBbGwoZXZlbnQpKTtcblxuXG5cdFx0dGhpcy53cmFwTWFpbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0aWYoZXZlbnQudGFyZ2V0ID09IHRoaXMubGFiZWxNYWluIHx8IGV2ZW50LnRhcmdldCA9PSB0aGlzLmlucHV0KXtcblx0XHRcdFx0aWYoIXRoaXMuaW5wdXQudmFsdWUpe1xuXHRcdFx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLmFuaW1MYWJlbCh0cnVlLCAnbGFiZWxNYWluJyk7XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy53cmFwTWFpbklucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWxpbmUnKTsgXHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0aWYoIXRoaXMuaW5wdXQudmFsdWUpe1xuXHRcdFx0XHR0aGlzLmFuaW1MYWJlbChmYWxzZSwgJ2xhYmVsTWFpbicpO1x0XHRcdFx0XHRcdFx0XHQgXG5cdFx0XHR9XG5cdFx0XHR0aGlzLndyYXBNYWluSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtbGluZScpO1x0XHRcdFxuXHRcdH0pO1x0XG5cblxuXHR9XG5cblx0c2V0VGl0bGUodGV4dDogc3RyaW5nKTogdm9pZHtcblx0XHRpZih0ZXh0KXtcblx0XHRcdHRoaXMuYW5pbUxhYmVsKHRydWUsICdsYWJlbCcpO1xuXHRcdFx0dGhpcy50aXRsZUVsZW0udmFsdWUgPSB0ZXh0O1xuXHRcdFx0dGhpcy50aXRsZSA9IHRleHQ7XG5cdFx0fVxuXHR9XG5cblx0YW5pbUxhYmVsKGZsYWc6IGJvb2xlYW4sIGVsZW06IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmKGZsYWcpe1xuXHRcdFx0dGhpc1tlbGVtXS5jbGFzc0xpc3QuYWRkKCdsYWJlbC1tb3ZlJyk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHR0aGlzW2VsZW1dLmNsYXNzTGlzdC5yZW1vdmUoJ2xhYmVsLW1vdmUnKTtcblx0XHR9XG5cdH1cblxuXHRzZXRTdGF0ZShuZXdTdGF0ZTogSVN0YXRlTGlzdCk6IHZvaWR7XG5cdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIG5ld1N0YXRlKTtcblx0XHR0aGlzLmRpc3BTdGF0ZUNoYW5nZUV2ZW50KCk7XG5cdH1cblxuXHRvblJlbW92ZShldmVudDogRXZlbnQpOiB2b2lke1xuXHRcdGxldCBjbG9zZUV2ZW50OiBFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnVG9kb0xpc3QucmVtb3ZlJywge1xuXHRcdFx0IFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOntcblx0XHRcdFx0XHRpdGVtOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHRoaXMudG9kb0VsZW0uZGlzcGF0Y2hFdmVudChjbG9zZUV2ZW50KTtcblx0XHR0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLnRvZG9FbGVtKTtcblx0fVxuXG5cdG9uVHlwZShldmVudDogRXZlbnQpOiB2b2lke1xuXHRcdHRoaXMudGl0bGUgPSB0aGlzLnRpdGxlRWxlbS52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHsgdGl0bGU6IHRoaXMudGl0bGUgfSk7XG5cdH1cblxuXHRkaXNwU3RhdGVDaGFuZ2VFdmVudCgpOiB2b2lke1xuXHRcdGNvbnN0IHN0YXRlRXZlbnQ6IEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2Rvc3RhdGVjaGFuZ2UnLHtcblx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRkZXRhaWw6e1xuXHRcdFx0XHRpdGVtOiB0aGlzLFxuXHRcdFx0XHRzdGF0ZTogdGhpcy5zdGF0ZVxuXHRcdFx0fVxuXHRcdCB9KTtcblx0XHQgdGhpcy50b2RvRWxlbS5kaXNwYXRjaEV2ZW50KHN0YXRlRXZlbnQpO1xuXHR9XG5cblx0Y3JlYXRlRnJvbVN0b3JhZ2UoKTogdm9pZCB7XG5cdFx0aWYodGhpcy5zdGF0ZS5hcnJJdGVtcy5sZW5ndGggIT09IDApe1xuXHRcdFx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidG9kby1pdGVtXCIgKi8gJy4vdG9kb0xpc3RJdGVtJylcblx0XHRcdFx0LnRoZW4oKG1vZHVsZSkgPT4ge1xuXHRcdFx0XHRcdFRvZG9MaXN0SXRlbSA9IG1vZHVsZS5Ub2RvTGlzdEl0ZW07XG5cdFx0XHRcdFx0Y3JlYXRlSXRlbUVsZW1lbnQgPSBtb2R1bGUuY3JlYXRlSXRlbUVsZW1lbnQ7XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmFyckl0ZW1zLmZvckVhY2goZWwgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV3RWxlbTogSFRNTExJRWxlbWVudCA9IHRoaXMudWwuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbUVsZW1lbnQoKSk7XG5cdFx0XHRcdFx0XHRjb25zdCBvYmpJdGVtID0gIG5ldyBUb2RvTGlzdEl0ZW0obmV3RWxlbSwgZWwuY2hlY2tlZCwgZWwuY29udGVudCk7XG5cdFx0XHRcdFx0XHR0aGlzLmFyckl0ZW1zLnB1c2gob2JqSXRlbSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRvbkFkZEl0ZW0oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRpZighdGhpcy5pc0lucHV0RW1wdHkoKSl7XG5cdFx0XHRpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ0b2RvLWl0ZW1cIiAqLyAnLi90b2RvTGlzdEl0ZW0nKVxuXHRcdFx0XHQudGhlbigobW9kdWxlKSA9PiB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0VG9kb0xpc3RJdGVtID0gbW9kdWxlLlRvZG9MaXN0SXRlbTtcblx0XHRcdFx0XHRjcmVhdGVJdGVtRWxlbWVudCA9IG1vZHVsZS5jcmVhdGVJdGVtRWxlbWVudDtcblxuXHRcdFx0XHRcdGNvbnN0IG5ld0VsZW06IEhUTUxMSUVsZW1lbnQgPSB0aGlzLnVsLmFwcGVuZENoaWxkKGNyZWF0ZUl0ZW1FbGVtZW50KCkpO1xuXHRcdFx0XHRcdGNvbnN0IG9iakl0ZW0gPSAgbmV3IFRvZG9MaXN0SXRlbShuZXdFbGVtLCBudWxsLCB0aGlzLmlucHV0LnZhbHVlKTtcblx0XHRcdFx0XHR0aGlzLmFyckl0ZW1zLnB1c2gob2JqSXRlbSk7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGFyckl0ZW1zOiB0aGlzLmFyckl0ZW1zLm1hcChlbCA9PiBlbC5zdGF0ZSl9KTtcblx0XHRcblx0XHRcdFx0fSk7XHRcblx0XHR9XG5cdH1cblxuXHRpc0lucHV0RW1wdHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICh0aGlzLmlucHV0LnZhbHVlKSA/IGZhbHNlIDogdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gb2JqIHdpdGggc3R5bGVzICBcblx0ICovXG5cdHNldFN0eWxlKG9iajogYW55KTogdm9pZHtcblx0XHRmb3IobGV0IHByb3AgaW4gb2JqKXtcblx0XHRcdHRoaXMudG9kb0VsZW0uc3R5bGVbcHJvcF0gPSBvYmpbcHJvcF07XG5cdFx0fVxuXHR9XG5cblx0b25EZWxldGVJdGVtKGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWQge1xuXHRcdGNvbnN0IGVsZW0gPSBldmVudC5kZXRhaWwuaXRlbTtcblx0XHR0aGlzLmFyckl0ZW1zID0gdGhpcy5hcnJJdGVtcy5maWx0ZXIoZWwgPT4gZWwgIT09IGVsZW0pO1xuXHRcdFxuXHRcdHRoaXMuc2V0U3RhdGUoeyBhcnJJdGVtczogdGhpcy5hcnJJdGVtcy5tYXAoZWwgPT4gZWwuc3RhdGUpfSk7XG5cdH1cblxuXHQvLyBjbGVhciBsaXN0IG9mIGl0ZW1zXG5cdGNsZWFyQWxsKGV2ZW50OiBFdmVudCk6IHZvaWR7XG5cdFx0aWYodGhpcy5hcnJJdGVtcy5sZW5ndGggIT09IDApe1xuXHRcdFx0dGhpcy5hcnJJdGVtcy5mb3JFYWNoKGVsZW0gPT4gZWxlbS5yZW1vdmUoKSk7XG5cdFx0XHR0aGlzLmFyckl0ZW1zID0gW107XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhcnJJdGVtczogW10gfSk7XG5cdFx0fVxuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9kb0xpc3QudHMiXSwic291cmNlUm9vdCI6IiJ9