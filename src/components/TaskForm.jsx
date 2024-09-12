import React, { useState } from 'react';
const TaskForm = ({ onAdd }) => {
  const [newTaskText, setNewTaskText] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTaskText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: newTaskText,
        completed: false,
      };
      onAdd(newTask);
      setNewTaskText('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}
export default TaskForm;