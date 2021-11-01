// Purpose - user wants to add a product
// 1. Find the place to store the data
// 2. Get previous data if there is any. if there is no data stored before then create a new object to store it. (getDb)
// 3. Add new product data in this object (addToDb)

const addToDb = (id) => {
    const stored_cart = getStoredCart();
    if (id in stored_cart) {
        stored_cart[id] = stored_cart[id] + 1;
    } else {
        stored_cart[id] = 1;
    }
    updateDb(stored_cart);
};

const removeFromDb = (id) => {
    const storedCart = getStoredCart();
    delete storedCart[id];
    updateDb(storedCart);
};

const getStoredCart = () => {
    const exists = localStorage.getItem("shopping_cart");
    return exists ? JSON.parse(exists) : {};
};

const updateDb = (cart) => {
    localStorage.setItem("shopping_cart", JSON.stringify(cart));
};

const clearTheCart = () => {
    localStorage.removeItem("shopping_cart");
};

export { addToDb, getStoredCart, removeFromDb, clearTheCart };
