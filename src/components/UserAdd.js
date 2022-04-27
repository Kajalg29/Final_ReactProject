import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
const AddUser=()=>{
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [pass,setPass]=useState('');
    const [userAdded,setUserAdded]=useState();
    const token=localStorage.getItem('token');
    let loggedIn=true;
    if(token===null){
        loggedIn=false
       }
    const submitHandler=(event)=>{
        event.preventDefault();
        axios.post('https://reqres.in/api/register',{
            
            "email":name,
            "password": pass
        }).then((res)=>{setUserAdded(true); setId(res.data.id)}).catch(()=>setUserAdded(false)); 
        
    
    }
    const resetHandler=(event)=>{
        event.preventDefault();
        setName('');
        setPass('');
    }

    return(
        
       <div className=" container-fluid">
        <div className="row">
            <div className="col-md-4"><Sidebar></Sidebar></div>
            <div className="col-md-7" style={{backgroundColor:"white"}}>
        <h2>Add a user</h2>
       <hr/>

      
        <input type="email" placeholder="Username" name="email" value={name} onChange={e=>{setName(e.target.value)}} id="email" data-testid="email-field" className="ib"  ></input><br></br><br></br>
       <input type="text" placeholder="Password"  name="password" value={pass}  onChange={e=>setPass(e.target.value)}  id="password" data-testid="password-field" className="ib" ></input><br></br><br></br> 


       <button type="button"  className="btn btn-primary"  id="addBtn" data-testid="add-btn"   onClick={submitHandler}>Add User </button>
       <span>  </span>
       <button type="reset" className="btn btn-secondary" id="resetBtn" data-testid="reset-btn" onClick={resetHandler} >Reset</button>



            {
               
                userAdded && <h4 className='primary mt-4 center'><Navigate to={`/message/${id}`} /></h4>

            }
            {
                userAdded===false && <h4 className='primary mt-4 center'>Please Try Again</h4>
            }
</div>
        </div>
        {loggedIn ===false? <Navigate to="/"/>: ''}
        </div>
        
    )

    }

    export default AddUser;