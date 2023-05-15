import React from 'react';
import {CarnesList} from "./CarnesList";

export const CarneCorriente = () => {
    return (
        <>
            <div>
                <h1>Carne Corriente</h1>
                <CarnesList categoria={'corriente'}/>

            </div>
        </>
    );
};

