import React from "react";
import { useForm } from "react-hook-form";
import "./Shipping.css";
import useAuth from "./../../hooks/useAuth";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";

const Shipping = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Your orders has been placed successfully");
                    clearTheCart();
                    reset();
                }
            });
    };

    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Enter your name"
                    defaultValue={user.displayName}
                    {...register("name")}
                />
                <input
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <span className="error">This field is required</span>
                )}
                <input
                    placeholder="Enter Address"
                    defaultValue=""
                    {...register("address")}
                />
                <input
                    placeholder="Enter City"
                    defaultValue=""
                    {...register("city")}
                />
                <input
                    placeholder="Enter phone number"
                    defaultValue=""
                    {...register("phone")}
                />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;
