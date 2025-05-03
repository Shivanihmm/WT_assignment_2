import React from 'react';

const TodoItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(task.id)}>
        {task.text}
      </span>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
