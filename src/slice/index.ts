import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  taskId: string;
  title: string;
  description?: string;
  isDone?: boolean;
}

type ManipulateTask = Pick<Task, 'taskId' | 'isDone'>;

interface TasksState {
  tasks: Task[];
}

const INITIAL_STATE = { tasks: [] } as TasksState;

const findTaskIndex = (tasksArr: Task[], payloadID: ManipulateTask) =>
  tasksArr.findIndex(({ taskId }) => taskId === payloadID.taskId);

const tasksSlice = createSlice({
  name: 'taskList',
  initialState: INITIAL_STATE,
  reducers: {
    addTask({ tasks }, { payload }: PayloadAction<Task>) {
      tasks.push(payload);
    },

    toggleComplete({ tasks }, { payload }: PayloadAction<ManipulateTask>) {
      const taskIndex = findTaskIndex(tasks, payload);
      tasks[taskIndex] = { ...tasks[taskIndex], isDone: !payload.isDone };
    },

    deleteTask({ tasks }, { payload }: PayloadAction<ManipulateTask>) {
      const taskIndex = findTaskIndex(tasks, payload);
      tasks.splice(taskIndex, 1);
    },

    attTask({ tasks }, { payload }: PayloadAction<Task>) {
      const taskIndex = findTaskIndex(tasks, payload);
      const newTask = payload;
      tasks.splice(taskIndex, 1, newTask);
    },
  },
});

export const { addTask, toggleComplete, deleteTask, attTask } = tasksSlice.actions;
export default tasksSlice.reducer;
