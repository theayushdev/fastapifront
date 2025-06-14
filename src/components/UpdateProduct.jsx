import React , {useContext} from "react";
import { Form,Button,Card } from "react-bootstrap";
import { UpdateProductContext } from "../UpdateProductContext";
import { useState } from "react";

const UpdateProduct = () => {
    const {updateProduct,setUpdateProduct} = useContext(UpdateProductContext)

    const updateForm = (e) => {
        e.preventDefault();
        setUpdateProduct({...updateProduct , [e.target.name] : e.target.value })
    }

    const postData = async (e) => {
        e.preventDefault();
        const apiBase = import.meta.env.VITE_API_URL;
        const url = apiBase + "/product/" + updateProduct['id']

        const response = await fetch(
            url,
            {
                method: 'PUT',
                mode:'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": updateProduct['ProductName'],
                    "description": updateProduct['ProductDescription'],
                    "quantity_in_stock": updateProduct['ProductQuantity'],
                    "quantity_sold": updateProduct['ProductQuantitySold'],
                    "price": updateProduct['ProductPrice'],
                    "revenue": updateProduct['ProductRevenue']

                })
            }
                        
        )

        response.json().then(
            (data) => {
                console.log(data)
                if(data.status === 'ok')
                    {
                        alert("Product Updated Successfully")
                        
                    }
                    else{
                        alert("Failed to Update Product")
                    }
            }
        )

        setUpdateProduct({
            ProductName: "",
            ProductDescription: "",
            ProductPrice: "",
            ProductQuantity: "",
            ProductQuantitySold:"",
            ProductRevenue:"",    
        })

    }
    return (
        <>
            <Card>
                <Card.Body>
                    <Form onSubmit={postData}>
                        <Form.Group controlId="ProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" name="ProductName"  value={updateProduct.ProductName} onChange={updateForm} />
                        </Form.Group>
                        <Form.Group controlId="ProductDescription">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control type="text" name="ProductDescription" value={updateProduct.ProductDescription} onChange={updateForm }/>
                        </Form.Group>
                        <Form.Group controlId="ProductPrice">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="number" name="ProductPrice" value={updateProduct.ProductPrice} onChange={updateForm } />
                        </Form.Group>
                        <Form.Group controlId="ProductQuantity">
                            <Form.Label>Product Quantity</Form.Label>
                            <Form.Control type="number" name="ProductQuantity" value={updateProduct.ProductQuantity} onChange={updateForm }/>
                        </Form.Group>
                        <Form.Group controlId="ProductQuantitySold">
                            <Form.Label>Product Quantity Sold</Form.Label>
                            <Form.Control type="number" name="ProductQuantitySold" value={updateProduct.ProductQuantitySold} onChange={updateForm }/>
                        </Form.Group>
                        <Form.Group controlId="ProductRevenue">
                            <Form.Label>Product Revenue</Form.Label>
                            <Form.Control type="number" name="ProductRevenue" value={updateProduct.ProductRevenue} onChange={updateForm }/>
                        </Form.Group>
                        <Form.Group controlId="ProductSupplier">
                            <Form.Label>Product Supplier</Form.Label>
                            <Form.Control type="text" name="ProductSupplier" value={updateProduct.ProductSupplier} onChange={updateForm }/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default UpdateProduct