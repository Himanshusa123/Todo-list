const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],  // store tasks in local storage
  isAuthenticated: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTasksAdd = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasksAdd)); // save to local storage
      return { ...state, tasks: newTasksAdd };
      
    case 'DELETE_TASK':
      const newTasksDelete = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(newTasksDelete)); // Save to local storage
      return { ...state, tasks: newTasksDelete };
      
    case 'EDIT_TASK':
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload.id ? action.payload : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save to local storage
      return { ...state, tasks: updatedTasks };
      
    case 'TOGGLE_AUTH':
      return { ...state, isAuthenticated: !state.isAuthenticated };
      
    default:
      return state;
  }
};

export default rootReducer;