import React from 'react';
import UserItem from './UserItem';
import { useSelector } from 'react-redux';

const UserList = () => {
  const users = useSelector((state) => state.users);

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