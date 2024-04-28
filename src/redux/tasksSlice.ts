import { createSlice } from '@reduxjs/toolkit';
import { DataT } from '@/utils';
import tasks from '@/utils/tasks.json';

const initialState: DataT = {
	editTaskState: null,
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

		editTask(state, action) {
			const { tabName, type, formData } = action.payload;
			const tab = state.tasksState.find((item) => item.tabName === tabName);

			if (tab) {
				const category = tab.categories.find((item) => item.type === type);

				if (category) {
					const updatedContent = category.content.map((task) => {
						if (task.id === formData.id) {
							return { ...task, ...formData };
						}
						return task;
					});

					const updatedCategory = { ...category, content: updatedContent };

					const updatedTab = {
						...tab,
						categories: tab.categories.map((item) => (item.type === type ? updatedCategory : item)),
					};

					const updatedTasksState = state.tasksState.map((item) =>
						item.tabName === tabName ? updatedTab : item,
					);

					return { ...state, tasksState: updatedTasksState };
				}
			}

			return state;
		},

		pushTaskToEdit(state, action) {
			state.editTaskState = action.payload;
		},

		moveTask(state, action) {
			const { tabName, categories } = action.payload;
			const exactTab = state.tasksState.find((tab) => tab.tabName === tabName);
			exactTab!.categories = categories;
		},
	},
});

export const selectEditTask = (state: { tasks: DataT }) => state.tasks.editTaskState;
export const selectTasks = (state: { tasks: DataT }) => state.tasks.tasksState;
export const { addTask, deleteTask, editTask, pushTaskToEdit, moveTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
