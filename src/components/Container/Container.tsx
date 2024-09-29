import styles from './container.module.scss';

import { IChildren } from '../../types/IChildren';

export function Container({ children }: IChildren) {
  return <div className={styles.container}>{children}</div>;
}
