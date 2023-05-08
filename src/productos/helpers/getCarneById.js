import React from 'react';
import {carnes} from "../components/Products";

export const getCarneById = (id) => {

    return carnes.find( elem => elem.id === id);

};

