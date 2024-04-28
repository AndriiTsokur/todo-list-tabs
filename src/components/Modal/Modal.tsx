import { ReactNode, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Modal.module.scss';
import { toggleModal } from '@/redux/modalSlice';

interface PropsT {
	children: ReactNode;
}

export const Modal: React.FC<PropsT> = ({ children }) => {
	const dispatch = useDispatch();
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.code === 'Escape') dispatch(toggleModal());
		};

		const handleClickOutside = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				dispatch(toggleModal());
			}
		};

		window.addEventListener('keydown', handleEsc);
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('keydown', handleEsc);
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div className={styles.backDrop}>
			<div ref={modalRef} className={styles.modalContainer}>
				<button type="button" onClick={() => dispatch(toggleModal())} className={styles.closeBtn} />

				{children}
			</div>
		</div>
	);
};
