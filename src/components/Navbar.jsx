import React, { useContext, useState } from "react";

import { Navbar, Nav, Form, FormControl, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext";


const NavBar = () => {
    const [search , setSearch] = useState("")
    const [products,setProducts] = useContext(ProductContext)

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    const fromSearch = (e) => {
        e.preventDefault()
        const filteredProducts = products.data.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
        setProducts({data:filteredProducts})
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
            <Navbar.Brand href="#home">Inventory Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Badge bg="primary" className="mt-2">Product In Stock {products?.data?.length || 0 } </Badge>
                </Nav>
                <Form onSubmit={fromSearch} className="d-flex">
                    <Link to="/addproduct" className="btn btn-primary btn-sm me-4">Add Product</Link>
                    <FormControl type="text" placeholder="Search Product" className="me-sm-2" value={search} onChange={updateSearch}/>
                    <Button type="submit" variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
