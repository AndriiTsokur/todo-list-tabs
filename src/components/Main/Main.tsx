import { ReactNode } from 'react';
import styles from './Main.module.scss';

interface PropsT {
	children: ReactNode;
}

export const Main: React.FC<PropsT> = ({ children }) => {
	return <main className={styles.main}>{children}</main>;
};
