import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Shop.css";
import { Link } from "react-router-dom";
import useCart from "./../../hooks/useCart";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [displayProducts, setDisplayProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const size = 10;

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setDisplayProducts(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
                setIsLoading(false);
            });
    }, [page]);

    const handleAddToCart = (product) => {
        const exists = cart.find((pd) => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter((pd) => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        // const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart);
        // save to local storage as database for now
        addToDb(product.key);
    };

    const handleSearch = (event) => {
        const searchText = event.target.value;
        const matchedProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setDisplayProducts(matchedProducts);
        // console.log(matchedProducts);
    };

    return (
        <div>
            <div className="search-container">
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search product"
                />
                <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {isLoading ? (
                        <h3>Products is loading</h3>
                    ) : (
                        displayProducts.map((product) => (
                            <Product
                                key={product.key}
                                product={product}
                                handleAddToCart={() => handleAddToCart(product)}
                            ></Product>
                        ))
                    )}
                    <div className="pagination">
                        {[...Array(pageCount).keys()].map((number) => (
                            <button
                                className={number === page ? "selected" : ""}
                                key={number}
                                onClick={() => setPage(number)}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="purchase-btn">
                                Review Order
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
