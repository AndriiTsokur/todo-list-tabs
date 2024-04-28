import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './AddTaskForm.module.scss';
import { addTask, editTask, pushTaskToEdit, selectEditTask } from '@/redux/tasksSlice';
import { toggleModal } from '@/redux/modalSlice';
import { Button } from '@/components';

export const AddTaskForm: React.FC = () => {
	const dispatch = useDispatch();
	const editTaskState = useSelector(selectEditTask);
	const type = editTaskState?.type;
	const [formData, setFormData] = useState({
		id: editTaskState?.content.id || new Date().getTime().toString(),
		dueDate: editTaskState?.content.dueDate || '',
		title: editTaskState?.content.title || '',
		notes: editTaskState?.content.notes || '',
	});
	const { tabName } = useParams();

	const handleInput = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		formElem: string,
	) => {
		const data = e.target.value.trimStart().replaceAll('  ', ' ');
		setFormData({ ...formData, [formElem]: data });
	};

	const handleSubmit = () => {
		if (editTaskState) {
			dispatch(editTask({ tabName, type, formData }));
			dispatch(pushTaskToEdit(null));
		} else {
			dispatch(addTask({ tabName, formData }));
		}

		dispatch(toggleModal());
	};

	return (
		<form onSubmit={handleSubmit}>
			<label className={styles.formLabel}>
				{editTaskState ? 'Edit existing task:' : 'Enter a new task:'}
			</label>
			<input
				type="text"
				className={styles.input}
				value={formData.title}
				onChange={(e) => handleInput(e, 'title')}
				autoFocus
				required
			/>

			<textarea
				className={styles.textArea}
				value={formData.notes}
				onChange={(e) => handleInput(e, 'notes')}
				placeholder="Here you can add task notes..."
			/>

			<div className={styles.wrapper}>
				<input
					type="date"
					className={styles.date}
					value={formData.dueDate}
					onChange={(e) => handleInput(e, 'dueDate')}
					placeholder="Due date"
				/>

				<Button type="submit" text={editTaskState ? 'Submit corrected task' : 'Submit new task'} />
			</div>
		</form>
	);
};
