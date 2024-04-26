import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './Modal.module.scss';
import { InputsT } from '@/utils';
import { toggleModal } from '@/redux/modalSlice';

// interface PropsT {
// 	children: ReactNode;
// }

export const Modal: React.FC = () => {
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

	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
	} = useForm<InputsT>();

	const onSubmit: SubmitHandler<InputsT> = (data) => console.log(data);

	return (
		<div className={styles.backDrop}>
			<div ref={modalRef} className={styles.modalContainer}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label>Task:</label>
					<input {...register('title', { required: true })} />
					{errors.title && <span>This field is required</span>}

					<label>Notes:</label>
					<textarea {...register('notes')} />

					<input type="submit" />
				</form>
			</div>
		</div>
	);
};
