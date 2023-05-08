import React from 'react';
import {useForm} from "../components/useForm";
import {useLocation, useNavigate} from "react-router-dom";

import queryString from 'query-string';
import {getCarnesByName} from "../helpers";
import {CarneImage} from "../components";


export const Search = () => {

    const navigate = useNavigate();

    const location = useLocation();
    console.log({location})

    const {q = ''} = queryString.parse(location.search);
    console.log({q})

    const {searchText, onInputChange} = useForm({searchText: q});

    const carnes = getCarnesByName(q);

    const onSearchSubmit = (e) => {
        e.preventDefault();
        console.log({searchText})
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>BUSQUEDAS</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Buscando</h4>
                    <hr/>
                    <form onSubmit={onSearchSubmit}>
                        <input type="text" className="form-control" name="searchText" placeholder="Buscar producto"
                               autoComplete="off"
                               value={searchText}
                               onChange={onInputChange}>
                        </input>
                        <button className="busqueda">Buscar</button>
                    </form>
                </div>
                <div className="col-6">
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        (q === '')
                            ? <div className="alertInfo">
                                Buscar un producto
                            </div>
                            : (carnes.length === 0)
                            && <div className="alertDanger">
                                No se encontraon resultados del {q}
                            </div>
                    }
                </div>
                <div>
                    {carnes.map(elem => (
                            <CarneImage key={elem.id} {...elem}/>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

