import { IUser } from './IUser'

export interface IUsersData {
  page: number
  data: IUser[]
  total_pages: number
}
