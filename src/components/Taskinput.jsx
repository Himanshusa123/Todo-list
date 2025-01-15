import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskRequest } from '../redux/action'; 

/**
 * TaskInput component for adding new tasks in to-do-list.
 * It only contains an input field and a button.
 */
const TaskInput = () => {
  const [task, setTask] = useState('');    // State to hold the task input
  const dispatch = useDispatch();          // Hook to access the dispatch function


  // Function to handle adding a task
  const handleAddTask = () => {
    if (task.trim()) {        // Check if the input is not empty
      dispatch(addTaskRequest({ id: Date.now(), text: task.trim() })); // Dispatch action to add task
      setTask(''); // Clear the input field
    } else {
      alert('Please enter a task.'); // Alert if input is empty
    }
  };

  // function to handle key press events 
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') { // Check if the pressed key is "Enter"
      handleAddTask(); // Call the function to add the task
    }
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <input
        className="p-3 rounded-l-md border border-gray-300 text-lg text-gray-800 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Updation state 
        onKeyDown={handleKeyDown} // Add  event listener
        placeholder="Add a new task"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white rounded-r-md px-4 py-1 hover:bg-green-600 hover:text-blue-950 hover:
        bold transition duration-200"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput; 