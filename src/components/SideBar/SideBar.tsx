import { Suspense } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './SideBar.module.scss';
import { navConfig } from '@/utils';
import { selectTasks } from '@/redux/tasksSlice';

export const SideBar: React.FC = () => {
	const { tabName } = useParams();
	const tasks = useSelector(selectTasks);

	const defineLinkStyle = (isActive: boolean, className: string) =>
		isActive ? `${styles[className]} ${styles.active}` : styles[className];

	return (
		<>
			<header className={styles.header}>
				<Link to="/">
					<h1 className={styles.title}>ToDo List</h1>
				</Link>
				<nav>
					{/* Main navigation block */}
					<ul>
						{navConfig.map(({ link, title }) => (
							<li key={title} className={styles.navItem}>
								<NavLink
									to={link}
									className={({ isActive }) => defineLinkStyle(isActive, 'navLink')}
								>
									{title}
								</NavLink>
							</li>
						))}
					</ul>

					{/* Tab navigation block */}
					{tabName && (
						<>
							<ul className={styles.tabsList}>
								{tasks.map(({ tabName, tabTitle }) => (
									<li key={tabName}>
										<NavLink
											to={`/tasks/${tabName}`}
											className={({ isActive }) => defineLinkStyle(isActive, 'tabItem')}
										>
											<p>{tabTitle}</p>
										</NavLink>
									</li>
								))}
							</ul>
							<div className={styles.addTab}>
								<p className={styles.plus}>+</p>
								<p className={styles.newTab}>Add new tab</p>
							</div>
						</>
					)}
				</nav>
			</header>

			<Suspense fallback={<strong>LOADING...</strong>}>
				<Outlet />
			</Suspense>
		</>
	);
};
