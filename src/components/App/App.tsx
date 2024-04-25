import styles from './App.module.scss';
import { Router } from '@/router';

export const App: React.FC = () => {
	return (
		<div className={styles.container}>
			<Router />
		</div>
	);
};
