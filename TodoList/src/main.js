import './main.scss';

import './scss/todo.scss';
import './scss/todo-list/todo-list.scss';
import './scss/todo-list/--item/todo-list--item.scss';

import './scss/toolbar.scss';

import './scss/buttons.scss';

import TodoBuilder from './js/todoBuilder.js'; 

const container = document.querySelector('.content-canvas');

const build = new TodoBuilder(container);
start();


if('serviceWorker' in navigator){

    navigator.serviceWorker.register('/ToDoList/sw.js')
        .then((reg) => {
            console.log(`Registration succeeded. Scope is ${reg.scope}`);
        })
        .catch(err => {
            console.log(`Registration is failed ${err}`);
        });
}


async function start(){
    if(build.hasLocalStorage()){
        await build.createTodoFromStorage();
    }
    else{
        await build.createTodo();
    }
} 












