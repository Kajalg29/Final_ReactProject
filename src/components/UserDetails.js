
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import classes from "./User.css"

const UserDetails=()=>{
    const [data,setData]=useState({});
    const baseURL = "https://reqres.in/api/users/2";
    const navigate = useNavigate();
    const token=localStorage.getItem('token');
    let loggedIn=true;
    if(token===null){
        loggedIn=false
       }
    useEffect(()=>{
        axios.get(baseURL)
        .then((res)=>{setData(res.data)})
    },[])
    //console.log(data.data.id)
    // if (!data) return null;
    return(
       
        <div className="container-fluid main">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 user-data ">
               
        <h2>User Details</h2>
      <hr/>
      <div >

<table>

<tbody>
    <tr>
    <td>
    <img src={data.data.avatar} alt="profile" className="img-fluid img-round"/>
    

    </td>  
     <td >
     <form>
  <div className="form-group block">
    <label className="lable" >First Name</label>
    <input type="text" className="form-control ib"  placeholder= {data.data.first_name} />
  </div>
  <div className="form-group block">
    <label className="lable">Last Name</label>
    <input type="text" className="form-control ib"  placeholder= {data.data.last_name} />
  </div>
  <div className="form-group block">
    <label className="lable">Email</label>
    <input type="email" className="form-control ib"  placeholder= {data.data.email}  />
  </div>
</form>
        </td>    
    </tr>

</tbody>

</table>
</div>
       

        <br></br><br></br>

<div style={{float:"left",margin:"80px"}}>
   
<button type="button" className='btn btn-secondary btn-sm' onClick={()=>navigate('/UserList')}>Back</button>

</div>
        </div>

        {loggedIn === false? <Navigate to="/"/>: ''}
        </div>
    )


}

export default UserDetails;