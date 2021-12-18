import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  title: string;
  description?: string;
  isDone: boolean;
}

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
    toggleComplete({ tasks }, { payload }: PayloadAction<Task>) {
      const rightIndex = tasks.findIndex(
        ({ title }) => title === payload.title
      );
      tasks[rightIndex] = { ...tasks[rightIndex], isDone: !payload.isDone };
    },
  },
});

export const { addTask, toggleComplete } = tasksSlice.actions;
export default tasksSlice.reducer;
