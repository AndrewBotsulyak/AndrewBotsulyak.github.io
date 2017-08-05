import TodoList from './todoList';
import { createTodoElement, IStateList } from './todoList';

interface IState{
	todosArr: Array<IStateList>
}

interface ICustomEvent{

}

/**
 * class create all TodoLists
 * @param {HTMLElement} container - DOMElement container of TodoLists.
 *
 * @property {HTMLElement} containerElem - DOMElement container of TodoLists.
 * @property {Array} todosArr - array with all TodoLists.
 * @property {HTMLElement} btnAddTodo - btn which is added new TodoList.
 */
export default class TodoBuilder{

	containerElem: HTMLDivElement;
	todosArr: Array<TodoList>;
	btnAddTodo: HTMLButtonElement;
	state: IState;

	constructor(container: HTMLDivElement){

		this.containerElem = container;
		this.todosArr = [];
		this.btnAddTodo = <HTMLButtonElement>document.querySelector('.build-todo');

		

		this.state = {
			todosArr: []
		}

		this.btnAddTodo.addEventListener('click', (event: Event) => this.onBuild(event));

		this.containerElem.addEventListener('TodoList.remove', (event: CustomEvent) => this.removeTodo(event));

		this.containerElem.addEventListener('todostatechange', (event: Event) => this.updateStorage(event));

	}

	updateStorage(event: Event): void{

		this.state.todosArr.forEach((todo, index) => {
			todo.arrItems = this.todosArr[index].arrItems.map(el => {
				return el.state;
			});
			todo.title = this.todosArr[index].state.title;
		});

		localStorage.setItem('todos', JSON.stringify(this.state));
	}

	onBuild(event: Event): void{
		this.createTodo();
	}

	removeTodo(event: CustomEvent): void{
		const elem: TodoList = event.detail.item;
		const index: number = this.todosArr.findIndex(el => el === elem);		
		this.todosArr = this.todosArr.filter(el => el !== elem);
		this.state.todosArr = this.state.todosArr.filter((el, i) => i !== index);
		if(this.todosArr.length === 0){
			localStorage.removeItem('todos');
		}
		else{
			localStorage.setItem('todos', JSON.stringify(this.state));
		}
	}

	/**
	 * @return {TodoList} just created.
	 */
	createTodo(): TodoList{
		let todoElem: HTMLDivElement = this.containerElem.appendChild(createTodoElement()); 
		const todo: TodoList = new TodoList(todoElem);			 
		todo.createFromStorage();
		this.todosArr.push(todo);

		this.state.todosArr.push(todo.state);
		localStorage.setItem('todos', JSON.stringify(this.state));

		return todo;
	}

	createTodoFromStorage(): void{
		let state = JSON.parse(localStorage.getItem('todos'));
		this.state = state;
		this.state.todosArr.forEach(el => {
			let todoElem: HTMLDivElement = this.containerElem.appendChild(createTodoElement()); 
			const todo: TodoList = new TodoList(todoElem, el.title, el.arrItems);			 
			todo.createFromStorage();
			this.todosArr.push(todo);
		});
	}

	hasLocalStorage(): boolean{
		return localStorage.getItem('todos')? true : false;
	}

	/**
	 * @param  {Number} count - quantity of new TodoLists.
	 * @return {Array} array of elements which has just been added in DOM.
	 */
	createTodos(count: number): Array<TodoList>{
		let arr: Array<TodoList> = [];
		for(let i = 0; i < count; i++){
			arr.push(this.createTodo());
		}
		return arr;
	}

}