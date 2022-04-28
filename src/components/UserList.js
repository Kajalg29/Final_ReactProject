import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Sidebar from "./Sidebar";
import "./userlist.css";
import { Link, Navigate } from "react-router-dom";
export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    const token=localStorage.getItem('token');
    let loggedIn=true;
    //console.log(token)
    if(token===null){
      loggedIn=false
    }
    this.state = {
      offset: 0,
      users: [],
      orgtableData: [],
      perPage: 4,
      currentPage: 0,
      loggedIn
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };
  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      users: slice,
    });
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      var data = res.data;

      var slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        orgtableData: res.data,
        users: slice,
      });
    });
  }

  render() {
    if(this.state.loggedIn===false){
      return <Navigate to="/" />
    }
    return (
      <>
       {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" /> */}
      <div className="conatiner-fluid  disp">
     
        <div className="col-md-4">
          <Sidebar />
        </div>
        
        <div className="col-md-8">
          <div className="users">
           
          <h4 className="p-2 text-dark"> List Users</h4>
          <hr/>
         <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"> ID </th>
                  <th scope="col">Name </th>
                  <th scope="col">Email</th>
                  <th scope="col">Website</th>
                  <th scope="col">City</th>
                  <th scope="col">Zipcode</th>
                  <th>Location</th>
                </tr>
              </thead>

              {this.state.users.map((item, index) => {
                return (
                  <tbody>
                    <tr key={item.id}>
                      <th scope="row" >
                        <input type="checkbox" />{item.id}
                      </th>
                      <td ><Link to={`/userdetails/${item.id}`} style={{textDecoration:"none"}}>{item.name}</Link></td>
                      <td>{item.email}</td>
                      <td>{item.website}</td>
                      <td>{item.address.city}</td>
                      <td>{item.address.zipcode}</td>
                      <td><i className="fa fa-map-marker gmap"></i></td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            </div> 
          <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
        </div>
        </div>
         </div>
         </>
    );
  }
}