import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from "../redux/userSlice";
import DeleteModal  from './Modal/ConfirmationDeleteModal';

const UserItem = ({ id, name, username, email, city }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteUser({id: id}))
    setShow(false)
  }

	return (
		<li className={`list-group-item && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between row'>
      <span className='d-flex align-items-center col-'>
					{id}
				</span>
				<span className='d-flex align-items-center col-2'>
					{name}
				</span>
        <span className='d-flex align-items-center col-2'>
					{username}
				</span>
        <span className='d-flex align-items-center col-'>
					{email}
				</span>
        <span className='d-flex align-items-center col-2'>
					{city}
				</span>
        <button className='btn btn-warning col-'>Edit</button>
				<button onClick={() => setShow(true)} className='btn btn-danger col-'>Delete</button>
        <DeleteModal show={show} onClose={() => setShow(false)} onDelete={() => handleDelete()}>
          <p>Delete this user: {name}</p>
        </DeleteModal>
			</div>
		</li>
	);
};

export default UserItem;