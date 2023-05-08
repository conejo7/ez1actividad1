import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "../productos/components/HomePage";
import {ProductsTable} from "../productos/components/ProductsTable";
import Login from "../auth/pages/Login";
import Carne from "../productos/pages/CarneNormal";
import TiposCarne from "../productos/pages/CarneVip";

import {Navbar1} from "../productos/components/Navbar";
import {ProductRoutes} from "../productos";



export const AppRouter = () => {
    return (
        <>
            {/*añadimos padding*/}
               <div className="container">
                   <Routes>
                       <Route path="login" element={<Login/>}/>
                       <Route path="/*" element={<ProductRoutes/>}/>
                   </Routes>
               </div>

        </>

    );
};

export default AppRouter;