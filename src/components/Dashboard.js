import axios from 'axios'
import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import "./dash.css"
export class Dashboard extends Component {
  constructor(props){
    super(props);
    const token=localStorage.getItem('token');
    let loggedIn=true;
    //console.log(token)
    if(token===null){
      loggedIn=false
    }
    this.state={
      loggedIn
    }
  }
  render() {
    if(this.state.loggedIn===false){
      return <Navigate to="/" />
    }
    return (
      <div className='container-fluid disp-dash'>
        {/* <div className='row'> */}
        <div className='col-md-4 col-sm-2'><Sidebar></Sidebar></div>
        <div className='col-md-7 dash-content '>
          
        <h2>Welcome to Dashboard</h2>
        </div>
        {/* </div> */}
      </div>
    )
  }
}

export default Dashboard
