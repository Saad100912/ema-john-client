import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/shop";
    // console.log("Came from", location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => {
            history.push(redirect_uri);
        });
    };

    return (
        <div className="login-form">
            <div>
                <h2>Please Login</h2>
                <form>
                    <input type="email" placeholder="Enter Your Email" />
                    <br />
                    <br />
                    <input type="password" placeholder="Enter Your Password" />
                    <br />
                    <br />
                    <input
                        className="purchase-btn"
                        type="submit"
                        value="Submit"
                    />
                </form>
                <p>
                    New to Ema-John? <Link to="/register">Create Account</Link>
                </p>
                <div>------------ or --------------</div>
                <br />
                <div>
                    <button
                        onClick={handleGoogleLogin}
                        className="purchase-btn"
                    >
                        Google Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
