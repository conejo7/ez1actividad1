import React from 'react';
import {Navbar1} from "../components/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";

import {CarneNormal, CarneVip, ProductosGeneral} from "../pages";
import {Search} from "../pages/Search";
import {Productos} from "../pages/Productos";
import {ProductosProvider} from "../components/ProductosContext";
import {CarnesList} from "../components/CarnesList";
import {CarritoCompras} from "../components/CarritoCompras";


export const ProductRoutes = () => {
    return (
        <>
            <ProductosProvider>
                <Navbar1/>
                <Routes>
                    <Route path="compras" element={<CarnesList/>}/>
                    <Route path="carne" element={<CarneNormal/>}/>
                    <Route path="vip" element={<CarneVip/>}/>
                    <Route path="table" element={<ProductosGeneral/>}/>
                    <Route path="productos/:id" element={<Productos/>}/>
                    <Route path="search" element={<Search/>}/>
                    <Route path="carrito" element={<CarritoCompras/>}/>
                    {/*<Route path="/" element={<Navigate to="/login"/>}/>*/}
                </Routes>
                </ProductosProvider>

        </>
    );
};

