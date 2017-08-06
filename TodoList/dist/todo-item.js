webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createItemElement() {
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
exports.createItemElement = createItemElement;
/**
 * Class represents TodoListItem.
 * @param {HTMLElement} item - DOM Element (<li>).
 *
 * @property {HTMLElement} item - <li>.
 * @property {HTMLElement} delete - delete <li>.
 * @property {HTMLElement} check - checkbox inside <li>.
 * @property {HTMLElement} editElem -  btn for edit input
 */
class TodoListItem {
    constructor(item = null, checked = false, content = '') {
        this.itemElem = item;
        this.input = this.itemElem.querySelector('.edit-input');
        this.delete = this.itemElem.querySelector('.delete');
        this.check = this.itemElem.querySelector('.check');
        this.editElem = this.itemElem.querySelector('.edit');
        this.labelElem = this.itemElem.querySelector('.check-label');
        this.parent = (() => {
            let todo = this.itemElem.parentElement;
            while (!todo.classList.contains('todo-list')) {
                todo = todo.parentElement;
            }
            return todo;
        })();
        this.state = {
            checked: checked,
            content
        };
        this.setValue(content);
        this.setChecked(checked);
        // create Custom Event
        this.input.addEventListener('keyup', (event) => this.onType(event));
        this.editElem.addEventListener('click', (event) => this.onEdit(event));
        this.check.addEventListener('click', (event) => this.ClickCheckbox(event));
        this.delete.addEventListener('click', (event) => this.onDelete(event));
    }
    onType(event) {
        this.setState({ content: this.input.textContent });
    }
    dispStateChangeEvent() {
        const stateEvent = new CustomEvent('todostatechange', {
            bubbles: true,
            detail: {
                item: this,
                state: this.state
            }
        });
        this.itemElem.dispatchEvent(stateEvent);
    }
    setState(newState) {
        this.state = Object.assign({}, this.state, newState);
        this.dispStateChangeEvent();
    }
    ClickCheckbox(event) {
        if (this.isEditable())
            this.toggleEdit();
        if (this.isChecked()) {
            this.input.style.textDecoration = 'line-through';
            this.setEditable(false);
            this.labelElem.classList.add('check-label-active');
        }
        else {
            this.input.style.textDecoration = 'none';
            this.labelElem.classList.remove('check-label-active');
        }
        this.setState({ checked: this.isChecked() });
    }
    isChecked() {
        return this.check.checked;
    }
    setChecked(flag) {
        this.check.checked = flag;
        if (flag) {
            this.input.style.textDecoration = 'line-through';
            this.setEditable(false);
            this.labelElem.classList.add('check-label-active');
        }
        else {
            this.input.style.textDecoration = 'none';
            this.labelElem.classList.remove('check-label-active');
        }
    }
    setEditable(flag) {
        if (flag) {
            this.input.contentEditable = 'true';
        }
        else {
            this.input.contentEditable = 'false';
        }
    }
    isEditable() {
        return this.input.contentEditable === 'true';
    }
    toggleEdit() {
        if (!this.isEditable()) {
            this.setEditable(true);
            this.input.style.outline = 'auto 5px rgb(77, 144, 254)';
        }
        else {
            this.setEditable(false);
            this.input.style.outline = 'none';
        }
    }
    // click on 'this.editElem' callback
    onEdit(event) {
        if (this.isChecked())
            return;
        this.toggleEdit();
    }
    // click on 'this.delete' callback, dispatch 'closeItem' event.
    onDelete(event) {
        let closeEvent = new CustomEvent('closeItem', {
            bubbles: true,
            cancelable: true,
            detail: {
                item: this
            }
        });
        this.itemElem.dispatchEvent(closeEvent);
        this.remove();
    }
    remove() {
        this.parent.removeChild(this.itemElem);
        return this;
    }
    getItem() {
        return this.itemElem;
    }
    /**
     * @param {Object} obj - obj with styles
     */
    setStyle(obj) {
        for (let prop in obj) {
            this.itemElem.style[prop] = obj[prop];
        }
    }
    /**
     * @param {string} text - input value.
     */
    setValue(text = '') {
        this.input.textContent = text;
    }
}
exports.TodoListItem = TodoListItem;


/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9kb0xpc3RJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTtJQUNDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUVwQyxFQUFFLENBQUMsU0FBUyxHQUFHOzs7Ozs7O0VBT2QsQ0FBQztJQUVGLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDWCxDQUFDO0FBRVEsOENBQWlCO0FBSTFCOzs7Ozs7OztHQVFHO0FBQ0g7SUFXQyxZQUFhLElBQUksR0FBRyxJQUFJLEVBQUUsT0FBTyxHQUFHLEtBQUssRUFBRSxPQUFPLEdBQUcsRUFBRTtRQUV0RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFtQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsTUFBTSxHQUFtQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsS0FBSyxHQUFxQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFtQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFxQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUvRSxJQUFJLENBQUMsTUFBTSxHQUFxQixDQUFDO1lBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ3ZDLE9BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFB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R0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztDQUVEO0FBNUtELG9DQTRLQyIsImZpbGUiOiJ0b2RvLWl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RhdGVMaXN0SXRlbSB9IGZyb20gJy4vSVN0YXRlcyc7XG5cblxuZnVuY3Rpb24gY3JlYXRlSXRlbUVsZW1lbnQoKXtcblx0Y29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRsaS5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QtLWl0ZW0nKTtcblxuXHRsaS5pbm5lckhUTUwgPSBgXG5cdFx0PGxhYmVsIGNsYXNzPSdjaGVjay1sYWJlbCc+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9J2NoZWNrJyAvPlxuXHRcdDwvbGFiZWw+XG5cdFx0PGRpdiBjbGFzcz1cImVkaXQtaW5wdXRcIiBjb250ZW50ZWRpdGFibGU9XCJmYWxzZVwiID48L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiZWRpdFwiPjwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJkZWxldGVcIj7DlzwvZGl2PlxuXHRgO1xuXHRcblx0cmV0dXJuIGxpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVJdGVtRWxlbWVudCB9O1xuXG5cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRzIFRvZG9MaXN0SXRlbS5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSBET00gRWxlbWVudCAoPGxpPikuXG4gKiBcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGl0ZW0gLSA8bGk+LlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZGVsZXRlIC0gZGVsZXRlIDxsaT4uXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBjaGVjayAtIGNoZWNrYm94IGluc2lkZSA8bGk+LlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZWRpdEVsZW0gLSAgYnRuIGZvciBlZGl0IGlucHV0XG4gKi9cbmV4cG9ydCBjbGFzcyBUb2RvTGlzdEl0ZW17XG5cblx0aXRlbUVsZW06IEhUTUxMSUVsZW1lbnQ7XG5cdGlucHV0OiBIVE1MRGl2RWxlbWVudDtcblx0ZGVsZXRlOiBIVE1MRGl2RWxlbWVudDtcblx0Y2hlY2s6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdGVkaXRFbGVtOiBIVE1MRGl2RWxlbWVudDtcblx0bGFiZWxFbGVtOiBIVE1MTGFiZWxFbGVtZW50O1xuXHRwYXJlbnQ6IEhUTUxVTGlzdEVsZW1lbnQ7XG5cdHN0YXRlOiBJU3RhdGVMaXN0SXRlbTtcblxuXHRjb25zdHJ1Y3RvciggaXRlbSA9IG51bGwsIGNoZWNrZWQgPSBmYWxzZSwgY29udGVudCA9ICcnICl7XG5cblx0XHR0aGlzLml0ZW1FbGVtID0gaXRlbTtcblx0XHR0aGlzLmlucHV0ID0gPEhUTUxEaXZFbGVtZW50PnRoaXMuaXRlbUVsZW0ucXVlcnlTZWxlY3RvcignLmVkaXQtaW5wdXQnKTtcblx0XHR0aGlzLmRlbGV0ZSA9IDxIVE1MRGl2RWxlbWVudD50aGlzLml0ZW1FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcblx0XHR0aGlzLmNoZWNrID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5pdGVtRWxlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2snKTtcblx0XHR0aGlzLmVkaXRFbGVtID0gPEhUTUxEaXZFbGVtZW50PnRoaXMuaXRlbUVsZW0ucXVlcnlTZWxlY3RvcignLmVkaXQnKTsgXG5cdFx0dGhpcy5sYWJlbEVsZW0gPSA8SFRNTExhYmVsRWxlbWVudD50aGlzLml0ZW1FbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVjay1sYWJlbCcpO1xuXG5cdFx0dGhpcy5wYXJlbnQgPSA8SFRNTFVMaXN0RWxlbWVudD4oKCkgPT4ge1xuXHRcdFx0bGV0IHRvZG8gPSB0aGlzLml0ZW1FbGVtLnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR3aGlsZSghdG9kby5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tbGlzdCcpKXtcblx0XHRcdFx0dG9kbyA9IHRvZG8ucGFyZW50RWxlbWVudDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0b2RvO1xuXHRcdH0pKCk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Y2hlY2tlZDogY2hlY2tlZCxcblx0XHRcdGNvbnRlbnRcblx0XHR9XG5cblx0XHR0aGlzLnNldFZhbHVlKGNvbnRlbnQpO1xuXHRcdHRoaXMuc2V0Q2hlY2tlZChjaGVja2VkKTtcblx0XHQgXG5cdFx0Ly8gY3JlYXRlIEN1c3RvbSBFdmVudFxuXG5cdFx0dGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudDogRXZlbnQpID0+IHRoaXMub25UeXBlKGV2ZW50KSk7XG5cblx0XHR0aGlzLmVkaXRFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkVkaXQoZXZlbnQpKTtcblxuXHRcdHRoaXMuY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLkNsaWNrQ2hlY2tib3goZXZlbnQpKTtcblxuXHRcdHRoaXMuZGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkRlbGV0ZShldmVudCkpO1xuXHR9XG5cblxuXG5cdG9uVHlwZShldmVudDogRXZlbnQpOiB2b2lke1xuXHRcdHRoaXMuc2V0U3RhdGUoe2NvbnRlbnQ6IHRoaXMuaW5wdXQudGV4dENvbnRlbnR9KTtcblx0fVxuXG5cdGRpc3BTdGF0ZUNoYW5nZUV2ZW50KCk6IHZvaWR7XG5cdFx0Y29uc3Qgc3RhdGVFdmVudDogRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RvZG9zdGF0ZWNoYW5nZScse1xuXHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdGRldGFpbDp7XG5cdFx0XHRcdGl0ZW06IHRoaXMsXG5cdFx0XHRcdHN0YXRlOiB0aGlzLnN0YXRlXG5cdFx0XHR9XG5cdFx0IH0pO1xuXHRcdCB0aGlzLml0ZW1FbGVtLmRpc3BhdGNoRXZlbnQoc3RhdGVFdmVudCk7XG5cdH1cblxuXHRzZXRTdGF0ZShuZXdTdGF0ZTogSVN0YXRlTGlzdEl0ZW0pOiB2b2lke1xuXHRcdHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXdTdGF0ZSk7XG5cdFx0dGhpcy5kaXNwU3RhdGVDaGFuZ2VFdmVudCgpO1xuXHR9XG5cblx0Q2xpY2tDaGVja2JveChldmVudDogRXZlbnQpOiB2b2lkIHtcblx0XHRpZih0aGlzLmlzRWRpdGFibGUoKSkgdGhpcy50b2dnbGVFZGl0KCk7XG5cdFx0aWYodGhpcy5pc0NoZWNrZWQoKSl7XG5cdFx0XHR0aGlzLmlucHV0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG5cdFx0XHR0aGlzLnNldEVkaXRhYmxlKGZhbHNlKTtcblx0XHRcdHRoaXMubGFiZWxFbGVtLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWxhYmVsLWFjdGl2ZScpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0dGhpcy5pbnB1dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcblx0XHRcdHRoaXMubGFiZWxFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrLWxhYmVsLWFjdGl2ZScpO1x0XHRcdFxuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoe2NoZWNrZWQ6IHRoaXMuaXNDaGVja2VkKCl9KTtcblx0XHRcblxuXHR9XG5cblx0aXNDaGVja2VkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNoZWNrLmNoZWNrZWQ7IFxuXHR9XG5cblx0c2V0Q2hlY2tlZChmbGFnOiBib29sZWFuKTogdm9pZHtcblx0XHR0aGlzLmNoZWNrLmNoZWNrZWQgPSBmbGFnO1xuXHRcdGlmKGZsYWcpe1xuXHRcdFx0dGhpcy5pbnB1dC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuXHRcdFx0dGhpcy5zZXRFZGl0YWJsZShmYWxzZSk7XG5cdFx0XHR0aGlzLmxhYmVsRWxlbS5jbGFzc0xpc3QuYWRkKCdjaGVjay1sYWJlbC1hY3RpdmUnKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdHRoaXMuaW5wdXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG5cdFx0XHR0aGlzLmxhYmVsRWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdjaGVjay1sYWJlbC1hY3RpdmUnKTtcblx0XHR9XG5cdH1cblxuXHRzZXRFZGl0YWJsZShmbGFnOiBib29sZWFuKTogdm9pZHtcblx0XHRpZihmbGFnKXtcblx0XHRcdHRoaXMuaW5wdXQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0dGhpcy5pbnB1dC5jb250ZW50RWRpdGFibGUgPSAnZmFsc2UnO1xuXHRcdH1cblx0fVxuXG5cdGlzRWRpdGFibGUoKTogYm9vbGVhbntcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJztcblx0fVxuXG5cdHRvZ2dsZUVkaXQoKTogdm9pZHtcblx0XHRpZighdGhpcy5pc0VkaXRhYmxlKCkpe1xuXHRcdFx0dGhpcy5zZXRFZGl0YWJsZSh0cnVlKTtcblx0XHRcdHRoaXMuaW5wdXQuc3R5bGUub3V0bGluZSA9ICdhdXRvIDVweCByZ2IoNzcsIDE0NCwgMjU0KSc7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRFZGl0YWJsZShmYWxzZSk7XG5cdFx0XHR0aGlzLmlucHV0LnN0eWxlLm91dGxpbmUgPSAnbm9uZSc7XG5cdFx0fSBcblx0fVxuXG5cdC8vIGNsaWNrIG9uICd0aGlzLmVkaXRFbGVtJyBjYWxsYmFja1xuXHRvbkVkaXQoZXZlbnQ6IEV2ZW50KTogdm9pZHtcblx0XHRpZih0aGlzLmlzQ2hlY2tlZCgpKSByZXR1cm47XG5cblx0XHR0aGlzLnRvZ2dsZUVkaXQoKTtcblx0fVxuXG5cdC8vIGNsaWNrIG9uICd0aGlzLmRlbGV0ZScgY2FsbGJhY2ssIGRpc3BhdGNoICdjbG9zZUl0ZW0nIGV2ZW50LlxuXHRvbkRlbGV0ZShldmVudDogRXZlbnQpOiB2b2lkIHtcdFx0XHRcdFx0XG5cdFx0bGV0IGNsb3NlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlSXRlbScsIHtcblx0XHRcdCBcdGJ1YmJsZXM6IHRydWUsXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWUsXG5cdFx0XHRcdGRldGFpbDp7XG5cdFx0XHRcdFx0aXRlbTogdGhpc1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR0aGlzLml0ZW1FbGVtLmRpc3BhdGNoRXZlbnQoY2xvc2VFdmVudCk7XG5cdFx0dGhpcy5yZW1vdmUoKTsgIFxuXHR9XG5cblx0cmVtb3ZlKCk6IFRvZG9MaXN0SXRlbXtcblx0XHR0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLml0ZW1FbGVtKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldEl0ZW0oKTogSFRNTExJRWxlbWVudHtcblx0XHRyZXR1cm4gdGhpcy5pdGVtRWxlbTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gb2JqIHdpdGggc3R5bGVzICBcblx0ICovXG5cdHNldFN0eWxlKG9iajogYW55KXtcblx0XHRmb3IobGV0IHByb3AgaW4gb2JqKXtcblx0XHRcdHRoaXMuaXRlbUVsZW0uc3R5bGVbcHJvcF0gPSBvYmpbcHJvcF07XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gaW5wdXQgdmFsdWUuXG5cdCAqL1xuXHRzZXRWYWx1ZSh0ZXh0OiBzdHJpbmcgPSAnJykge1xuXHRcdHRoaXMuaW5wdXQudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdG9kb0xpc3RJdGVtLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==