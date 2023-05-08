import React from 'react';
import {Navbar1} from "../components/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";

import {CarneNormal, CarneVip, ProductosGeneral} from "../pages";
import {Search} from "../pages/Search";
import {Productos} from "../pages/Productos";


export const ProductRoutes = () => {
    return (
        <>
            <Navbar1/>
            <Routes>
                <Route path="carne" element={<CarneNormal/>}/>
                <Route path="vip" element={<CarneVip/>}/>
                <Route path="table" element={<ProductosGeneral/>}/>
                <Route path="productos/:id" element={<Productos/>}/>
                <Route path="search" element={<Search/>}/>
                {/*<Route path="/" element={<Navigate to="/login"/>}/>*/}
            </Routes>
        </>
    );
};

