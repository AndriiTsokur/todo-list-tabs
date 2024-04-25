import styles from './Main.module.scss';

export const Main: React.FC = () => {
	return (
		<main className={styles.main}>
			<div className={styles.titleWrapper}>
				<h2 className={styles.mainTitle}>All Records</h2>
				<button type="button" className={styles.button}>
					Add new
				</button>
			</div>

			<div className={styles.mainContainer}>
				<section className={styles.section}>
					<h3 className={styles.sectionTitle}>To Do</h3>
					<ul className={styles.todoList}>
						<li className={styles.todoItem}>
							<div className={styles.todoContainer}>
								<div className={styles.todoText}>
									<h4 className={styles.todoTitle}>Perform the test task</h4>
									<p className={styles.todoNotes}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
										exercitationem.
									</p>
								</div>
								<div className={styles.todoWrapper}>
									<p className={styles.dueTo}>29.04.2024</p>
									<div className={styles.todoTools}>
										<p>Edit</p>
										<p>Del</p>
									</div>
								</div>
							</div>
						</li>
						<li className={styles.todoItem}>
							<div className={styles.todoContainer}>
								<div className={styles.todoText}>
									<h4 className={styles.todoTitle}>Perform the test task</h4>
									<p className={styles.todoNotes}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
										exercitationem.
									</p>
								</div>
								<div className={styles.todoWrapper}>
									<p className={styles.dueTo}>29.04.2024</p>
									<div className={styles.todoTools}>
										<p>Edit</p>
										<p>Del</p>
									</div>
								</div>
							</div>
						</li>
						<li className={styles.todoItem}>
							<div className={styles.todoContainer}>
								<div className={styles.todoText}>
									<h4 className={styles.todoTitle}>Perform the test task</h4>
									<p className={styles.todoNotes}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
										exercitationem.
									</p>
								</div>
								<div className={styles.todoWrapper}>
									<p className={styles.dueTo}>29.04.2024</p>
									<div className={styles.todoTools}>
										<p>Edit</p>
										<p>Del</p>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</section>

				<section className={styles.section}>
					<h3 className={styles.sectionTitle}>In Progress</h3>
					<ul className={styles.todoList}>
						<li className={styles.todoItem}>
							<div className={styles.todoContainer}>
								<div className={styles.todoText}>
									<h4 className={styles.todoTitle}>Perform the test task</h4>
									<p className={styles.todoNotes}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
										exercitationem.
									</p>
								</div>
								<div className={styles.todoWrapper}>
									<p className={styles.dueTo}>29.04.2024</p>
									<div className={styles.todoTools}>
										<p>Edit</p>
										<p>Del</p>
									</div>
								</div>
							</div>
						</li>
						<li className={styles.todoItem}>
							<div className={styles.todoContainer}>
								<div className={styles.todoText}>
									<h4 className={styles.todoTitle}>Perform the test task</h4>
									<p className={styles.todoNotes}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
										exercitationem.
									</p>
								</div>
								<div className={styles.todoWrapper}>
									<p className={styles.dueTo}>29.04.2024</p>
									<div className={styles.todoTools}>
										<p>Edit</p>
										<p>Del</p>
									</div>
								</div>
							</div>
						</li>
						<li className={styles.todoItem}>
							<div className={styles.todoContainer}>
								<div className={styles.todoText}>
									<h4 className={styles.todoTitle}>Perform the test task</h4>
									<p className={styles.todoNotes}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
										exercitationem.
									</p>
								</div>
								<div className={styles.todoWrapper}>
									<p className={styles.dueTo}>29.04.2024</p>
									<div className={styles.todoTools}>
										<p>Edit</p>
										<p>Del</p>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</section>

				<section className={styles.section}>
					<h3 className={styles.sectionTitle}>Done</h3>
					<ul className={styles.todoList}>
						<li className={styles.todoItem}>
							<div className={styles.todoContainer}>
								<div className={styles.todoText}>
									<h4 className={styles.todoTitle}>Perform the test task</h4>
									<p className={styles.todoNotes}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
										exercitationem.
									</p>
								</div>
								<div className={styles.todoWrapper}>
									<p className={styles.dueTo}>29.04.2024</p>
									<div className={styles.todoTools}>
										<p>Edit</p>
										<p>Del</p>
									</div>
								</div>
							</div>
						</li>
						<li className={styles.todoItem}>
							<div className={styles.todoContainer}>
								<div className={styles.todoText}>
									<h4 className={styles.todoTitle}>Perform the test task</h4>
									<p className={styles.todoNotes}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
										exercitationem.
									</p>
								</div>
								<div className={styles.todoWrapper}>
									<p className={styles.dueTo}>29.04.2024</p>
									<div className={styles.todoTools}>
										<p>Edit</p>
										<p>Del</p>
									</div>
								</div>
							</div>
						</li>
						<li className={styles.todoItem}>
							<div className={styles.todoContainer}>
								<div className={styles.todoText}>
									<h4 className={styles.todoTitle}>Perform the test task</h4>
									<p className={styles.todoNotes}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
										exercitationem.
									</p>
								</div>
								<div className={styles.todoWrapper}>
									<p className={styles.dueTo}>29.04.2024</p>
									<div className={styles.todoTools}>
										<p>Edit</p>
										<p>Del</p>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</section>
			</div>
		</main>
	);
};
