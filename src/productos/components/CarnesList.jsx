import React from 'react';
import {getCarnesByCategoria} from "../helpers";
import {CarneImage} from "./CarneImage";


export const CarnesList = ({ categoria }) => {

    const carnes = getCarnesByCategoria( categoria);

    return (
        <div>
            {carnes.map(elem => (
                    <CarneImage key={elem.id} {...elem}/>
                )
            )}
        </div>
    );
};

