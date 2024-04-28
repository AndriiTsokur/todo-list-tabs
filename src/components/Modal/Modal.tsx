import { ReactNode, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Modal.module.scss';
import { toggleModal } from '@/redux/modalSlice';
import { pushTaskToEdit } from '@/redux/tasksSlice';

interface PropsT {
	children: ReactNode;
}

export const Modal: React.FC<PropsT> = ({ children }) => {
	const dispatch = useDispatch();
	const modalRef = useRef<HTMLDivElement>(null);

	const handleClose = () => {
		dispatch(pushTaskToEdit(null));
		dispatch(toggleModal());
	};

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				handleClose();
			}
		};

		window.addEventListener('keydown', handleEsc);
		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
	}, []);

	return (
		<div className={styles.backDrop}>
			<div ref={modalRef} className={styles.modalContainer}>
				<button type="button" onClick={handleClose} className={styles.closeBtn} />

				{children}
			</div>
		</div>
	);
};
