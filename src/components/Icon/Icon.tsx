import styles from './icon.module.scss'
import classNames from 'classnames'
import { IconAnon, IconBackPage, IconLike, IconLiked, IconLogoutMobile, IconMailto, IconPhone } from '../../assets/Icons'

type TIconSize = 186 | 120 | 50 | 30 | 20 | 18 | 16 | 14

interface IIconProps {
  size: TIconSize
  mobileSize?: TIconSize
  name?: EIcons
  className?: string
}

export enum EIcons {
  IconLogoutMobile = 'IconLogoutMobile',
  IconAnon = 'IconAnon',
  IconLike = 'IconLike',
  IconBackPage = 'IconBackPage',
  IconPhone = 'IconPhone',
  IconMailto = 'IconMailto',
  IconLiked = 'IconLiked',
}

export function Icon(props: IIconProps) {
  const { size = 18, name, mobileSize = 18, className = '' } = props

  const classes = classNames(styles[`s${size}`], className, { [styles[`m${mobileSize}`]]: mobileSize })

  switch (name) {
    case EIcons.IconLogoutMobile:
      return <IconLogoutMobile className={classes} />

    case EIcons.IconAnon:
      return <IconAnon className={classes} />

    case EIcons.IconLike:
      return <IconLike className={classes} />

    case EIcons.IconBackPage:
      return <IconBackPage className={classes} />

    case EIcons.IconPhone:
      return <IconPhone className={classes} />

    case EIcons.IconMailto:
      return <IconMailto className={classes} />

    case EIcons.IconLiked:
      return <IconLiked className={classes} />

    default:
      break
  }

  return <div></div>
}
