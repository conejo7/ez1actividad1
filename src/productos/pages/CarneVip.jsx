import React from 'react';
import {CarnesList} from "../components/CarnesList";

export const CarneVip = () => {
    return (
        <>
            <div>
                <h1>Carne Vip</h1>
                <CarnesList categoria={'vip'}/>
            </div>
        </>
    );
};

