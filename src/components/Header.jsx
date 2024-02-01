import { useEffect,useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loginBtn,setLoginBtn]=useState('login');
    const status=useOnlineStatus();
    return (
      <div className="flex">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Status: {status?"🟢":"⛔"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">AboutUs</Link></li>
            <li><Link to="/contactUs">ContactUs</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/about">Cart</Link></li>
            <button className='login-btn' onClick={()=>loginBtn==='login'?setLoginBtn('logout'):setLoginBtn('login')}>{loginBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;