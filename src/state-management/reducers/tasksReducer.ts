interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

export interface Task {
  id: number;
  title: string;
}

const tasksReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...state];
    case "DELETE":
      return state.filter((t) => t.id !== action.taskId);
    default:
      return state;
  }
};

export default tasksReducer;
