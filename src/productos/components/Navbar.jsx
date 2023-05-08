
import React from 'react';
import '../../styles/Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";
export const Navbar1 = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {replace: true});
    }


    return (
        <>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/carne">CARNE NORMAL</Nav.Link>
                        <Nav.Link href="/vip">CARNE VIP</Nav.Link>
                        <Nav.Link href="/tipos">TIPOS</Nav.Link>
                        <Nav.Link href="/table">PRODUCTOS</Nav.Link>
                        <Nav.Link href="/search">BUSCAR</Nav.Link>
                    </Nav>
                    <button
                        className="nav-item nav-link btn"
                         onClick={ onLogout }
                    >
                        Salir
                    </button>
                </Container>
            </Navbar>
        </>

    )
}