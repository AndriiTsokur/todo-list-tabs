import styles from './Button.module.scss';

interface PropsT {
	text: string;
	type: 'button' | 'submit' | 'reset' | undefined;
	onClick?: (e: React.MouseEvent) => void;
	style?: React.CSSProperties;
}

export const Button: React.FC<PropsT> = ({ onClick, style, text, type }) => {
	return (
		<button type={type} className={styles.button} onClick={onClick} style={style || {}}>
			{text}
		</button>
	);
};
