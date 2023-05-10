import React, {useContext} from 'react';
import {CarnesList} from "../components/CarnesList";
import {ProductosContext} from "../components";

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

