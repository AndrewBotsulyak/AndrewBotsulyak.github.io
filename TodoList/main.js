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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "manifest.json";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDc4ODE0ZDgyODljNTI0YjA1NTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy90b2RvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9kby1saXN0L3RvZG8tbGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3RvZG8tbGlzdC8tLWl0ZW0vdG9kby1saXN0LS1pdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdG9vbGJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2J1dHRvbnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9tYW5pZmVzdC5qc29uIiwid2VicGFjazovLy8uL3NyYy9qcy90b2RvQnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9kb0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxXQUFXLEVBQUU7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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RSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0YsQ0FBQztDQUVEO0FBeE5ELDRCQXdOQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgPT09IDApIHtcbiBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKCk7IH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rRGF0YVsyXTtcbiBcdFx0fVxuXG4gXHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2U7XG5cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCIwXCI6XCJ0b2RvLWl0ZW1cIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDc4ODE0ZDgyODljNTI0YjA1NTkiLCJpbXBvcnQgJy4vbWFpbi5zY3NzJztcblxuaW1wb3J0ICcuL3Njc3MvdG9kby5zY3NzJztcbmltcG9ydCAnLi9zY3NzL3RvZG8tbGlzdC90b2RvLWxpc3Quc2Nzcyc7XG5pbXBvcnQgJy4vc2Nzcy90b2RvLWxpc3QvLS1pdGVtL3RvZG8tbGlzdC0taXRlbS5zY3NzJztcblxuaW1wb3J0ICcuL3Njc3MvdG9vbGJhci5zY3NzJztcblxuaW1wb3J0ICcuL3Njc3MvYnV0dG9ucy5zY3NzJztcblxuaW1wb3J0ICcuLi9tYW5pZmVzdC5qc29uJztcblxuaW1wb3J0IFRvZG9CdWlsZGVyIGZyb20gJy4vanMvdG9kb0J1aWxkZXInOyBcblxuY29uc3QgY29udGFpbmVyID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWNhbnZhcycpO1xuXG5jb25zdCBidWlsZDogVG9kb0J1aWxkZXIgPSBuZXcgVG9kb0J1aWxkZXIoY29udGFpbmVyKTtcbnN0YXJ0KCk7XG5cblxuaWYoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcil7XG5cbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL1RvZG9MaXN0L3N3LmpzJykgXG4gICAgICAgIC50aGVuKChyZWcpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZWdpc3RyYXRpb24gc3VjY2VlZGVkLiBTY29wZSBpcyAke3JlZy5zY29wZX1gKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVnaXN0cmF0aW9uIGlzIGZhaWxlZCAke2Vycn1gKTtcbiAgICAgICAgfSk7XG59XG5cblxuZnVuY3Rpb24gc3RhcnQoKXtcbiAgICBpZihidWlsZC5oYXNMb2NhbFN0b3JhZ2UoKSl7XG4gICAgICAgIGJ1aWxkLmNyZWF0ZVRvZG9Gcm9tU3RvcmFnZSgpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBidWlsZC5jcmVhdGVUb2RvKCk7XG4gICAgfVxufSBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLnRzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL3RvZG8uc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvdG9kby1saXN0L3RvZG8tbGlzdC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy90b2RvLWxpc3QvLS1pdGVtL3RvZG8tbGlzdC0taXRlbS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy90b29sYmFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL2J1dHRvbnMuc2Nzc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtYW5pZmVzdC5qc29uXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tYW5pZmVzdC5qc29uXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCB7IFRvZG9MaXN0LCBjcmVhdGVUb2RvRWxlbWVudCB9IGZyb20gJy4vdG9kb0xpc3QnO1xuaW1wb3J0IHsgSVN0YXRlLCBJU3RhdGVMaXN0IH0gZnJvbSAnLi9JU3RhdGVzJztcblxuXG5pbnRlcmZhY2UgSUN1c3RvbUV2ZW50e1xuXG59XG5cbi8qKlxuICogY2xhc3MgY3JlYXRlIGFsbCBUb2RvTGlzdHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciAtIERPTUVsZW1lbnQgY29udGFpbmVyIG9mIFRvZG9MaXN0cy5cbiAqXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBjb250YWluZXJFbGVtIC0gRE9NRWxlbWVudCBjb250YWluZXIgb2YgVG9kb0xpc3RzLlxuICogQHByb3BlcnR5IHtBcnJheX0gdG9kb3NBcnIgLSBhcnJheSB3aXRoIGFsbCBUb2RvTGlzdHMuXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBidG5BZGRUb2RvIC0gYnRuIHdoaWNoIGlzIGFkZGVkIG5ldyBUb2RvTGlzdC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0J1aWxkZXJ7XG5cblx0Y29udGFpbmVyRWxlbTogSFRNTERpdkVsZW1lbnQ7XG5cdHRvZG9zQXJyOiBBcnJheTxUb2RvTGlzdD47XG5cdGJ0bkFkZFRvZG86IEhUTUxCdXR0b25FbGVtZW50O1xuXHRzdGF0ZTogSVN0YXRlO1xuXG5cdGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpe1xuXG5cdFx0dGhpcy5jb250YWluZXJFbGVtID0gY29udGFpbmVyO1xuXHRcdHRoaXMudG9kb3NBcnIgPSBbXTtcblx0XHR0aGlzLmJ0bkFkZFRvZG8gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1aWxkLXRvZG8nKTtcblxuXHRcdFxuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRvZG9zQXJyOiBbXVxuXHRcdH1cblxuXHRcdHRoaXMuYnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25CdWlsZChldmVudCkpO1xuXG5cdFx0dGhpcy5jb250YWluZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ1RvZG9MaXN0LnJlbW92ZScsIChldmVudDogQ3VzdG9tRXZlbnQpID0+IHRoaXMucmVtb3ZlVG9kbyhldmVudCkpO1xuXG5cdFx0dGhpcy5jb250YWluZXJFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvZG9zdGF0ZWNoYW5nZScsIChldmVudDogRXZlbnQpID0+IHRoaXMudXBkYXRlU3RvcmFnZShldmVudCkpO1xuXG5cdH1cblxuXHR1cGRhdGVTdG9yYWdlKGV2ZW50OiBFdmVudCk6IHZvaWR7XG5cblx0XHR0aGlzLnN0YXRlLnRvZG9zQXJyLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG5cdFx0XHR0b2RvLmFyckl0ZW1zID0gdGhpcy50b2Rvc0FycltpbmRleF0uYXJySXRlbXMubWFwKGVsID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsLnN0YXRlO1xuXHRcdFx0fSk7XG5cdFx0XHR0b2RvLnRpdGxlID0gdGhpcy50b2Rvc0FycltpbmRleF0uc3RhdGUudGl0bGU7XG5cdFx0fSk7XG5cblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XG5cdH1cblxuXHRvbkJ1aWxkKGV2ZW50OiBFdmVudCk6IHZvaWR7XG5cdFx0dGhpcy5jcmVhdGVUb2RvKCk7XG5cdH1cblxuXHRyZW1vdmVUb2RvKGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWR7XG5cdFx0Y29uc3QgZWxlbTogVG9kb0xpc3QgPSBldmVudC5kZXRhaWwuaXRlbTtcblx0XHRjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy50b2Rvc0Fyci5maW5kSW5kZXgoZWwgPT4gZWwgPT09IGVsZW0pO1x0XHRcblx0XHR0aGlzLnRvZG9zQXJyID0gdGhpcy50b2Rvc0Fyci5maWx0ZXIoZWwgPT4gZWwgIT09IGVsZW0pO1xuXHRcdHRoaXMuc3RhdGUudG9kb3NBcnIgPSB0aGlzLnN0YXRlLnRvZG9zQXJyLmZpbHRlcigoZWwsIGkpID0+IGkgIT09IGluZGV4KTtcblx0XHRpZih0aGlzLnRvZG9zQXJyLmxlbmd0aCA9PT0gMCl7XG5cdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9kb3MnKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybiB7VG9kb0xpc3R9IGp1c3QgY3JlYXRlZC5cblx0ICovXG5cdGNyZWF0ZVRvZG8oKTogVG9kb0xpc3R7XG5cdFx0bGV0IHRvZG9FbGVtOiBIVE1MRGl2RWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZChjcmVhdGVUb2RvRWxlbWVudCgpKTsgXG5cdFx0Y29uc3QgdG9kbzogVG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QodG9kb0VsZW0pO1x0XHRcdCBcblx0XHR0b2RvLmNyZWF0ZUZyb21TdG9yYWdlKCk7XG5cdFx0dGhpcy50b2Rvc0Fyci5wdXNoKHRvZG8pO1xuXG5cdFx0dGhpcy5zdGF0ZS50b2Rvc0Fyci5wdXNoKHRvZG8uc3RhdGUpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcblxuXHRcdHJldHVybiB0b2RvO1xuXHR9XG5cblx0Y3JlYXRlVG9kb0Zyb21TdG9yYWdlKCk6IHZvaWR7XG5cdFx0bGV0IHN0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG5cdFx0dGhpcy5zdGF0ZSA9IHN0YXRlO1xuXHRcdHRoaXMuc3RhdGUudG9kb3NBcnIuZm9yRWFjaChlbCA9PiB7XG5cdFx0XHRsZXQgdG9kb0VsZW06IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9FbGVtZW50KCkpOyBcblx0XHRcdGNvbnN0IHRvZG86IFRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KHRvZG9FbGVtLCBlbC50aXRsZSwgZWwuYXJySXRlbXMpO1x0XHRcdCBcblx0XHRcdHRvZG8uY3JlYXRlRnJvbVN0b3JhZ2UoKTtcblx0XHRcdHRoaXMudG9kb3NBcnIucHVzaCh0b2RvKTtcblx0XHR9KTtcblx0fVxuXG5cdGhhc0xvY2FsU3RvcmFnZSgpOiBib29sZWFue1xuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKT8gdHJ1ZSA6IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSAge051bWJlcn0gY291bnQgLSBxdWFudGl0eSBvZiBuZXcgVG9kb0xpc3RzLlxuXHQgKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgb2YgZWxlbWVudHMgd2hpY2ggaGFzIGp1c3QgYmVlbiBhZGRlZCBpbiBET00uXG5cdCAqL1xuXHRjcmVhdGVUb2Rvcyhjb3VudDogbnVtYmVyKTogQXJyYXk8VG9kb0xpc3Q+e1xuXHRcdGxldCBhcnI6IEFycmF5PFRvZG9MaXN0PiA9IFtdO1xuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKXtcblx0XHRcdGFyci5wdXNoKHRoaXMuY3JlYXRlVG9kbygpKTtcblx0XHR9XG5cdFx0cmV0dXJuIGFycjtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RvZG9CdWlsZGVyLnRzIiwiLy8gaW1wb3J0IFRvZG9MaXN0SXRlbSBmcm9tICcuL3RvZG9MaXN0SXRlbSc7XG4vLyBpbXBvcnQgeyBjcmVhdGVJdGVtRWxlbWVudCwgSVN0YXRlTGlzdEl0ZW0gfSBmcm9tICcuL3RvZG9MaXN0SXRlbSc7XG5cbmltcG9ydCB7IElTdGF0ZUxpc3QsIElTdGF0ZUxpc3RJdGVtIH0gZnJvbSAnLi9JU3RhdGVzJztcblxuXG5sZXQgVG9kb0xpc3RJdGVtID0gbnVsbCxcbiBcdGNyZWF0ZUl0ZW1FbGVtZW50ID0gbnVsbDtcblxuY29uc3QgUExBQ0VIT0xERVJfVElUTEUgPSAn0KLQtdC80LAg0LfQsNC80LXRgtC+0LouLi4nO1xuY29uc3QgUExBQ0VIT0xERVJfSU5QVVQgPSAn0JfQsNC80LXRgtC60LAuLi4nO1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvRWxlbWVudCgpe1xuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcblx0ZGl2LmlubmVySFRNTCA9IGBcblx0XHQ8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cInRvZG8tZm9ybVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImRlbGV0ZS10b2RvXCI+w5c8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9J3dyYXAtdGl0bGUtaW5wdXQgaW5wdXQnIHRhYmluZGV4PScxJz5cdFx0XG5cdFx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzcz0ndGl0bGUnIC8+XG5cdFx0XHRcdDxsYWJlbCBjbGFzcz0ndGl0bGUtbGFiZWwnPiR7UExBQ0VIT0xERVJfVElUTEV9PC9sYWJlbD5cdFx0XHRcblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz0nd3JhcC1tYWluLWlucHV0IGlucHV0Jz5cblx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSdtYWluLWlucHV0JyAvPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3M9J21haW4taW5wdXQtbGFiZWwnPiR7UExBQ0VIT0xERVJfSU5QVVR9PC9sYWJlbD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImFkZC1pdGVtIGJ0biBtYXQtZWxldmF0aW9uLTJkcFwiIHZhbHVlPVwiQWRkXCIgLz5cblx0XHRcdDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz1cImNsZWFyQWxsIGJ0biBtYXQtZWxldmF0aW9uLTJkcFwiPkNsZWFyPC9idXR0b24+XG5cdFx0PC9mb3JtPlxuXHRcdDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPlxuXHRcdDwvdWw+XG5cdGA7XG5cblx0cmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kb0VsZW1lbnQgfTtcblxuXG5cblxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudHMgVG9kb0xpc3QuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0b2RvIC0gRE9NRWxlbWVudCB3cmFwIG9mIFRvRG8uXG4gKlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gdG9kb0VsZW0gLSBET00gRWxlbWVudCBjb250YWluZXIgb2YgVG9EbyBBcHAuXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBpbnB1dCAtIHRleHQgZmllbGQgZm9yIGNyZWF0aW5nIG5ldyB0b2RvLlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gYWRkIC0gYWRkaW5nIHRvZG8gaW4gbGlzdCAoPHVsPikuXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSB1bCAtIGNvbnRhaW5lciBvZiBUb2RvTGlzdEl0ZW1zICg8bGk+KS5cbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGFyckl0ZW1zIC0gYXJyYXkgd2l0aCBUb2RvTGlzdEl0ZW1zLiBcbiAqL1xuZXhwb3J0IGNsYXNzIFRvZG9MaXN0e1xuXG5cdHRvZG9FbGVtOiBIVE1MRGl2RWxlbWVudDtcblx0aW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdGFkZDogSFRNTElucHV0RWxlbWVudDtcblx0dWw6IEhUTUxVTGlzdEVsZW1lbnQ7XG5cdGNsZWFyTGlzdDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cdHRpdGxlRWxlbTogSFRNTElucHV0RWxlbWVudDtcblx0ZGVsZXRlVG9kbzogSFRNTERpdkVsZW1lbnQ7XG5cdHdyYXBJbnB1dDogSFRNTERpdkVsZW1lbnQ7XG5cdGxhYmVsTWFpbjogSFRNTExhYmVsRWxlbWVudDtcblx0d3JhcE1haW5JbnB1dDogSFRNTERpdkVsZW1lbnQ7XG5cdGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xuXHR0aXRsZTogc3RyaW5nO1xuXHRhcnJJdGVtczogQXJyYXk8YW55Pjtcblx0cGFyZW50OiBIVE1MRGl2RWxlbWVudDtcblx0c3RhdGU6IElTdGF0ZUxpc3Q7XG5cblxuXHRjb25zdHJ1Y3Rvcih0b2RvOiBIVE1MRGl2RWxlbWVudCA9IG51bGwsIHRpdGxlOiBzdHJpbmcgPSAnJywgYXJySXRlbXM6QXJyYXk8SVN0YXRlTGlzdEl0ZW0+ID0gW10gKXtcblxuXHRcdHRoaXMudG9kb0VsZW0gPSB0b2RvO1xuXHRcdHRoaXMuaW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWlucHV0Jyk7XG5cdFx0dGhpcy5hZGQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbScpO1xuXHRcdHRoaXMudWwgPSA8SFRNTFVMaXN0RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcblx0XHR0aGlzLmNsZWFyTGlzdCA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jbGVhckFsbCcpO1xuXHRcdHRoaXMudGl0bGVFbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcblx0XHR0aGlzLmRlbGV0ZVRvZG8gPSA8SFRNTERpdkVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXRvZG8nKTtcblx0XHR0aGlzLndyYXBJbnB1dCA9IDxIVE1MRGl2RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy53cmFwLXRpdGxlLWlucHV0Jyk7XG5cdFx0dGhpcy5sYWJlbE1haW4gPSAgPEhUTUxMYWJlbEVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcubWFpbi1pbnB1dC1sYWJlbCcpO1xuXHRcdHRoaXMud3JhcE1haW5JbnB1dCA9IDxIVE1MRGl2RWxlbWVudD50aGlzLnRvZG9FbGVtLnF1ZXJ5U2VsZWN0b3IoJy53cmFwLW1haW4taW5wdXQnKTtcblx0XHR0aGlzLmxhYmVsID0gPEhUTUxMYWJlbEVsZW1lbnQ+dGhpcy50b2RvRWxlbS5xdWVyeVNlbGVjdG9yKCcudGl0bGUtbGFiZWwnKTtcblxuXHRcdHRoaXMuc2V0VGl0bGUodGl0bGUpO1x0XHRcblx0XHRcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5hcnJJdGVtcyA9IFtdO1xuXG5cdFx0dGhpcy5wYXJlbnQgPSA8SFRNTERpdkVsZW1lbnQ+KCgpID0+IHtcblx0XHRcdGxldCBidWlsZDogRWxlbWVudCA9IHRoaXMudG9kb0VsZW0ucGFyZW50RWxlbWVudDtcblx0XHRcdHdoaWxlKCFidWlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRlbnQtY2FudmFzJykpe1xuXHRcdFx0XHRidWlsZCA9IGJ1aWxkLnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYnVpbGQ7XG5cdFx0fSkoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0aXRsZTogdGl0bGUsXG5cdFx0XHRhcnJJdGVtc1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmRlbGV0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uUmVtb3ZlKGV2ZW50KSk7XG5cblx0XHR0aGlzLnRpdGxlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogRXZlbnQpID0+IHRoaXMub25UeXBlKGV2ZW50KSk7XG5cblx0XHR0aGlzLndyYXBJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHtcblx0XHRcdGlmKGV2ZW50LnRhcmdldCA9PSB0aGlzLnRpdGxlRWxlbSB8fCBldmVudC50YXJnZXQgPT0gdGhpcy5sYWJlbCl7XG5cdFx0XHRcdGlmKCF0aGlzLnRpdGxlKXtcblx0XHRcdFx0XHR0aGlzLnRpdGxlRWxlbS5mb2N1cygpO1x0XHRcdFx0XHRcdFx0XHQvLyBmb2N1cyB0aXRsZVxuXHRcdFx0XHRcdHRoaXMuYW5pbUxhYmVsKHRydWUsICdsYWJlbCcpO1x0XHRcdFx0XHRcdC8vIGFkZCBlZmZlY3RzIGZvciBsYWJlbFxuXHRcdFx0XHRcdHRoaXMud3JhcElucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWxpbmUnKTsgXHRcdC8vIGJvcmRlciBlZmZlY3Rcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy50aXRsZUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHRpZighdGhpcy50aXRsZSl7XG5cdFx0XHRcdHRoaXMuYW5pbUxhYmVsKGZhbHNlLCAnbGFiZWwnKTtcdFx0XHRcdFx0XHRcdFx0Ly8gcmV2ZXJzZSBsYWJlbCBlZmZlY3QgXG5cdFx0XHR9XG5cdFx0XHR0aGlzLndyYXBJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1saW5lJyk7XHRcdFx0Ly8gcmVtb3ZlIGJvcmRlciBlZmZlY3Rcblx0XHR9KTtcdFx0XHRcblxuXHRcdC8vXHRzdWJzY3JpYmUgb24gVG9kb0xpc3RJdGVtJ3MgJ2Nsb3NlSXRlbScgZXZlbnRcblx0XHR0aGlzLnVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlSXRlbScsIChldmVudDogQ3VzdG9tRXZlbnQpID0+IHRoaXMub25EZWxldGVJdGVtKGV2ZW50KSk7ICBcblxuXHRcdHRoaXMudG9kb0VsZW0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkFkZEl0ZW0oZXZlbnQpKTtcblx0XHRcblx0XHR0aGlzLmNsZWFyTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMuY2xlYXJBbGwoZXZlbnQpKTtcblxuXG5cdFx0dGhpcy53cmFwTWFpbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0aWYoZXZlbnQudGFyZ2V0ID09IHRoaXMubGFiZWxNYWluIHx8IGV2ZW50LnRhcmdldCA9PSB0aGlzLmlucHV0KXtcblx0XHRcdFx0aWYoIXRoaXMuaW5wdXQudmFsdWUpe1xuXHRcdFx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLmFuaW1MYWJlbCh0cnVlLCAnbGFiZWxNYWluJyk7XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy53cmFwTWFpbklucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWxpbmUnKTsgXHRcdFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0aWYoIXRoaXMuaW5wdXQudmFsdWUpe1xuXHRcdFx0XHR0aGlzLmFuaW1MYWJlbChmYWxzZSwgJ2xhYmVsTWFpbicpO1x0XHRcdFx0XHRcdFx0XHQgXG5cdFx0XHR9XG5cdFx0XHR0aGlzLndyYXBNYWluSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXQtbGluZScpO1x0XHRcdFxuXHRcdH0pO1x0XG5cblxuXHR9XG5cblx0c2V0VGl0bGUodGV4dDogc3RyaW5nKTogdm9pZHtcblx0XHRpZih0ZXh0KXtcblx0XHRcdHRoaXMuYW5pbUxhYmVsKHRydWUsICdsYWJlbCcpO1xuXHRcdFx0dGhpcy50aXRsZUVsZW0udmFsdWUgPSB0ZXh0O1xuXHRcdFx0dGhpcy50aXRsZSA9IHRleHQ7XG5cdFx0fVxuXHR9XG5cblx0YW5pbUxhYmVsKGZsYWc6IGJvb2xlYW4sIGVsZW06IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmKGZsYWcpe1xuXHRcdFx0dGhpc1tlbGVtXS5jbGFzc0xpc3QuYWRkKCdsYWJlbC1tb3ZlJyk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHR0aGlzW2VsZW1dLmNsYXNzTGlzdC5yZW1vdmUoJ2xhYmVsLW1vdmUnKTtcblx0XHR9XG5cdH1cblxuXHRzZXRTdGF0ZShuZXdTdGF0ZTogSVN0YXRlTGlzdCk6IHZvaWR7XG5cdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIG5ld1N0YXRlKTtcblx0XHR0aGlzLmRpc3BTdGF0ZUNoYW5nZUV2ZW50KCk7XG5cdH1cblxuXHRvblJlbW92ZShldmVudDogRXZlbnQpOiB2b2lke1xuXHRcdGxldCBjbG9zZUV2ZW50OiBFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnVG9kb0xpc3QucmVtb3ZlJywge1xuXHRcdFx0IFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZSxcblx0XHRcdFx0ZGV0YWlsOntcblx0XHRcdFx0XHRpdGVtOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHRoaXMudG9kb0VsZW0uZGlzcGF0Y2hFdmVudChjbG9zZUV2ZW50KTtcblx0XHR0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLnRvZG9FbGVtKTtcblx0fVxuXG5cdG9uVHlwZShldmVudDogRXZlbnQpOiB2b2lke1xuXHRcdHRoaXMudGl0bGUgPSB0aGlzLnRpdGxlRWxlbS52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHsgdGl0bGU6IHRoaXMudGl0bGUgfSk7XG5cdH1cblxuXHRkaXNwU3RhdGVDaGFuZ2VFdmVudCgpOiB2b2lke1xuXHRcdGNvbnN0IHN0YXRlRXZlbnQ6IEV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2Rvc3RhdGVjaGFuZ2UnLHtcblx0XHRcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRkZXRhaWw6e1xuXHRcdFx0XHRpdGVtOiB0aGlzLFxuXHRcdFx0XHRzdGF0ZTogdGhpcy5zdGF0ZVxuXHRcdFx0fVxuXHRcdCB9KTtcblx0XHQgdGhpcy50b2RvRWxlbS5kaXNwYXRjaEV2ZW50KHN0YXRlRXZlbnQpO1xuXHR9XG5cblx0Y3JlYXRlRnJvbVN0b3JhZ2UoKTogdm9pZCB7XG5cdFx0aWYodGhpcy5zdGF0ZS5hcnJJdGVtcy5sZW5ndGggIT09IDApe1xuXHRcdFx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidG9kby1pdGVtXCIgKi8gXG5cdFx0XHQvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cblx0XHRcdCcuL3RvZG9MaXN0SXRlbScpXG5cdFx0XHRcdC50aGVuKChtb2R1bGUpID0+IHtcblx0XHRcdFx0XHRUb2RvTGlzdEl0ZW0gPSBtb2R1bGUuVG9kb0xpc3RJdGVtO1xuXHRcdFx0XHRcdGNyZWF0ZUl0ZW1FbGVtZW50ID0gbW9kdWxlLmNyZWF0ZUl0ZW1FbGVtZW50O1x0XHRcblx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5hcnJJdGVtcy5mb3JFYWNoKGVsID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld0VsZW06IEhUTUxMSUVsZW1lbnQgPSB0aGlzLnVsLmFwcGVuZENoaWxkKGNyZWF0ZUl0ZW1FbGVtZW50KCkpO1xuXHRcdFx0XHRcdFx0Y29uc3Qgb2JqSXRlbSA9ICBuZXcgVG9kb0xpc3RJdGVtKG5ld0VsZW0sIGVsLmNoZWNrZWQsIGVsLmNvbnRlbnQpO1xuXHRcdFx0XHRcdFx0dGhpcy5hcnJJdGVtcy5wdXNoKG9iakl0ZW0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0b25BZGRJdGVtKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYoIXRoaXMuaXNJbnB1dEVtcHR5KCkpe1xuXHRcdFx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidG9kby1pdGVtXCIgKi8gJy4vdG9kb0xpc3RJdGVtJylcblx0XHRcdFx0LnRoZW4oKG1vZHVsZSkgPT4ge1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFRvZG9MaXN0SXRlbSA9IG1vZHVsZS5Ub2RvTGlzdEl0ZW07XG5cdFx0XHRcdFx0Y3JlYXRlSXRlbUVsZW1lbnQgPSBtb2R1bGUuY3JlYXRlSXRlbUVsZW1lbnQ7XG5cblx0XHRcdFx0XHRjb25zdCBuZXdFbGVtOiBIVE1MTElFbGVtZW50ID0gdGhpcy51bC5hcHBlbmRDaGlsZChjcmVhdGVJdGVtRWxlbWVudCgpKTtcblx0XHRcdFx0XHRjb25zdCBvYmpJdGVtID0gIG5ldyBUb2RvTGlzdEl0ZW0obmV3RWxlbSwgbnVsbCwgdGhpcy5pbnB1dC52YWx1ZSk7XG5cdFx0XHRcdFx0dGhpcy5hcnJJdGVtcy5wdXNoKG9iakl0ZW0pO1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBhcnJJdGVtczogdGhpcy5hcnJJdGVtcy5tYXAoZWwgPT4gZWwuc3RhdGUpfSk7XG5cdFx0XG5cdFx0XHRcdH0pO1x0XG5cdFx0fVxuXHR9XG5cblx0aXNJbnB1dEVtcHR5KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAodGhpcy5pbnB1dC52YWx1ZSkgPyBmYWxzZSA6IHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIG9iaiB3aXRoIHN0eWxlcyAgXG5cdCAqL1xuXHRzZXRTdHlsZShvYmo6IGFueSk6IHZvaWR7XG5cdFx0Zm9yKGxldCBwcm9wIGluIG9iail7XG5cdFx0XHR0aGlzLnRvZG9FbGVtLnN0eWxlW3Byb3BdID0gb2JqW3Byb3BdO1xuXHRcdH1cblx0fVxuXG5cdG9uRGVsZXRlSXRlbShldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcblx0XHRjb25zdCBlbGVtID0gZXZlbnQuZGV0YWlsLml0ZW07XG5cdFx0dGhpcy5hcnJJdGVtcyA9IHRoaXMuYXJySXRlbXMuZmlsdGVyKGVsID0+IGVsICE9PSBlbGVtKTtcblx0XHRcblx0XHR0aGlzLnNldFN0YXRlKHsgYXJySXRlbXM6IHRoaXMuYXJySXRlbXMubWFwKGVsID0+IGVsLnN0YXRlKX0pO1xuXHR9XG5cblx0Ly8gY2xlYXIgbGlzdCBvZiBpdGVtc1xuXHRjbGVhckFsbChldmVudDogRXZlbnQpOiB2b2lke1xuXHRcdGlmKHRoaXMuYXJySXRlbXMubGVuZ3RoICE9PSAwKXtcblx0XHRcdHRoaXMuYXJySXRlbXMuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xuXHRcdFx0dGhpcy5hcnJJdGVtcyA9IFtdO1xuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYXJySXRlbXM6IFtdIH0pO1xuXHRcdH1cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RvZG9MaXN0LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==