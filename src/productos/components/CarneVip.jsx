import React from 'react';
import {CarnesList} from "./CarnesList";

export const CarneVip = () => {
    return (
        <>
            <div>
                <h1>Carne Especial</h1>
                <CarnesList categoria={'especial'}/>
            </div>
        </>
    );
};

