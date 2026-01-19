import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers,
  selectFilteredUsers,
} from '../features/users/usersSlice';

export function useUsers() {
  const dispatch = useDispatch();

  const users = useSelector(selectFilteredUsers);
  const { status, error, search } = useSelector(state => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const setSearch = (value) => {
    dispatch({ type: 'users/setSearch', payload: value });
  };

  return {
    users,
    status,
    error,
    search,
    setSearch,
  };
}
