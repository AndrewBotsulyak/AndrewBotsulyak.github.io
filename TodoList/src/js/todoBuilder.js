import TodoList from './todoList.js';

/**
 * class create all TodoLists
 * @param {HTMLElement} container - DOMElement container of TodoLists.
 *
 * @property {HTMLElement} containerElem - DOMElement container of TodoLists.
 * @property {Array} todosArr - array with all TodoLists.
 * @property {HTMLElement} btnAddTodo - btn which is added new TodoList.
 */
export default class TodoBuilder{

	constructor(container){

		this.containerElem = container;
		this.todosArr = [];
		this.btnAddTodo = document.querySelector('.build-todo');

		this.btnAddTodo.addEventListener('click', (event) => this.onBuild(event));

		this.state = {
			todosArr: []
		}

		this.containerElem.addEventListener('TodoList.remove', (event) => this.removeTodo(event));

		this.containerElem.addEventListener('todoList.statechange',
		(event) =>{ 
			let newArr = this.state.todosArr.map((todo, index) => {
				todo.arrItems = this.todosArr[index].arrItems.map(el => {
					return el.state;
				});
				todo.title = this.todosArr[index].state.title;
				return todo;
			});

			this.setState({ todosArr: newArr });
			// localStorage.setItem('todos', JSON.stringify(this.state));
		});

		this.containerElem.addEventListener('todoListItem.statechange',
		(event) =>{ 
			let newArr = this.state.todosArr.map((todo, index) => {
				todo.arrItems = this.todosArr[index].arrItems.map(el => {
					return el.state;
				});
				return todo;
			});			

			this.setState({ todosArr: newArr });
			//localStorage.setItem('todos', JSON.stringify(this.state));
		});

	}

	onBuild(event){
		this.createTodo();
	}

	removeTodo(event){
		let elem = event.detail.item;
		let index = this.todosArr.findIndex(el => el === elem);		
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
	createTodo(){
		const todo = new TodoList();			
		let todoElem = todo.createElement();   
		todoElem = this.containerElem.appendChild(todo.createElement());
		todo.init(todoElem);					// initialize 
		this.todosArr.push(todo);

		this.state.todosArr.push(todo.state);
		localStorage.setItem('todos', JSON.stringify(this.state));

		return todo;
	}

	createTodoFromStorage(){
		let state = JSON.parse(localStorage.getItem('todos'));
		this.state = state;

		this.state.todosArr.forEach(el => {
			const todo = new TodoList();			
			let todoElem = this.containerElem.appendChild(todo.createElement());   
			todo.init(todoElem, el.title, el.arrItems );					// initialize 
			todo.createFromStorage();
			this.todosArr.push(todo);
		});
	}

	setState(newState){
		this.state = Object.assign({}, this.state, newState);
		localStorage.setItem('todos', JSON.stringify(this.state));
	}

	hasLocalStorage(){
		return localStorage.getItem('todos')? true : false;
	}

	/**
	 * @param  {HTMLElement} todoElem - TodoLIst.
	 * @return {HTMLElement} elem in DOM.
	 */
	renderTodo(todoElem){
		return this.containerElem.appendChild(todoElem);
	}

	/**
	 * @param  {Number} count - quantity of new TodoLists.
	 * @return {Array} array of elements which has just been added in DOM.
	 */
	createTodos(count){
		let arr = [];
		for(let i = 0; i < count; i++){
			arr.push(this.createTodo());
		}
		return arr;
	}

}