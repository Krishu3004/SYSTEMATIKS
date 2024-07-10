import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const [menu, setMenu] = useState("shop");

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setMenu("shop");
                break;
            case '/mens':
                setMenu("mens");
                break;
            case '/womens':
                setMenu("womens");
                break;
            case '/kids':
                setMenu("kids");
                break;
            default:
                setMenu("shop"); // Default to "shop" for unknown paths
                break;
        }
    }, [location.pathname]);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p>SYSTEMATIKS</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link to="/">Shop</Link>{menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("mens")}>
                    <Link to="/mens">Latest</Link>{menu === "mens" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("womens")}>
                    <Link to="/womens">Evergreen</Link>{menu === "womens" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link to="/kids">Best Collections</Link>{menu === "kids" ? <hr /> : null}
                </li>
            </ul>
            <div className='nav-login-cart'>
                {/* Ensure Link to '/login' is correctly configured */}
                <Link to='LoginSignup'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=" " /></Link>
                <div className="nav-cart-count">0</div> {/* Replace with actual cart item count logic */}
            </div>
        </div>
    );
}

export default Navbar;


