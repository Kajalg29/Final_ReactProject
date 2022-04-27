import React, { Component } from 'react'
import "./Nopage.css";
export class NoPage extends Component {
  render() {
    return (
      <div className='container-fluid'>
        {/* <h3 className='alert alert-danger' role="alert" style={{margin:'50px auto'}}>Page Not Found</h3> */}
        <div className='not-found'>
        <h1>404</h1>
        <h3>Not Found</h3>
        </div>
      </div>
    )
  }
}

export default NoPage
