import React from 'react';

interface ToDoItem {
    id:string;
    text:string;
}
interface ToDoListProps {
    items : ToDoItem[];
}

const TodoList: React.FC<ToDoListProps> = (props:any) => {
    
    return(
        <ul>
            {
                props.items.map((todo:ToDoItem) => <li key={todo.id}>{todo.text}</li>)
            }
        </ul>
    );

}

export default TodoList;