import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: false,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		toggleModal(state) {
			state.isOpen = !state.isOpen;
		},
	},
});

export const selectModal = (state: any) => state.modal.isOpen;
export const { toggleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
