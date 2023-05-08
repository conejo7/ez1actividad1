import React from 'react';
import {CarnesList} from "../components/CarnesList";

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

