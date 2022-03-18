import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';

const AddUserForm = () => {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [isValue, setIsValue] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [validate, setValidate] = useState(false);

  const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
    dispatch(
      addUser({
        name: value,
        email: email,
      })
    )
  };
  
  const settingName = (event) => {
    setValue(event?.target?.value)
    if (event?.taget?.value !== '') {
      setIsValue(true)
    }
    if (isEmail && isValue) {
      setValidate(true)
    }
  }

  const settingEmail = (event) => {
    setEmail(event?.target?.value)
    if (event?.taget?.value !== '') {
      setIsEmail(true)
    }
    if (isEmail && isValue) {
      setValidate(true)
    }
  }

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add user...'
				value={value}
				onChange={(event) => settingName(event)}
			></input>

      <input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Email'
				value={email}
				onChange={(event) => settingEmail(event)}
			></input>

      {
        validate ?
        <button type='submit' className='btn btn-primary mb-2'>
				Add User
      </button> :
      <button type='submit' className='btn btn-primary mb-2' disabled>
        Add User
      </button>
      }
			
		</form>
	);
};

export default AddUserForm;