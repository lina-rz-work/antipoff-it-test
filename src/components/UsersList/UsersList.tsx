import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useUsers } from '../../hooks/useUsers'
import { generateId } from '../../utils/generateId'
import { Container } from '../Container'
import { UserCard } from '../UserCard'
import { Text } from '../Text'
import styles from './userlist.module.scss'

export const UsersList: React.FC = () => {
  const refListCard = useRef<HTMLUListElement>(null)
  const refButtonMore = useRef<HTMLButtonElement>(null)
  const [users, errorLoading, loading, pages, currentPage, load] = useUsers()
  const arrayPages = Array(pages).fill(0).map((_, i) => ({ page: i + 1 })).map(generateId)

  function showCard() {
    if (refListCard.current?.children) {
      const childrenArray = Array.from(refListCard.current.children);
      for (const item of childrenArray) {
        item.classList.add(styles.show);
      }
    }
  }

  function HideButton() {
    if (refButtonMore.current) {
      refButtonMore.current.style.display = 'none'
    }
  }

  function ShowButton() {
    if (refButtonMore.current) {
      refButtonMore.current.style.display = 'block'
    }
  }
  
  return (
    <section>
      <Container>
        {users.data.length === 0 && !errorLoading && !loading && (
            <Text As="h2" size={20} mobileSize={16} addClass={styles.description} normal>
              Список пользователей доступен только для зарегистрированных пользователей <br />
              <Link to={'/signup'}>
                Регистрация
              </Link>
            </Text>
        )}

        {loading && (
          <div style={{ textAlign: 'center' }}>
            <div className={styles.ldsDualRing}></div>
          </div>
        )}

        <ul className={styles.cardsList} ref={refListCard}>
          {users.data.map((user) => (
            <UserCard key={user.id} id={user.id} first_name={user.first_name} avatar={user.avatar} />
          ))}
        </ul>

        {errorLoading && (
          <div style={{ textAlign: 'center' }} role="alert">
            {errorLoading}
          </div>
        )}


        <div className={styles.bottomContainer}>
          <div className={styles.gap}></div>

          {users.data.length !== 0 && (
            <button
              className={styles.buttonMore}
              ref={refButtonMore}
              onClick={() => {
                showCard()
                HideButton()
              }}
            >
              Показать еще
            </button>
          )}

          <ul className={styles.paginationList}>
            {arrayPages.map((page, i) => (
              <li
                key={page.id}
                className={currentPage === page.page ? styles.paginationItemActive : styles.paginationItem}
                onClick={() => {
                  load(page.page)
                  ShowButton()
                }}
              >
                {page.page}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
