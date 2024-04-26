import { createSlice } from '@reduxjs/toolkit';
import { DataT } from '@/utils';
import tasks from '@/utils/tasks.json';

const initialState: DataT = {
	tasksState: !localStorage.getItem('persist:tasks') ? tasks.tasksState : [],
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		moveTask(state, action) {
			const { tabName, categories } = action.payload;
			const exactTab = state.tasksState.find((tab) => tab.tabName === tabName);
			exactTab!.categories = categories;
		},
	},
});

export const selectTasks = (state: { tasks: DataT }) => state.tasks.tasksState;
export const { moveTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
