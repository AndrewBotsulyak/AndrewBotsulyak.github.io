// import TodoListItem from './todoListItem';
// import { createItemElement, IStateListItem } from './todoListItem';

import { IStateList, IStateListItem } from './IStates';


let TodoListItem = null,
 	createItemElement = null;

const PLACEHOLDER_TITLE = 'Тема заметок...';
const PLACEHOLDER_INPUT = 'Заметка...';

function createTodoElement(){
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

export { createTodoElement };





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
export class TodoList{

	todoElem: HTMLDivElement;
	input: HTMLInputElement;
	add: HTMLInputElement;
	ul: HTMLUListElement;
	clearList: HTMLButtonElement;
	titleElem: HTMLInputElement;
	deleteTodo: HTMLDivElement;
	wrapInput: HTMLDivElement;
	labelMain: HTMLLabelElement;
	wrapMainInput: HTMLDivElement;
	label: HTMLLabelElement;
	title: string;
	arrItems: Array<any>;
	parent: HTMLDivElement;
	state: IStateList;


	constructor(todo: HTMLDivElement = null, title: string = '', arrItems:Array<IStateListItem> = [] ){

		this.todoElem = todo;
		this.input = <HTMLInputElement>this.todoElem.querySelector('.main-input');
		this.add = <HTMLInputElement>this.todoElem.querySelector('.add-item');
		this.ul = <HTMLUListElement>this.todoElem.querySelector('.todo-list');
		this.clearList = <HTMLButtonElement>this.todoElem.querySelector('.clearAll');
		this.titleElem = <HTMLInputElement>this.todoElem.querySelector('.title');
		this.deleteTodo = <HTMLDivElement>this.todoElem.querySelector('.delete-todo');
		this.wrapInput = <HTMLDivElement>this.todoElem.querySelector('.wrap-title-input');
		this.labelMain =  <HTMLLabelElement>this.todoElem.querySelector('.main-input-label');
		this.wrapMainInput = <HTMLDivElement>this.todoElem.querySelector('.wrap-main-input');
		this.label = <HTMLLabelElement>this.todoElem.querySelector('.title-label');

		this.setTitle(title);		
		
		this.title = title;
		this.arrItems = [];

		this.parent = <HTMLDivElement>(() => {
			let build: Element = this.todoElem.parentElement;
			while(!build.classList.contains('content-canvas')){
				build = build.parentElement;
			}
			return build;
		})();

		this.state = {
			title: title,
			arrItems
		}
		
		this.deleteTodo.addEventListener('click', (event: Event) => this.onRemove(event));

		this.titleElem.addEventListener('keyup', (event: Event) => this.onType(event));

		this.wrapInput.addEventListener('click', (event: Event) => {
			if(event.target == this.titleElem || event.target == this.label){
				if(!this.title){
					this.titleElem.focus();								// focus title
					this.animLabel(true, 'label');						// add effects for label
					this.wrapInput.classList.add('input-line'); 		// border effect
				}
			}
		});

		this.titleElem.addEventListener('focusout', (event: Event) => {
			if(!this.title){
				this.animLabel(false, 'label');								// reverse label effect 
			}
			this.wrapInput.classList.remove('input-line');			// remove border effect
		});			

		//	subscribe on TodoListItem's 'closeItem' event
		this.ul.addEventListener('closeItem', (event: CustomEvent) => this.onDeleteItem(event));  

		this.todoElem.addEventListener('submit', (event: Event) => this.onAddItem(event));
		
		this.clearList.addEventListener('click', (event: Event) => this.clearAll(event));


		this.wrapMainInput.addEventListener('click', (event: Event) => {
			if(event.target == this.labelMain || event.target == this.input){
				if(!this.input.value){
					this.input.focus();						
					this.animLabel(true, 'labelMain');						
					this.wrapMainInput.classList.add('input-line'); 		
				}
			}
		});

		this.input.addEventListener('focusout', (event: Event) => {
			if(!this.input.value){
				this.animLabel(false, 'labelMain');								 
			}
			this.wrapMainInput.classList.remove('input-line');			
		});	


	}

	setTitle(text: string): void{
		if(text){
			this.animLabel(true, 'label');
			this.titleElem.value = text;
			this.title = text;
		}
	}

	animLabel(flag: boolean, elem: string): void {
		if(flag){
			this[elem].classList.add('label-move');
		}
		else{
			this[elem].classList.remove('label-move');
		}
	}

	setState(newState: IStateList): void{
		this.state = Object.assign({}, this.state, newState);
		this.dispStateChangeEvent();
	}

	onRemove(event: Event): void{
		let closeEvent: Event = new CustomEvent('TodoList.remove', {
			 	bubbles: true,
				cancelable: true,
				detail:{
					item: this
				}
			});
		this.todoElem.dispatchEvent(closeEvent);
		this.parent.removeChild(this.todoElem);
	}

	onType(event: Event): void{
		this.title = this.titleElem.value;
		this.setState({ title: this.title });
	}

	dispStateChangeEvent(): void{
		const stateEvent: Event = new CustomEvent('todostatechange',{
			bubbles: true,
			detail:{
				item: this,
				state: this.state
			}
		 });
		 this.todoElem.dispatchEvent(stateEvent);
	}

	createFromStorage(): void {
		if(this.state.arrItems.length !== 0){
			import(/* webpackChunkName: "todo-item" */ './todoListItem')
				.then((module) => {
					TodoListItem = module.TodoListItem;
					createItemElement = module.createItemElement;		
				
					this.state.arrItems.forEach(el => {
						const newElem: HTMLLIElement = this.ul.appendChild(createItemElement());
						const objItem =  new TodoListItem(newElem, el.checked, el.content);
						this.arrItems.push(objItem);
					});
			});
		}
	}

	onAddItem(event: Event): void {
		event.preventDefault();
		if(!this.isInputEmpty()){
			import('./todoListItem')
				.then((module) => {
					
					TodoListItem = module.TodoListItem;
					createItemElement = module.createItemElement;

					const newElem: HTMLLIElement = this.ul.appendChild(createItemElement());
					const objItem =  new TodoListItem(newElem, null, this.input.value);
					this.arrItems.push(objItem);
					this.setState({ arrItems: this.arrItems.map(el => el.state)});
		
				});	
		}
	}

	isInputEmpty(): boolean {
		return (this.input.value) ? false : true;
	}

	/**
	 * @param {Object} obj - obj with styles  
	 */
	setStyle(obj: any): void{
		for(let prop in obj){
			this.todoElem.style[prop] = obj[prop];
		}
	}

	onDeleteItem(event: CustomEvent): void {
		const elem = event.detail.item;
		this.arrItems = this.arrItems.filter(el => el !== elem);
		
		this.setState({ arrItems: this.arrItems.map(el => el.state)});
	}

	// clear list of items
	clearAll(event: Event): void{
		if(this.arrItems.length !== 0){
			this.arrItems.forEach(elem => elem.remove());
			this.arrItems = [];

			this.setState({ arrItems: [] });
		}
	}

}