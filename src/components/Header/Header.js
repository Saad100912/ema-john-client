import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <div className="nav-bar">
                <nav>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/review">Order Review</NavLink>
                    <NavLink to="/inventory">Manage Inventory</NavLink>
                    {user.email && <NavLink to="/orders">Orders</NavLink>}
                    {user.displayName ? (
                        <button onClick={logOut}>
                            Log Out <br />
                            <small>{user.displayName}</small>
                        </button>
                    ) : (
                        <NavLink to="/login">Login</NavLink>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Header;
