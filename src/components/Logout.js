import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Logout extends Component {
    constructor(props){
        super(props);
        localStorage.removeItem("token")
    }
  render() {
    return (
      <div>
        <h1>You have been logget out!!</h1>
        <Link to="/">Login Again</Link>
      </div>
    )
  }
}

export default Logout;
