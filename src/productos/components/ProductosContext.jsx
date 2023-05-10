import React, {createContext, useState} from 'react';

export const ProductosContext = createContext(null);
export const ProductosProvider = ({children}) => {
   const [ product , setProduct ] = useState([]);
    return (
        <ProductosContext.Provider value={[ product,setProduct]}>
            {children}
        </ProductosContext.Provider>
    );
};

