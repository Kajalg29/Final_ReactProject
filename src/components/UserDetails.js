import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import classes from "./User.css";

const UserDetails = () => {
  const {id}=useParams()
  const [data, setData] = useState({});
  const [img, setImg]=useState({})
  const baseURL = `https://reqres.in/api/users/${id}`;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let loggedIn = true;
  if (token === null) {
    loggedIn = false;
  }
  useEffect(() => {
    axios.get(baseURL).then((res) => {
     // setData(res.data)
      setImg(res.data);
    });
  }, []);
 
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      setData(await response.json());
     
    };
    getUser();
  }, []);
  return (
    <div className="container-fluid main">
      <div className="col-md-4">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-7 user-data ">
        <h2>User Details</h2>
        <hr />
        <div>
          <table>
            <tbody>
              <tr>
                <td>
               {/* <img src={data && data.data ? data.data.avatar: "some default src"}  className="img-fluid img-round" alt="profile" /> */}
               <img src={img && img.data ? img.data.avatar: "some default src"}  className="img-fluid img-round" alt="profile" />
                </td>
                <td>
                  <form>
                    <div className="form-group block">
                      <label className="lable">First Name</label>
                      <input
                        type="text"
                        className="form-control ib"
                        placeholder={data  ? data.name: ''}
                       // placeholder={data && data.data ? data.data.first_name: ''}
                      />
                    </div>
                    <div className="form-group block">
                      <label className="lable">Last Name</label>
                      <input
                        type="text"
                        className="form-control ib"
                        placeholder={data  ? data.username: ''}
                       // placeholder={data && data.data ? data.data.last_name: ''}
                      />
                    </div>
                    <div className="form-group block">
                      <label className="lable">Email</label>
                      <input
                        type="email"
                        className="form-control ib"
                        placeholder={data  ? data.email: ''}
                      //  placeholder={data && data.data ? data.data.email:''}
                      />
                    </div>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <br></br>
        <br></br>

        <div style={{ float: "left", margin: "80px" }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => navigate("/UserList")}
          >
            Back
          </button>
        </div>
      </div>

      {loggedIn === false ? <Navigate to="/" /> : ""}
    </div>
  );
};

export default UserDetails;
