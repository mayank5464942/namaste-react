import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [loginBtn,setLoginBtn]=useState('login');
    const status=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);
    return (
      <div className="flex justify-between bg-pink-100 shadow-md mb-2">
        <div className="logo-container">
            <Link to="/"> <img
            className="w-56"
            src={LOGO_URL}
          /></Link>
         
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li className="px-4">Status: {status?"🟢":"⛔"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">AboutUs</Link></li>
            <li className="px-4"><Link to="/contactUs">ContactUs</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4"><Link to="/about">Cart</Link></li>
            <button className='px-4' onClick={()=>loginBtn==='login'?setLoginBtn('logout'):setLoginBtn('login')}>{loginBtn}</button>
            <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;