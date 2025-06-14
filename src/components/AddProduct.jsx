import React, {useState} from "react";
import {Form,Button,Card} from "react-bootstrap"

const AddProduct = () => {
    const [productInfo, setProductInfo] = useState({
        ProductName: "",
        ProductDescription: "",
        ProductPrice: "",
        ProductQuantity: "",
        ProductQuantitySold:"",
        ProductRevenue:"",
        ProductSupplier:""       
    });

    const updateValue = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
            });
    }

    const postData = async(e) => {
        e.preventDefault()
        console.log(productInfo)

        const url = "http://localhost:8000/product/" + productInfo['ProductSupplier']

        const resposne = await fetch(
            url,{
                method: 'POST',
                mode:'cors',
                cache:'no-cache',
                credentials:'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect:'follow',
                referrerPolicy:'no-referrer',
                body: JSON.stringify({
                    "name": productInfo['ProductName'],
                    "description": productInfo['ProductDescription'],
                    "quantity_in_stock": productInfo['ProductQuantity'],
                    "quantity_sold": productInfo['ProductQuantitySold'],
                    "price": productInfo['ProductPrice'],
                    "revenue": productInfo['ProductRevenue']
                })
            }
        )
        resposne.json().then(resposne => {
            console.log(resposne)
            if(resposne.status === 'ok')
            {
                alert('Product Added Successfully')
            }
            else
            {
                alert('Failed to Add Product')
            }
        })
        setProductInfo({
            ProductName: "",
            ProductDescription: "",
            ProductPrice: "",
            ProductQuantity: "",
            ProductQuantitySold:"",
            ProductRevenue:"",
            ProductSupplier:""       
        })
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Form onSubmit={postData}>
                        <Form.Group controlId="ProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" name="ProductName"  value={productInfo.ProductName} onChange={updateValue} />
                        </Form.Group>
                        <Form.Group controlId="ProductDescription">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control type="text" name="ProductDescription" value={productInfo.ProductDescription} onChange={updateValue }/>
                        </Form.Group>
                        <Form.Group controlId="ProductPrice">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="number" name="ProductPrice" value={productInfo.ProductPrice} onChange={updateValue } />
                        </Form.Group>
                        <Form.Group controlId="ProductQuantity">
                            <Form.Label>Product Quantity</Form.Label>
                            <Form.Control type="number" name="ProductQuantity" value={productInfo.ProductQuantity} onChange={updateValue }/>
                        </Form.Group>
                        <Form.Group controlId="ProductQuantitySold">
                            <Form.Label>Product Quantity Sold</Form.Label>
                            <Form.Control type="number" name="ProductQuantitySold" value={productInfo.ProductQuantitySold} onChange={updateValue }/>
                        </Form.Group>
                        <Form.Group controlId="ProductRevenue">
                            <Form.Label>Product Revenue</Form.Label>
                            <Form.Control type="number" name="ProductRevenue" value={productInfo.ProductRevenue} onChange={updateValue }/>
                        </Form.Group>
                        <Form.Group controlId="ProductSupplier">
                            <Form.Label>Product Supplier</Form.Label>
                            <Form.Control type="text" name="ProductSupplier" value={productInfo.ProductSupplier} onChange={updateValue }/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default AddProduct