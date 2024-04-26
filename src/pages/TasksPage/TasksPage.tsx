import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import styles from './TasksPage.module.scss';
import { selectTasks } from '@/redux/tasksSlice';
import { Button, Main, PageTitle } from '@/components';
import { TasksColumn } from './parts';
import { handleDrag } from './utils';

export const TasksPage: React.FC = () => {
	const dispatch = useDispatch();
	const tasks = useSelector(selectTasks);
	const { tabName: subPage } = useParams();

	const tabData = tasks.find(({ tabName }) => tabName === subPage);
	const columns = tabData?.categories;

	return (
		<Main>
			<article>
				<PageTitle title={`Tasks :: ${tabData?.tabTitle}`}>
					<Button text="Add new" />
				</PageTitle>

				<ul className={styles.mainContainer}>
					<DragDropContext onDragEnd={handleDrag(subPage!, columns!, dispatch)}>
						{Object.values(columns!).map((column) => (
							<li key={column.type} className={styles.column}>
								<TasksColumn data={column} />
							</li>
						))}
					</DragDropContext>
				</ul>
			</article>
		</Main>
	);
};
