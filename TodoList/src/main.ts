import './main.scss';

import './scss/todo.scss';
import './scss/todo-list/todo-list.scss';
import './scss/todo-list/--item/todo-list--item.scss';

import './scss/toolbar.scss';

import './scss/buttons.scss';

import '../manifest.json';

import TodoBuilder from './js/todoBuilder'; 

const container = <HTMLDivElement>document.querySelector('.content-canvas');

const build: TodoBuilder = new TodoBuilder(container);
start();


if('serviceWorker' in navigator){

    navigator.serviceWorker.register('./sw.js') ///TodoList/sw.js
        .then((reg) => {
            console.log(`Registration succeeded. Scope is ${reg.scope}`);
        })
        .catch(err => {
            console.log(`Registration is failed ${err}`);
        });
}


function start(){
    if(build.hasLocalStorage()){
        build.createTodoFromStorage();
    }
    else{
        build.createTodo();
    }
} 












