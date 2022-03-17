import  React, {Component} from "react";
import {users} from '../actions'
import {connect} from 'react-redux';
import Search from "./loadUsers";
import {
  Button,
} from "react-bootstrap";
// import UsersItem from "./displayUsers";
import './style.css'

class UserResult extends Component {
  render() {
    const addNewUser = () => {
      this.props.dispatch({ type: "ADD"})
    }

    return(
      <>
        <h1>user result</h1>
        {console.log("JUST WTF ?? CHECK HERE =>", this.props.users)}
        <Button
          onClick={() => addNewUser()}
        >
          Add new
        </Button>
        {this.props.users === null ? 
        <Search /> :
        <div className="App">
        {console.log("DISPALY =>", this.props.users)}
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {this.props.users.map((val, key) => {
            console.log("USER =>", val)
            return (
              <tr key={key}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.address.city}</td>
                <td>EDIT</td>
                <td>DELETE</td>
              </tr>
            )
          })}
        </table>
      </div>
        // this.props.users.map((item) => {
        //   <UsersItem user={item} key={item.id}/> 
        // }) 
      }
        
      </>
    )
  }
}

function mapStateToProps(state) {
  console.log("MAP STATE =>", state)
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps, null )(UserResult);