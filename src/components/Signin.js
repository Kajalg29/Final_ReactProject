import React, { Component } from "react";
import axios from 'axios'
import { Link, Navigate } from "react-router-dom";
import "./signin.css"
import Dashboard from "./Dashboard";
export class Signin extends Component {
  state={};
   
  handleSubmit=e=>{
    let loggedIn=false;
    e.preventDefault();
    const data={
      email:this.email,
      password:this.password,
      loggedIn
    }
    axios.post('https://reqres.in/api/login',data)
    .then(res=>{
      console.log(res)
      if(data.email==="eve.holt@reqres.in" && data.password==="cityslicka"){
        localStorage.setItem('token',res.data.token);
        this.setState({
          loggedIn:true
        })
      }
   
    }).catch(err=>console.log(err))
  }
  render() {
    if(this.state.loggedIn){
       return <Navigate to={"/dashboard"} />
      // return <Dashboard />
    }
     
    return (
      
      <div className="container main">
        <div className="innerdiv">
            <h3 className="badge bg-primary" id="LogoBtn" data-testid="btn-logo"
>Yms</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <input
                id="email"
                data-testid="email-field"
                type="email"
                className="form-control"
                placeholder="Username"
                onChange={e=>this.email=e.target.value}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="password"
                data-testid="password-field"
                className="form-control"
                placeholder="Password"
                onChange={e=>this.password=e.target.value}
                required
              />
            </div>
            <button type="submit" id="LoginBtn" className="btn btn-primary m-3" data-testid="btn-login">
              Login
            </button>
            <button type="reset" id="CancelBtn" className="btn btn-secondary" data-testid="cancel-btn">
              Cancel
            </button>
            <p><strong>OR</strong></p>
            <div><Link className="btn btn-outline-primary m-2" to="www.facebook.com" id="googleBtn" data-testid="btn-google">Login with Facebook</Link></div>
            <div><Link className="btn btn-outline-danger" to="www.google.com" id="facebookBtn" data-testid="facebook-login-btn">Login with Google</Link></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
