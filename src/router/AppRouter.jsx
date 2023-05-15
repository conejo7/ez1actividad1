import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import Login from "../auth/pages/Login";

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