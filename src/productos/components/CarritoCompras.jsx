import React, {useContext} from 'react';
import {ProductosContext} from "./ProductosContext";

export const CarritoCompras = () => {

    const [product, setProduct] = useContext(ProductosContext);

    const quantity = product.reduce((acc, curr) => {
        console.log(acc+curr)
        return acc + curr.quantity;
    }, 0);

    const totalPrice = product.reduce(
        (acc, curr) => acc + curr.quantity * curr.precio,
        0
    );
    return (
        <div className="cart-container">
            <div>
                <div>Items in cart: {quantity}</div>
                <div>Total: ${totalPrice}</div>
                <button onClick={() => console.log(product)}>Checkout</button>
            </div>
        </div>
    );
};

