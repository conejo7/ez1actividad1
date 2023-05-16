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
                               detalles,
                               empresa, descripcion
                           }) => {
    const [product, setProduct] = useContext(ProductosContext);
    const addToCart = () => {
        setProduct((elem) => {
            const isItemsFound = elem.find((item) => item.id === id); //validacion se busca si el item esta dentro de los items
            if (isItemsFound) {
                return elem.map((item) => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        return item;
                    }
                });
            } else {
                return [...elem, {id, quantity: 1, precio}];
            }
        });
    };

    const getQuantityById = (id) => {
        return product.find((item) => item.id === id)?.quantity || 0;
    };

    const cantidadporItem = getQuantityById(id);

    const carneImageUrl = `/assets/carne/${id}.jpg`;
    //console.log(carneImageUrl);

    return (
        <>


            <div className="col">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <img src={carneImageUrl} className="carneImage"/>
                            <br/><br/>
                        </div>
                        <div>
                            <h5 className="card-title">Nombre: {nombre}</h5>
                            <p className="card-text">Precio: {precio}</p>
                            <p>Categoria: {categoria}</p>
                            <p>Stock: {stock}</p>
                            <p>Detalles: {detalles}</p>
                            <p>Empresa: {empresa}</p>
                            <p>Descripcion: {descripcion}</p>
                            <Link to={`/productos/${id}`}>
                                Más información sobre este producto ...
                            </Link>
                        </div>
                    </div>
                    <div className="text-xl-center">
                        {cantidadporItem > 0 && (
                            <div className="item-quantity">Cantidad añadida al carrito: {cantidadporItem}</div>
                        )}
                        {cantidadporItem === 0 ? (
                            <div >
                                <button className="button-add" onClick={() => addToCart()}>Añadir a carrito</button>
                                <hr/>
                            </div>
                        ) : (
                            <button className="button-add" onClick={() => addToCart()}>Añadir más</button>
                        )}
                    </div>
                    <Link to={"/carrito"}>
                        <li>Ver Carrito de compras cantidad de productos: <span className="cart-count"></span></li>
                    </Link>
                    <br/>

                </div>

                <br/>

            </div>


        </>
    );
};

