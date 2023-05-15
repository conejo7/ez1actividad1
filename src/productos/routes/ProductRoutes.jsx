import React from 'react';
import {Navbar1} from "../components/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";

import {CarneCorriente, CarneNormal, CarneVip, ProductosGeneral} from "../pages";
import {Search} from "../pages/Search";
import {Productos} from "../pages/Productos";
import {ProductosProvider} from "../components/ProductosContext";
import {CarritoCompras} from "../components/CarritoCompras";


export const ProductRoutes = () => {
    return (
        <>
            <ProductosProvider>
                <Navbar1/>
                <Routes>
                    <Route path="carne" element={<CarneNormal/>}/>
                    <Route path="especial" element={<CarneVip/>}/>
                    <Route path="corriente" element={<CarneCorriente/>}/>
                    <Route path="table" element={<ProductosGeneral/>}/>
                    <Route path="search" element={<Search/>}/>
                    <Route path="productos/:id" element={<Productos/>}/>
                    <Route path="carrito" element={<CarritoCompras/>}/>

                </Routes>
                </ProductosProvider>

        </>
    );
};

