import React, { Component } from "react";
import {
  Button,
} from "react-bootstrap";
import { users } from "../actions";
import { connect } from "react-redux";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }
  search() {
    console.log("Movie: ", this.state.query);
    let url = "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.users(data);
      });
  }
  render() {
    return (
      <div>
        <Button bsStyle="success" onClick={() => this.search()}>
          Load users
        </Button>
      </div>
    );
  }
}
export default connect(null, { users })(Search);