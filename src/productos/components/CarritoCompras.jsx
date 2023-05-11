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
        <>
        <div className="cart-container">
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Items en el carrito: {quantity}</h5>
                    <h6 className="card-subtitle mb-2">Total: ${totalPrice}</h6>
                    <p className="card-text">Precio a pagar; Muchas gracias por su compra</p>
                </div>
            </div>
        </div>
        </>
    );
};

