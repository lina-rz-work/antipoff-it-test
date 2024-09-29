import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { setCurrentPage, fetchUsers } from '../store/users/usersSlice'
import { IUsersState } from '../store/users/usersSlice'
import { IUsersData } from '../types/IUsersData'
import { AppDispatch } from '../store/store'

export function useUsers(): [IUsersData, string, boolean, number, number, (pageNumber: number) => void] {
  const dispatch = useDispatch<AppDispatch>()
  const token = sessionStorage.getItem('token')
  const users = useSelector<RootState, IUsersState>((state) => state.users)
  const pages = useSelector<RootState, number>((state) => state.users.total_pages)
  const currentPage = useSelector<RootState, number>((state) => state.users.page)
  const errorLoading = useSelector<RootState, string>((state) => state.users.error)
  const loading = useSelector<RootState, boolean>((state) => state.users.loading)

  useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      dispatch(fetchUsers(currentPage))
    }
  }, [token, dispatch, currentPage])

  function load(pageNumber: number) {
    dispatch(setCurrentPage(pageNumber))
  }

  return [users, errorLoading, loading, pages, currentPage, load]
}
