import { useEffect, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import styles from './TasksColumn.module.scss';
import { TasksColumnT } from '@/utils';
import { TaskItem } from '../TaskItem';

interface PropsT {
	data: TasksColumnT;
}

export const TasksColumn: React.FC<PropsT> = ({ data: { type, title, content } }) => {
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		const animation = requestAnimationFrame(() => setEnabled(true));

		return () => {
			cancelAnimationFrame(animation);
			setEnabled(false);
		};
	}, []);

	if (!enabled) return null;

	return (
		<Droppable droppableId={type}>
			{(provided, snapshot) => (
				<section>
					<h3 className={styles.sectionTitle}>{title}</h3>
					<ul
						{...provided.droppableProps}
						ref={provided.innerRef}
						className={styles.taskList}
						style={{ background: snapshot.isDraggingOver ? '#b6d7f9' : '#ced4da' }}
					>
						{content.map((item, idx) => (
							<li key={item.id} className={styles.taskItem}>
								<TaskItem type={type} content={item} index={idx} />
							</li>
						))}
						{provided.placeholder}
					</ul>
				</section>
			)}
		</Droppable>
	);
};
