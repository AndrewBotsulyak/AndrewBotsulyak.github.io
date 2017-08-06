export interface IStateListItem{
	checked?: boolean;
	content?: string;
}

export interface IStateList{
	title?: string,
	arrItems?: Array<IStateListItem>
}

export interface IState{
	todosArr: Array<IStateList>
}