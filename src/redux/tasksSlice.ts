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
		addTask(state, action) {
			const { tabName, formData } = action.payload;
			state.tasksState
				.find((tab) => tab.tabName === tabName)
				?.categories.find((category) => category.type === 'todo')
				?.content.unshift(formData);
		},
		deleteTask(state, action) {
			const { tabName, type, id } = action.payload;
			const tab = state.tasksState.find((tab) => tab.tabName === tabName);
			if (tab) {
				const category = tab.categories.find((category) => category.type === type);
				if (category) {
					category.content = category.content.filter((task) => task.id !== id);
				}
			}
		},

		moveTask(state, action) {
			const { tabName, categories } = action.payload;
			const exactTab = state.tasksState.find((tab) => tab.tabName === tabName);
			exactTab!.categories = categories;
		},
	},
});

export const selectTasks = (state: { tasks: DataT }) => state.tasks.tasksState;
export const { addTask, deleteTask, moveTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
