import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Create a new account</h2>
                <form onSubmit="">
                    <input type="text" placeholder="Enter Your Name" />
                    <br />
                    <br />
                    <input type="email" placeholder="Enter Your Email" />
                    <br />
                    <br />
                    <input type="password" placeholder="Enter Your Password" />
                    <br />
                    <br />
                    <input
                        type="password"
                        placeholder="Re-Enter Your Password"
                    />
                    <br />
                    <br />
                    <input
                        className="purchase-btn"
                        type="submit"
                        value="Register"
                    />
                    <br />
                    <br />
                </form>
                <p>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
                <div>------------ or --------------</div>
                <br />
                <div>
                    <button className="purchase-btn">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
