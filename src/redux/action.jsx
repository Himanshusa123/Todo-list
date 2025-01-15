// action for adding a task

export const addTaskRequest = (task) => ({
  type: "ADD_TASK_REQUEST",
  payload: task,
});

/**
 * Action creator for deleting a task.
 * @param {number} id - The ID of the task to be deleted.
 */
// action for deketing a task
export const deleteTaskRequest = (id) => ({
  type: "DELETE_TASK_REQUEST",
  payload: id,
});

// action for authentication
export const toggleAuth = () => ({
  type: "TOGGLE_AUTH",
});

//  action for editing a task
export const editTaskRequest = (updatedTask) => ({
  type: "EDIT_TASK",
  payload: updatedTask,
});
