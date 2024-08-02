// import foodlogo from '../../public/food-logo.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from "react-icons/md";

// Creating Header
const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const { loggedInUser } = useContext(UserContext);

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="header flex justify-between bg-yellow-200 shadow-lg sm:bg-orange-200">
            <div className="flex">
                <div className="logo-container">
                    <img src="https://img.freepik.com/premium-vector/logo-restaurant-with-plate-food-fork_788759-2644.jpg?w=1480" className="logo w-36 p-4"></img>
                </div>
                <div className="app-name flex items-center">
                    <p className="font-bold text-4xl">Namaste Food 🙏</p>
                </div>
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4">
                    <li className="p-4">
                        Online Status: { onlineStatus ? "🟢" : "🔴" }
                    </li>
                    <li className="p-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/cart">
                            <div className="flex">
                                <MdShoppingCart size="25px"/>
                                <p>({cartItems.length})</p>
                            </div>
                        </Link>
                    </li>
                    <button className='login bg-green-200 px-4 my-2 rounded-lg hover:bg-blue-200' onClick={ () => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }
                    }>{btnName}</button>
                    <li className="p-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
