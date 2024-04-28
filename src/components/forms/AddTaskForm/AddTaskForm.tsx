import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './AddTaskForm.module.scss';
import { addTask } from '@/redux/tasksSlice';
import { toggleModal } from '@/redux/modalSlice';
import { Button } from '@/components';

export const AddTaskForm: React.FC = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		id: new Date().getTime().toString(),
		dueDate: '',
		title: '',
		notes: '',
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
		dispatch(addTask({ tabName, formData }));
		dispatch(toggleModal());
	};

	return (
		<form onSubmit={handleSubmit}>
			<label className={styles.formLabel}>Enter a new task:</label>
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

				<Button type="submit" text="Submit new task" />
			</div>
		</form>
	);
};
