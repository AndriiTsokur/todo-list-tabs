import styles from './TasksColumn.module.scss';
import { TaskContentT } from '@/utils';
import { TaskItem } from '../TaskItem';

interface PropsT {
	categoryTitle: string;
	tasks: TaskContentT[];
}

export const TasksColumn: React.FC<PropsT> = ({ categoryTitle, tasks }) => {
	return (
		<section className={styles.section}>
			<h3 className={styles.sectionTitle}>{categoryTitle}</h3>
			<ul className={styles.taskList}>
				{tasks.map((taskData) => (
					<li key={taskData.id} className={styles.taskItem}>
						<TaskItem data={taskData} />
					</li>
				))}
			</ul>
		</section>
	);
};
