import * as React from 'react';
import Todo, {todoProps} from './Todo';

interface TodoListState {
	todoElements: todoProps[],
	nextId: number
}

class TodoList extends React.Component<undefined, TodoListState> {
	constructor() {
		super();
		this.state = {
			todoElements: [
				{title: "Sove", content: "Må sove snart", id: 1},
				{title: "Tur", content: "Gå tur fra 12 til 13", id: 2}
			],
			nextId: 3
		};

		this.submit = this.submit.bind(this);
	}

	renderTodoElements() {
		return this.state.todoElements.map(todoEl => 
			<Todo
				key={todoEl.id} 
				id={todoEl.id} 
				title={todoEl.title} 
				content={todoEl.content}
			/>
		);
	}
	async getData(owner:string) {
		let response = await fetch('http://hotell.difi.no/api/json/kud/idrettsanlegg?eier='+owner);
		let json = await response.json();
		return json;
	}
	 submit(event: any) {
		this.getData("oppsal").then((res:any)=>{console.log(res)});
		event.preventDefault();
		this.setState({
			todoElements: this.state.todoElements.concat({
				title: event.target.title.value,
				content: event.target.content.value,
				id: this.state.nextId
			}),
			nextId: this.state.nextId + 1
		});
	}

	renderCreateNewTodo() {
		return (
			<form onSubmit={this.submit} className="createNew">
				<input type="text" name="title"/>
				<input type="text" name="content"/>
				<button type="submit">Lagre</button>
			</form>
		);
	}

	render() {
		return (
			<main className="app">
				<div className="todoList">
					{this.renderTodoElements()}
				</div>
				{this.renderCreateNewTodo()}
			</main>
		);
	}
};

export default TodoList;