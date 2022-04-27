import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from './Sidebar';

function Message() {
    const {id}=useParams();
  return (
   
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-md-4'><Sidebar></Sidebar></div>
              <div className='col-md-7' style={{backgroundColor:"white"}}>
        <h2>User Successfully Added</h2>
        <hr></hr>
        <p>user Successfully added with id: {id} </p>
      </div>
      </div>
      </div>
  )
}

export default Message
