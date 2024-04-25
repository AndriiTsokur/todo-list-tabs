import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './SideBar.module.scss';

export const SideBar: React.FC = () => {
	const defineLinkStyle = (isActive: Boolean) =>
		isActive ? `${styles.navTab} ${styles.active}` : styles.navTab;

	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.title}>ToDo List</h1>
				<nav className={styles.nav}>
					<ul className={styles.navList}>
						<li>
							<NavLink to="/all" className={({ isActive }) => defineLinkStyle(isActive)}>
								<p>All</p>
							</NavLink>
						</li>
						<li>
							<NavLink to="/personal" className={({ isActive }) => defineLinkStyle(isActive)}>
								<p>Personal</p>
							</NavLink>
						</li>
						<li>
							<NavLink to="/work" className={({ isActive }) => defineLinkStyle(isActive)}>
								<p>Work</p>
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className={styles.addTab}>
					<p className={styles.plus}>+</p>
					<p className={styles.newTab}>Add new tab</p>
				</div>
			</header>

			<Suspense fallback={<strong>LOADING...</strong>}>
				<Outlet />
			</Suspense>
		</>
	);
};
