import React from 'react';

import {carnes} from "../components/Products";

export const getCarnesByCategoria = ( categoria ) => {

    const validCategorias = ['vip', 'normal'];
    if (!validCategorias.includes(categoria)){
        throw new Error(`${ categoria } no valida`);
    }

    return carnes.filter( carnes => carnes.categoria === categoria);

    // return (
    //     <div>
    //         carnes.
    //     </div>
    // );
};

