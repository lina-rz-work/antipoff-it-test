import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Text } from '../../components/Text'
import styles from './signup.module.scss'

interface SignUpFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormData>()
  const navigate = useNavigate()

  const onSubmit = (data: SignUpFormData) => {
    sessionStorage.setItem('token', 'user_token')
    navigate('/')
  }

  const password = watch('password', '')

  return (
    <section className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Text As="h1" size={20} bold>
          Регистрация
        </Text>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Имя
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            placeholder="Имя"
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name', {
              required: 'Данное поле обязательно',
            })}
          />
          {errors.name?.message && (
            <div className={styles.error}>{errors.name.message}</div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Электронная почта*
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            placeholder="example@mail.ru"
            aria-invalid={errors.email ? 'true' : 'false'}
            {...register('email', {
              required: 'Пожалуйста, введите электронную почту',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Неверный формат электронной почты',
              },
            })}
          />
          {errors.email?.message && (
            <div className={styles.error}>{errors.email.message}</div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            Пароль
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="******"
            aria-invalid={errors.password ? 'true' : 'false'}
            {...register('password', {
              required: 'Данное поле обязательно',
            })}
          />
          {errors.password?.message && (
            <div className={styles.error}>{errors.password.message}</div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="confirmPassword">
            Подтвердите пароль
          </label>
          <input
            className={styles.input}
            type="password"
            id="confirmPassword"
            placeholder="******"
            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
            {...register('confirmPassword', {
              required: 'Пароли должны быть одинаковы',
              validate: (value) =>
                value === password || 'Пароли должны быть одинаковы',
            })}
          />
          {errors.confirmPassword?.message && (
            <div className={styles.error}>{errors.confirmPassword.message}</div>
          )}
        </div>

        <button className={styles.buttonForm} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </section>
  )
}

