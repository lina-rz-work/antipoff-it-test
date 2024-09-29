import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { RootState } from '../../store/store'
import { IUser } from '../../types/IUser'
import { Break } from '../Break'
import { Container } from '../Container'
import { EIcons, Icon } from '../Icon'
import { EColor, Text } from '../Text'
import styles from './headeruser.module.scss'

export const HeaderUser: React.FC = () => {
  const { userId  } = useParams();
  const users = useSelector<RootState, IUser[]>((state) => state.users.data)
  const activeUser = users.find((user) => String(user.id) === userId)
  const navigate = useNavigate()

  const handleClick = () => {
    sessionStorage.removeItem('token')
  }

  const handleClickBack = () => {
    navigate(-1)
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.headerPartner}>
            <div className={styles.avatarBox}>
              {activeUser ? (
                <img src={activeUser?.avatar} alt="аватарка" className={styles.avatarImage} />
              ) : (
                <Icon size={120} name={EIcons.IconAnon} />
              )}
            </div>

            <div className={styles.nameBox}>
              <Text As="h1" size={64} mobileSize={36} color={EColor.white} normal>
                {activeUser?.first_name || 'Артур Королёв'}
              </Text>
              <Break top size={4} mobileSize={12} />
              <Text As="p" size={32} mobileSize={20} color={EColor.white}>
                Партнер
              </Text>
            </div>
          </div>
        </div>

        <button className={styles.backDesktop} onClick={handleClickBack}>
          Назад
        </button>
        <button className={styles.backMobile} onClick={handleClickBack}>
          <Icon size={18} name={EIcons.IconBackPage} />
        </button>

        <Link to={'/signup'} className={styles.logoutDesktop} onClick={handleClick}>
          Выход
        </Link>
        <Link to={'/signup'} className={styles.logoutMobile} onClick={handleClick}>
          <Icon size={18} name={EIcons.IconLogoutMobile} />
        </Link>
      </Container>
    </header>
  )
}
