import { useParams } from 'react-router-dom';
import styles from './TasksPage.module.scss';
import tasks from '@/utils/tasks.json';
import { Button, MainReal, PageTitle } from '@/components';
import { TasksColumn } from './parts';

export const TasksPage: React.FC = () => {
	const { tabName: subPage } = useParams();
	const tabData = tasks.find(({ tabName }) => tabName === subPage);

	return (
		<MainReal>
			<article>
				<PageTitle title={`Tasks :: ${tabData?.tabTitle}`}>
					<Button text="Add new" />
				</PageTitle>

				<div className={styles.mainContainer}>
					{tabData?.categories.map(({ name, title, items }) => (
						<TasksColumn key={name} categoryTitle={title} tasks={items} />
					))}
				</div>
			</article>
		</MainReal>
	);
};
