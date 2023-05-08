import React from 'react';
import {getCarnesByCategoria} from "../helpers";
import {Link} from "react-router-dom";


export const CarneImage = ({
                               id,
                               nombre,
                               precio,
                               categoria,
                               stock,
                               detalles}) => {


     const carneImageUrl =  `/assets/carne/${id}.jpg1`;
    //console.log(carneImageUrl);

    return (
        <div className="col">
           <div className="card">
                <div className="row">
                    <div className="col">
                        <img src={carneImageUrl} className="card-img" />
                        {/*<img src={`/assets/carne/${id}.jpg`} className="card-img" alt="blank"/>*/}
                    </div>

                    <div>
                        <h5 className="card-title">Nombre: { nombre}</h5>
                        <p className="card-text">Precio: {precio}</p>
                        <p>Categoria: {categoria}</p>
                        <p>Stock: {stock}</p>
                        <p>Detalles:{detalles}</p>
                        <Link to={`/productos/${ id }`}>
                            Más..
                        </Link>
                    </div>

                </div>
           </div>
        </div>
    );
};

