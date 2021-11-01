import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const { cart } = props;
    // console.log(props);
    // console.log(cart);
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = ((total + shipping) * 10) / 100;
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart-container">
            <h3>Order Summary</h3>
            <h5>
                Items Ordered:{" "}
                <span className="cart-price-numbers">{totalQuantity}</span>
            </h5>
            <p>
                Total:{" "}
                <span className="cart-price-numbers">${total.toFixed(2)}</span>
            </p>
            <p>
                Shipping:{" "}
                <span className="cart-price-numbers">${shipping}</span>
            </p>
            <p>
                Tax:{" "}
                <span className="cart-price-numbers">${tax.toFixed(2)}</span>
            </p>
            <p className="grand-total">
                Grand Total:{" "}
                <span className="cart-price-numbers">
                    ${grandTotal.toFixed(2)}
                </span>
            </p>
            <div className="shop-cart-review-btn">{props.children}</div>
        </div>
    );
};

export default Cart;
