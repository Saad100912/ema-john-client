import React from "react";
import useProducts from "../../hooks/useProducts";
import useCart from "./../../hooks/useCart";
import Cart from "../Cart/Cart";
import "./OrderReview.css";
import ReviewProduct from "./../ReviewProduct/ReviewProduct";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import { useHistory } from "react-router-dom";

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = (key) => {
        const newCart = cart.filter((product) => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    };
    const handlePlaceOrder = () => {
        // setCart([]);
        // clearTheCart();
        history.push("/shipping");
    };
    return (
        <div className="review-container">
            <div className="review-product">
                {cart.map((product) => (
                    <ReviewProduct
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewProduct>
                ))}
            </div>
            <div>
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="purchase-btn">
                        Proceed To Shipping
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;
