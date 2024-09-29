import { Break } from '../Break'
import { Text } from '../Text'
import { EIcons, Icon } from '../Icon'
import styles from './usercard.module.scss'
import { Link } from 'react-router-dom'
import { IUser } from '../../types/IUser'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeLikeUser } from '../../store/users/usersSlice'

export const UserCard: React.FC<IUser> = ({ id, first_name, avatar }) => {
  const dispatch = useDispatch()
  const [like, setLike] = useState(false)

  return (
    <li className={styles.card}>
      <div className={styles.avatarBox}>
        {avatar ? (
          <img src={avatar} alt="аватарка" className={styles.avatarImage} />
        ) : (
          <Icon size={120} name={EIcons.IconAnon} />
        )}
      </div>
      <Break top size={12} />
      <Text As="h2" size={20} bold>
        <Link to={`/user/${id}`} className={styles.cardLink}>
          {first_name || 'Артур Королёв'}
        </Link>
      </Text>
      <button
        className={styles.buttonLike}
        onClick={() => {
          setLike(!like)
          dispatch(changeLikeUser(id));
        }}
      >
        {like ? <Icon size={14} name={EIcons.IconLiked} /> : <Icon size={14} name={EIcons.IconLike} />}
      </button>
    </li>
  )
}
