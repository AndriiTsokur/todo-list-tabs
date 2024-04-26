import { createSlice } from '@reduxjs/toolkit';
import { DataT } from '@/utils';
import tasks from '@/utils/tasks.json';

const initialState: DataT = {
	tasksState: !localStorage.length ? tasks.tasksState : [],
	// tasksState: [],
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		moveTask(state, action) {
			state.tasksState[0].categories = action.payload;
			console.log(action.payload);
		},
	},
});

export const selectTasks = (state: { tasks: DataT }) => state.tasks.tasksState;
export const { moveTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
