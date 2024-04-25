import { ReactNode } from 'react';
import styles from './PageTitle.module.scss';

interface PropsT {
	children?: ReactNode;
	title: string;
}

export const PageTitle: React.FC<PropsT> = ({ children, title }) => {
	return (
		<div className={styles.titleWrapper}>
			<h2 className={styles.mainTitle}>{title}</h2>
			{children}
		</div>
	);
};
