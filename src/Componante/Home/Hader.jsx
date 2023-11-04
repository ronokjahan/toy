import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { Authcontex } from '../Authprovider/Authprovider';




const Hader = () => {
  const {user,logout}=useContext(Authcontex)
  console.log(user);
 const handellogout=()=>{
  logout()
  .then(() => {
    
  })
  .catch((error) => {
    console.log(error)
  });
  

 }
  const header=<>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/about'>About</Link></li>
  <li><Link to='/Serveces'>Services</Link></li>
  {user?.email ? <>
    <li><button onClick={handellogout}>Logout</button></li>
    <li><Link to='/order'>My Order</Link></li>
  </>:
  // <li><Link to='order'>Order</Link></li>
  <li><Link to='/login'>Login</Link></li>
  }
  </>
    return (
        <div className="navbar bg-base-100 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              
              <li>
                {header}
                
              </li>
            
            </ul>
          </div>
         <img className='btn btn-ghost normal-case text-xl' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {header}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-secondary">Appoinment</button>
        </div>
      </div>
    );
};

export default Hader;