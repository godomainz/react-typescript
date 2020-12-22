import React from 'react';
import './TodoList.css';

interface ToDoItem {
    id:string;
    text:string;
}
interface ToDoListProps {
    items : ToDoItem[];
    onDeleteTodo:(id:string) => void;
}

const TodoList: React.FC<ToDoListProps> = (props:ToDoListProps) => {
    
    return(
        <ul>
            {
                props.items.map((todo:ToDoItem) => 
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={props.onDeleteTodo.bind(null,todo.id)}>DELETE</button>
                    </li>
                    
                )
            }
        </ul>
    );

}

export default TodoList;