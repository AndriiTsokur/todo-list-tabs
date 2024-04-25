import { ReactNode } from 'react';
import styles from './MainReal.module.scss';

interface PropsT {
	children: ReactNode;
}

export const MainReal: React.FC<PropsT> = ({ children }) => {
	return <main className={styles.main}>{children}</main>;
};
