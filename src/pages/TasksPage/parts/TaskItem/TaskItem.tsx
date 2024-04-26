import styles from './TaskItem.module.scss';
import { TaskContentT } from '@/utils';

interface PropsT {
	data: TaskContentT;
}

export const TaskItem: React.FC<PropsT> = ({ data }) => {
	return (
		<div className={styles.taskContainer}>
			<div className={styles.taskTextWrapper}>
				<h4 className={styles.taskTitle}>{data.title}</h4>
				<p className={styles.taskNotes}>{data.notes}</p>
			</div>
			<div className={styles.taskToolsWrapper}>
				<p className={styles.taskDeadline}>29.04.2024</p>
				<div className={styles.taskTools}>
					<p>Edit</p>
					<p>Del</p>
				</div>
			</div>
		</div>
	);
};
