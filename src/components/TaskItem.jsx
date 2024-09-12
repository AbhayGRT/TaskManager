import React from 'react';
const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={() => onComplete(task.id)} />
      {task.text}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
export default TaskItem;