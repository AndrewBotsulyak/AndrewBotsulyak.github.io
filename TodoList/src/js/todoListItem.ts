import { IStateListItem } from './IStates';


function createItemElement(){
	const li = document.createElement('li');
	li.classList.add('todo-list--item');

	li.innerHTML = `
		<label class='check-label'>
			<input type="checkbox" class='check' />
		</label>
		<div class="edit-input" contenteditable="false" ></div>
		<div class="edit"></div>
		<div class="delete">×</div>
	`;
	
	return li;
}

export { createItemElement };



/**
 * Class represents TodoListItem.
 * @param {HTMLElement} item - DOM Element (<li>).
 * 
 * @property {HTMLElement} item - <li>.
 * @property {HTMLElement} delete - delete <li>.
 * @property {HTMLElement} check - checkbox inside <li>.
 * @property {HTMLElement} editElem -  btn for edit input
 */
export class TodoListItem{

	itemElem: HTMLLIElement;
	input: HTMLDivElement;
	delete: HTMLDivElement;
	check: HTMLInputElement;
	editElem: HTMLDivElement;
	labelElem: HTMLLabelElement;
	parent: HTMLUListElement;
	state: IStateListItem;

	constructor( item = null, checked = false, content = '' ){

		this.itemElem = item;
		this.input = <HTMLDivElement>this.itemElem.querySelector('.edit-input');
		this.delete = <HTMLDivElement>this.itemElem.querySelector('.delete');
		this.check = <HTMLInputElement>this.itemElem.querySelector('.check');
		this.editElem = <HTMLDivElement>this.itemElem.querySelector('.edit'); 
		this.labelElem = <HTMLLabelElement>this.itemElem.querySelector('.check-label');

		this.parent = <HTMLUListElement>(() => {
			let todo = this.itemElem.parentElement;
			while(!todo.classList.contains('todo-list')){
				todo = todo.parentElement;
			}
			return todo;
		})();

		this.state = {
			checked: checked,
			content
		}

		this.setValue(content);
		this.setChecked(checked);
		 
		// create Custom Event

		this.input.addEventListener('keyup', (event: Event) => this.onType(event));

		this.editElem.addEventListener('click', (event: Event) => this.onEdit(event));

		this.check.addEventListener('click', (event: Event) => this.ClickCheckbox(event));

		this.delete.addEventListener('click', (event: Event) => this.onDelete(event));
	}



	onType(event: Event): void{
		this.setState({content: this.input.textContent});
	}

	dispStateChangeEvent(): void{
		const stateEvent: Event = new CustomEvent('todostatechange',{
			bubbles: true,
			detail:{
				item: this,
				state: this.state
			}
		 });
		 this.itemElem.dispatchEvent(stateEvent);
	}

	setState(newState: IStateListItem): void{
		this.state = Object.assign({}, this.state, newState);
		this.dispStateChangeEvent();
	}

	ClickCheckbox(event: Event): void {
		if(this.isEditable()) this.toggleEdit();
		if(this.isChecked()){
			this.input.style.textDecoration = 'line-through';
			this.setEditable(false);
			this.labelElem.classList.add('check-label-active');
		}
		else{
			this.input.style.textDecoration = 'none';
			this.labelElem.classList.remove('check-label-active');			
		}

		this.setState({checked: this.isChecked()});
		

	}

	isChecked(): boolean {
		return this.check.checked; 
	}

	setChecked(flag: boolean): void{
		this.check.checked = flag;
		if(flag){
			this.input.style.textDecoration = 'line-through';
			this.setEditable(false);
			this.labelElem.classList.add('check-label-active');
		}
		else{
			this.input.style.textDecoration = 'none';
			this.labelElem.classList.remove('check-label-active');
		}
	}

	setEditable(flag: boolean): void{
		if(flag){
			this.input.contentEditable = 'true';
		}
		else{
			this.input.contentEditable = 'false';
		}
	}

	isEditable(): boolean{
		return this.input.contentEditable === 'true';
	}

	toggleEdit(): void{
		if(!this.isEditable()){
			this.setEditable(true);
			this.input.style.outline = 'auto 5px rgb(77, 144, 254)';
		}
		else {
			this.setEditable(false);
			this.input.style.outline = 'none';
		} 
	}

	// click on 'this.editElem' callback
	onEdit(event: Event): void{
		if(this.isChecked()) return;

		this.toggleEdit();
	}

	// click on 'this.delete' callback, dispatch 'closeItem' event.
	onDelete(event: Event): void {					
		let closeEvent = new CustomEvent('closeItem', {
			 	bubbles: true,
				cancelable: true,
				detail:{
					item: this
				}
			});
		this.itemElem.dispatchEvent(closeEvent);
		this.remove();  
	}

	remove(): TodoListItem{
		this.parent.removeChild(this.itemElem);
		return this;
	}

	getItem(): HTMLLIElement{
		return this.itemElem;
	}

	/**
	 * @param {Object} obj - obj with styles  
	 */
	setStyle(obj: any){
		for(let prop in obj){
			this.itemElem.style[prop] = obj[prop];
		}
	}

	/**
	 * @param {string} text - input value.
	 */
	setValue(text: string = '') {
		this.input.textContent = text;
	}

}