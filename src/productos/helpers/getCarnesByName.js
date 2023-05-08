import React from 'react';
import {carnes} from "../components/Products";

export const getCarnesByName = ( name ) => {

    name = name.toLocaleLowerCase().trim();

    if (name.length === 0)
        return [];

    return (
        carnes.filter( elem => elem.nombre.toLocaleLowerCase().includes( name ))
    );
};
