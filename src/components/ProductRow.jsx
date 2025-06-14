import React from "react";
import { Button } from "react-bootstrap";

const ProductRow = ({id,name,quantity_in_stock,quantity_sold,price,revenue,handelDelete,handelUpdate,handelSupplier,supplier}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{quantity_in_stock}</td>
            <td>{quantity_sold}</td>
            <td>{price}</td>
            <td>{revenue}</td>
            <td>
                <Button  onClick={() => handelUpdate(id)} variant="outline-info" size="sm" className="me-2">Update</Button>
                <Button  onClick={() => handelSupplier(supplier)} variant="outline-success" size="sm" className="me-2">Supplier</Button>
                <Button onClick= {() => handelDelete(id)} variant="outline-danger" size="sm">Delete</Button>
            </td>
        </tr>
    )
}

export default ProductRow