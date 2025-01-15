import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTaskRequest, editTaskRequest } from '../redux/action';

/**
 * TaskList component for display the list of tasks.
 * It map over the tasks and renders each task with a delete and edit button.
 */
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Get tasks from Redux store
  const dispatch = useDispatch(); // Hook to access the dispatch function
  const [editTaskId, setEditTaskId] = useState(null); // State to track which task is being edited
  const [editText, setEditText] = useState(''); // State to hold the text for editing

  // Function to handle editing a task
  const handleEdit = (task) => {
    setEditTaskId(task.id); // Set the task ID to be edited
    setEditText(task.text); // Set the text to be edited
  };

  // Function to save the edited task
  const handleSaveEdit = () => {
    if (editText.trim()) {
      dispatch(editTaskRequest({ id: editTaskId, text: editText })); // Dispatch action to edit the task
      setEditTaskId(null); // Reset the edit task ID
      setEditText(''); // Clear the edit text
    } else {
 alert('Please enter a task.'); // Alert if input is empty
    }
  };

  return (
    <ul className="list-disc pl-5 text-white dark:text-slate-300">
      {tasks.map((task) => (
        <li key={task.id} className={`flex text-lg italic border-white border-2 rounded pl-2 items-center justify-between mb-3 ${task.completed ? 'line-through  dark:text-gray-400' : ''}`}>
          {editTaskId === task.id ? (
            <div className="flex items-center">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)} // Update edit text on input change
                className="border border-gray-300 dark:border-gray-700 rounded-md p-1 mr-2 bg-gray-200 dark:bg-gray-800 text-slate-600 dark:text-slate-300"
              />
              <button onClick={handleSaveEdit} className="bg-green-500 text-white rounded-md px-3 py-1  hover:bg-green-600 transition duration-200">
                Save
              </button>
            </div>
          ) : (
            <>
              <span>{task.text}</span>
              <div>
                <button onClick={() => handleEdit(task)} className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-yellow-600 transition duration-200 mr-1">
                  Edit
                </button>
                <button onClick={() => dispatch(deleteTaskRequest(task.id))} className="bg-red-400 text-white rounded-md px-3 py-1 hover:bg-red-600 hover:text-lg transition duration-200">
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;