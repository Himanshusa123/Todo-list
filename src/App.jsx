import React from 'react';
import TaskInput from './components/Taskinput';
import TaskList from './components/Tasklist';
import './App.css'; // Import your Tailwind CSS styles

const App = () => {
  return (
    <div className="max-w-md mx-auto my-16 p-4 bg-gray-800 rounded-sm hover:border-blue-500 hover:border-4">
      <h1 className="text-2xl text-white text-center font-bold my-6">To-Do Application</h1>
      <TaskInput /> {/* Include the TaskInput component */}
      <TaskList />  {/* Include the TaskList component */}
    </div>
  );
};

export default App;