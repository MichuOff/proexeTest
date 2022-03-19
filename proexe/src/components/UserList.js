import React, {useEffect, useState} from 'react';
import UserItem from './UserItem';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAsync } from '../redux/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersAsync())
  }, [dispatch])

  return (
    <ul className='list-group'>
      <li className={`list-group-item && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
      <span className='d-flex align-items-center'>
					ID
				</span>
				<span className='d-flex align-items-center'>
					Name
				</span>
        <span className='d-flex align-items-center'>
					Username
				</span>
        <span className='d-flex align-items-center'>
					Email
				</span>
        <span className='d-flex align-items-center'>
					City
				</span>
        <span className='d-flex align-items-center'>
					Edit
				</span>
        <span className='d-flex align-items-center'>
					Delete
				</span>
			</div>
		</li>
      {users.map((user) =>
        <UserItem id={user?.id} name={user?.name} username={user?.username} email={user?.email} city={user?.address?.city}/>
      )}
    </ul>
  );
};

export default UserList;