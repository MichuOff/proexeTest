import React, {useEffect} from 'react';
import UserItem from './UserItem';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAsync } from '../redux/userSlice'

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersAsync())
  }, [dispatch])

  return (
    <ul className='list-group'>
      {console.log("USERs =>", users)}
      {users.map((user) =>
        <UserItem id={user?.id} name={user?.name} />
      )}
    </ul>
  );
};

export default UserList;