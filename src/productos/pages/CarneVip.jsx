import React from 'react';
import {CarnesList} from "../components/CarnesList";

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

