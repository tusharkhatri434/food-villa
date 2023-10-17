import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.jpeg'; 
import useOnline from '../utils/useOnline';
import {useSelector} from "react-redux";

// let logo = require("../Assets/logo.jpeg");
// images are always default export

const Header = () => {
  
  const cartItems = useSelector((store)=>store.cart.items)
// using context for data ----------
  const {user,setUser} = useContext(UserContext);
  

  // using my online custom hook
  const isOnline = useOnline();

  return (
    <div className="flex justify-between items-center text-white shadow-gray-400 bg-black sticky top-0">
      <Link to="/">
        <img data-testid="logo" className="w-28" alt="logo" src={Logo} />
      </Link>
      <ul className="flex gap-7  flex-wrap  text-xl ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <Link to="/offers">Offers %</Link>
        </li> */}
        <Link to="/cart">
          <li data-testid="cart" >Cart- {cartItems.length}</li>
        </Link>
        <li data-testid="online-status" className="mr-5">
          {isOnline ? "🟢" : "🔴"}
        </li>
      </ul>
    </div>
  );
};

export default Header;