import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from "../redux/userSlice";

const UserItem = ({ id, name, completed }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteUser({id: id}))
  }

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					{name}
				</span>
				<button onClick={() => handleDelete()} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default UserItem;