import styles from './break.module.scss';
import classNames from 'classnames';

type TBreakSize = 4 | 8 | 12 | 16 | 20;

interface IBreakProps {
  size: TBreakSize;
  mobileSize?: TBreakSize;
  tabletSize?: TBreakSize;
  desktopSize?: TBreakSize;
  inline?: boolean;
  top?: boolean;
}

export function Break(props: IBreakProps) {
  const { inline = false, top = false, size = 4, mobileSize = 4, tabletSize = 12, desktopSize = 20 } = props;

  return (
    <div
      className={classNames(
        styles[`s${size}`],
        { [styles.top]: top },
        { [styles.inline]: inline },
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles[`tablet_s${tabletSize}`]]: tabletSize },
        { [styles[`desktop_s${desktopSize}`]]: desktopSize }
      )}
    />
  );
}
