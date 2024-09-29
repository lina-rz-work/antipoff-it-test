import { UsersList } from "../../components/UsersList"
import { HomeHeader } from "../../components/HomeHeader"

export const Home: React.FC = () => {
  return (
    <>
      <HomeHeader />
      <UsersList />
    </>
  )
}
