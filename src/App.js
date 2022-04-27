
import './App.css';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import NoPage from './components/NoPage';
import Product from './components/Product';
import Logout from './components/Logout';
import UserList from './components/UserList';
// import { Navbardata } from './components/Navbardata';
// import Sidebar from './components/Sidebar';
import "./components/nav.css"
import AddUser from './components/UserAdd';
import UserDetails from './components/UserDetails';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
  
            {/* <nav> 
         {Navbardata.map((item, index) => {
              return (
                <ol key={index} className={item.cName}>
                  <Link  to={item.path}>
                     {item.icon}
                  </Link>
                 </ol>
               );
            })}
            </nav> */}
         
      <Routes>
      <Route exact path='/' element={<Signin />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/products' element={<ProductList />} />
          <Route exact path='/products/:id' element={<Product />} />
          <Route exact path='/UserList' element={<UserList />} />
          <Route exact path='/adduser' element={<AddUser />} />
          <Route exact path='/userdetails' element={<UserDetails />} />
          <Route exact path='/message/:id' element={<Message />} />
          <Route exact path='/logout' element={<Logout />} />
          <Route  path="*" element={<NoPage />} />
         
      </Routes>
     
    
    </div>
  );
}
function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/" />;
}

function useAuth() {
  const auth = localStorage.getItem("token");
  return auth;
}
export default App;
