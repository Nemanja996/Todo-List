import React from "react";
//Import Components
import Todo from './Todo';

const TodoList = ({todos,setTodos,filteredTodos}) => {
  const renderedTodos = filteredTodos.map(todo => {
    return <Todo text={todo.text} key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
  })

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {renderedTodos}
      </ul>
    </div>
  );
};

export default TodoList;