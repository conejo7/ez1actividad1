import React, {useContext, useEffect, useState} from 'react';
import {ProductosContext} from "./ProductosContext";
import {getAnimacion} from "../helpers/getAnimacion";

import {AnimacionItem} from "./AnimacionItem";

export const CarritoCompras = () => {

    const [product, setProduct] = useContext(ProductosContext);

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getAnimacion( );
        setImages(newImages);
    }

    useEffect(()=>{
        getImages();
    }, [])
    //dependencias vacias solo se lanza una vez

    const quantity = product.reduce((acc, curr) => {
       // console.log(acc + curr)
        return acc + curr.quantity;
    }, 0);

    const totalPrice = product.reduce(
        (acc, curr) => acc + curr.quantity * curr.precio,
        0
    );
    return (
        <>
            <div className="cart-container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Items en el carrito: {quantity}</h5>
                        <h6 className="card-subtitle">Total: ${totalPrice}</h6>
                        <p className="card-text">Precio a pagar; Muchas gracias por su compra</p>
                    </div>
                </div>
            </div>
            {
                images.map( ( image ) => (
                    <AnimacionItem
                        key={ image.id }
                        { ...image }
                    />
                ))
            }
        </>
    );
};

