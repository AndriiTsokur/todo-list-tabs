import { useSelector } from 'react-redux';
import styles from './App.module.scss';
import { selectModal } from '@/redux/modalSlice';
import { Modal } from '@/components/Modal';
import { Router } from '@/router';
import { handleBackdrop } from './utils';

export const App: React.FC = () => {
	const isModalVisible = useSelector(selectModal);

	handleBackdrop(isModalVisible);

	return (
		<>
			<div className={styles.container}>
				<Router />
			</div>

			{isModalVisible && <Modal />}
		</>
	);
};
