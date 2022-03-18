import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';
import TotalItems from './components/TotalItems';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddUserForm />
			<UserList />
			<TotalItems />
		</div>
	);
};

export default App;
