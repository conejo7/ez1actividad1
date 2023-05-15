import React, {useContext} from 'react';
import {CarnesList} from "./CarnesList";
import {ProductosContext} from "./index";

export const CarneNormal = () => {
    return (
        <>
            <div>
                <h1>Carne Normal</h1>
                <CarnesList categoria={'normal'}/>

            </div>
        </>

    );
};

