import React, {useContext} from 'react';
import {getCarnesByCategoria} from "../helpers";
import {Link} from "react-router-dom";
import {ProductosContext} from "./ProductosContext";


export const CarneImage = ({
                               id,
                               nombre,
                               precio,
                               categoria,
                               stock,
                               detalles
                           }) => {
    const [product, setProduct] = useContext(ProductosContext);

    const addToCart = () => {
        setProduct((currItems) => {
            const isItemsFound = currItems.find((item) => item.id === id);
            if (isItemsFound) {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currItems, {id, quantity: 1, precio}];
            }
        });
    };

    const getQuantityById = (id) => {
        return product.find((item) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(id);

    const carneImageUrl = `/assets/carne/${id}.jpg1`;
    //console.log(carneImageUrl);

    return (
        <>

            <div className="item-box">
                {quantityPerItem > 0 && (
                    <div className="item-quantity">{quantityPerItem}</div>
                )}

                <div>{nombre}</div>
                {/*<img src={imgUrl} width="80" height="55"/>*/}
                <div className="item-price">${precio}</div>

                {quantityPerItem === 0 ? (
                    <button className="item-add-button" onClick={() => addToCart()}>
                        + Add to cart
                    </button>
                ) : (
                    <button className="item-plus-button" onClick={() => addToCart()}>
                        + add more
                    </button>
                )}


            </div>

            <div className="col">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <img src={carneImageUrl} className="card-img"/>
                            {/*<img src={`/assets/carne/${id}.jpg`} className="card-img" alt="blank"/>*/}
                        </div>

                        <div>
                            <h5 className="card-title">Nombre: {nombre}</h5>
                            <p className="card-text">Precio: {precio}</p>
                            <p>Categoria: {categoria}</p>
                            <p>Stock: {stock}</p>
                            <p>Detalles:{detalles}</p>
                            <Link to={`/productos/${id}`}>
                                Más..
                            </Link>
                        </div>

                    </div>
                    <Link to={"/carrito"} >
                        <li>
                            Ver Carrito de compras cantidad de productos: <span className="cart-count"></span>
                        </li>
                    </Link>
                </div>
            </div>
        </>
    );
};

