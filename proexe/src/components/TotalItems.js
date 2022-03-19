import React from 'react';
import { useSelector } from 'react-redux';

const TotalItems = () => {
  const allUsers = useSelector((state) =>  state.users.length)
return <h4 className='mt-3'>Total Complete Items: {allUsers}</h4>;
};

export default TotalItems;