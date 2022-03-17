import React, { useEffect} from 'react';
import UserResult from './component/userResult';
import {users} from './actions'

const App = () => {
  const urlToFetch = "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
  useEffect(() => {
    fetch(urlToFetch, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {this.props.users(data)})
  })

  return(
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Dashboard</h1>
        <p className="lead">User list</p>
        <hr className="my-4"/>
        <div className="row">
          <UserResult />
        </div>
      </div>
    </div>
  )
}

export default App;
