import { Container } from '../Container';
import { EIcons, Icon } from '../Icon';
import { Text } from '../Text';
import styles from './userdescription.module.scss';

export const UserDescription: React.FC = () => {
  return (
    <section>
      <Container>
        <div className={styles.descriptionWrapper}>
          <Text As="p" size={16} addClass={styles.description}>
            Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты. <br /><br />
            В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно". <br /><br />
            Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.
          </Text>
          <ul className={styles.contactsList}>
            <li className={styles.contactsItem}>
              <Icon size={20} name={EIcons.IconPhone} />
              <a href="tel:+79543334455">+7 (954) 333-44-55</a>
            </li>
            <li className={styles.contactsItem}>
              <Icon size={20} name={EIcons.IconMailto} />
              <a href="mailto:sykfafkar@gmail.com">sykfafkar@gmail.com</a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
