
import React, {useContext} from 'react';
import '../../styles/Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from "react-router-dom";
import {ProductosContext} from "./ProductosContext";
export const Navbar1 = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {replace: true});
    }
    const [producto, setProductos] = useContext(ProductosContext);

    const quantity = producto.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    return (
        <>
            <nav>
                <Link to={"/carne"} >
                    <h2>Store</h2>
                </Link>
                <ul className="nav-list">
                    <Link to={"/carrito"} >
                        <li>
                            Cart items: <span className="cart-count">{quantity}</span>
                        </li>
                    </Link>
                </ul>
            </nav>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/carne">CARNE NORMAL</Nav.Link>
                        <Nav.Link as={Link} to="/vip">CARNE VIP</Nav.Link>
                        <Nav.Link as={Link} to="/tienda">TIENDA</Nav.Link>
                        <Nav.Link as={Link} to="/compras">COMPRAR</Nav.Link>
                        <Nav.Link as={Link} to="/table">PRODUCTOS</Nav.Link>
                        <Nav.Link as={Link} to="/search">BUSCAR</Nav.Link>
                        <Nav.Link as={Link} to="/carrito">CARRITO DE COMPRAS {quantity}</Nav.Link>
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