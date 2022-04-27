import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { SidebarData } from "./SidebarData";
import "./Sidebars.css";
import * as IconName from "react-icons/ai";
import { useHistory, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";

function Sidebar() {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    < div className="" >
      <div className="row">
      <button className="yms">YMS</button>
      <IconContext.Provider value={{ color: "black" }}>
        <nav className={"nav-menu active "}>
          <ul className="nav-menu-items">
            <h5 className="m-2 text-dark"><FiUser/> Eve Holt</h5>
            <hr />

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <hr/>
            <div className="logout m-4" onClick={Logout}>
              <IconName.AiOutlineArrowLeft />
              <label >Logout</label>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
      </div>
    </div>
  );
}

export default Sidebar;