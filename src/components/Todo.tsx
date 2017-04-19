import * as React from 'react';

export interface todoProps {
	id: number;
	title: string;
	content: string;
}

const Todo = (props: todoProps) => {
	return (
		<section className="todo">
			<h2>{props.title}</h2>
			<p>{props.content}</p>
		</section>
	);
}

export default Todo;