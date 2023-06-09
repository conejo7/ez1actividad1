
import React, {useContext} from 'react';
import '../../styles/Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";

export const Navbar1 = () => {

    const navigate = useNavigate();
    const onLogout = () => {
        navigate('/login', {replace: true});
    }
    return (
        <>
            <br/>
            <Navbar className="navbar">
                <Container className="">
                    <Navbar.Brand >SELECCIONE SU COMPRA</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/carne">PRODUCTO NORMAL</Nav.Link>
                        <Nav.Link as={Link} to="/especial">PRODUCTO ESPECIAL</Nav.Link>
                        <Nav.Link as={Link} to="/corriente">PRODUCTO COMÚN</Nav.Link>
                        <Nav.Link as={Link} to="/search">BUSCAR PRODUCTOS (IMAGEN)</Nav.Link>
                        <Nav.Link as={Link} to="/table">PRODUCTOS GENERAL</Nav.Link>
                        <Nav.Link as={Link} to="/carrito">CARRITO DE COMPRAS </Nav.Link>
                    </Nav>
                    <button
                        className="button-salir"
                         onClick={ onLogout }>
                        Salir
                    </button>
                </Container>
            </Navbar>
        </>

    )
}