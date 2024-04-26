import styles from './Button.module.scss';

interface PropsT {
	text: string;
	onClick: (e: React.MouseEvent) => void;
}

export const Button: React.FC<PropsT> = ({ text, onClick }) => {
	return (
		<button type="button" className={styles.button} onClick={onClick}>
			{text}
		</button>
	);
};
