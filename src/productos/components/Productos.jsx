import React from 'react';
import {Navigate, useNavigate, useParams} from "react-router-dom";

import {getCarneById} from '../helpers'

export const Productos = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id)

    const carne = getCarneById(id);
    if (!carne){
        return <Navigate to="/"/>
    }
    console.log(carne)


    const onNavigateBack = () => {
        navigate(-1);

    }


    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={ `/assets/productos/${ carne.producto }.jpg` }
                    alt={ carne.detalles }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>Precio: { carne.precio }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Nombre:</b> { carne.nombre } </li>
                    <li className="list-group-item"> <b>Stock:</b> { carne.stock } </li>
                    <li className="list-group-item"> <b>Apreciación:</b> { carne.detalles } </li>
                </ul>

                <h5 className="mt-3"> Descripcion </h5>
                <p>{ carne.descripcionLarga }</p>

                <button
                    className="button-regresar"
                    onClick={ onNavigateBack }
                >
                    Regresar
                </button>

            </div>

        </div>
    );
};

