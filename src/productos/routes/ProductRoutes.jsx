import React from 'react';
import {Navbar1} from "../components/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";


import {Search} from "../components/Search";
import {Productos} from "../components/Productos";
import {ProductosProvider} from "../components/ProductosContext";
import {CarritoCompras} from "../components/CarritoCompras";
import {CarneCorriente} from "../components/CarneCorriente";
import {CarneNormal} from "../components/CarneNormal";
import {CarneVip} from "../components/CarneVip";
import {ProductosGeneral} from "../components/ProductosGeneral";


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

