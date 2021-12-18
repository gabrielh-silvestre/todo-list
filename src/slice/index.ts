import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  taskId: number;
  title: string;
  description?: string;
  isDone?: boolean;
}

type ManipulateTask = Pick<Task, 'taskId' | 'isDone'>;

interface TasksState {
  tasks: Task[];
}

const INITIAL_STATE = { tasks: [] } as TasksState;

const tasksSlice = createSlice({
  name: 'taskList',
  initialState: INITIAL_STATE,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },

    toggleComplete({ tasks }, { payload }: PayloadAction<ManipulateTask>) {
      const taskIndex = tasks.findIndex(
        ({ taskId }) => taskId === payload.taskId
      );
      tasks[taskIndex] = { ...tasks[taskIndex], isDone: !payload.isDone };
    },

    deleteTask({ tasks }, { payload }: PayloadAction<ManipulateTask>) {
      const taskIndex = tasks.findIndex(
        ({ taskId }) => taskId === payload.taskId
      );
      tasks.splice(taskIndex, 1);
    },
  },
});

export const { addTask, toggleComplete, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
