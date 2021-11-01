import React from "react";
import img from "../../images/boy-kid.gif";

const PlaceOrder = () => {
    const placeOrderStyle = {
        display: "flex",
        justifyContent: "center",
    };
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Order Place Complete</h1>
            <div style={placeOrderStyle}>
                <img style={{ width: "500px" }} src={img} alt="" />
            </div>
        </div>
    );
};

export default PlaceOrder;
