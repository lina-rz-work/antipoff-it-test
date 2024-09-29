import styles from './text.module.scss';
import classNames from 'classnames';

type TSizes = 64 | 36 | 32 | 20 | 16;

export enum EColor {
  black = 'black',
  KingfisherDaisy = 'KingfisherDaisy',
  Bittersweet = 'Bittersweet',
  white = 'white',
  StormGrey = 'StormGrey',
  greyF8 = 'greyF8',
}

interface ITextProps {
  As?: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children?: React.ReactNode;
  size?: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  bold?: boolean;
  normal?: boolean;
  addClass?: string;
}

export function Text(props: ITextProps) {
  const {
    As = 'span',
    children,
    color = EColor.black,
    bold = false,
    normal = false,
    size = 16,
    mobileSize = 16,
    tabletSize = 22,
    desktopSize = 24,
    addClass = '',
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    addClass,
    { [styles.bold]: bold },
    { [styles.normal]: normal },
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );

  return <As className={classes}>{children}</As>;
}
