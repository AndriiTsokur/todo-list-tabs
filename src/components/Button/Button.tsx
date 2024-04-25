import styles from './Button.module.scss';

interface PropsT {
	text: string;
}

export const Button: React.FC<PropsT> = ({ text }) => {
	return (
		<button type="button" className={styles.button}>
			{text}
		</button>
	);
};
