import { Draggable } from 'react-beautiful-dnd';

import styles from './TaskItem.module.scss';
import { TaskContentT } from '@/utils';

interface PropsT {
	index: number;
	content: TaskContentT;
}

export const TaskItem: React.FC<PropsT> = ({ content, index }) => {
	const { id, title, notes } = content;
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
						<p className={styles.taskDeadline}>29.04.2024</p>
						<div className={styles.taskTools}>
							<p>Edit</p>
							<p>Del</p>
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
};
