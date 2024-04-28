import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import styles from './TaskItem.module.scss';
import { deleteTask, pushTaskToEdit } from '@/redux/tasksSlice';
import { toggleModal } from '@/redux/modalSlice';
import { TaskContentT } from '@/utils';

interface PropsT {
	index: number;
	type: string;
	content: TaskContentT;
}

export const TaskItem: React.FC<PropsT> = ({ type, content, index }) => {
	const dispatch = useDispatch();
	const { tabName } = useParams();
	const { id, dueDate, title, notes } = content;

	const handleDelete = (id: string) => {
		dispatch(deleteTask({ tabName, type, id }));
	};

	const handleEdit = (type: string, content: TaskContentT) => {
		dispatch(pushTaskToEdit({ type, content }));
		dispatch(toggleModal());
	};

	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className={styles.taskContainer}
				>
					<div className={styles.taskTextWrapper}>
						<h4 className={styles.taskTitle}>{title}</h4>
						<p className={styles.taskNotes}>{notes}</p>
					</div>
					<div className={styles.taskToolsWrapper}>
						<p className={styles.taskDeadline}>{dueDate}</p>
						<div className={styles.taskTools}>
							<button
								type="button"
								className={styles.button}
								onClick={() => handleEdit(type, content)}
							>
								Edit
							</button>
							<button type="button" className={styles.button} onClick={() => handleDelete(id)}>
								Del
							</button>
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
};
