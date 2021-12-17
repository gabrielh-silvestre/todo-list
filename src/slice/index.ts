import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  title: string;
  description?: string;
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
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
