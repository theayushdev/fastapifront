import React, { useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import { ProductContext } from "../ProductContext";
import ProductRow from "./ProductRow";
import { useNavigate } from 'react-router-dom';
import { UpdateProductContext } from "../UpdateProductContext";
import { SupplierContext } from "../SupplierContext";


const ProductTable = () => {
  const [products, setProducts] = useContext(ProductContext);
  const {updatedProducts,setUpdateProduct} = useContext(UpdateProductContext)
  const {Supplier,setSupplier} = useContext(SupplierContext)
  const navigate = useNavigate();


  const handelDelete = (id) => {
    fetch("http://127.0.0.1:8000/product/" + id , {
      method: "DELETE",
      headers:{
        accept: "application/json",        
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if(data.status === 'ok')
        {
          const updatedProducts = products.data.filter((product) => product.id !== id);
          setProducts({ data: updatedProducts }); // ✅ Correct way to update context
          alert("Product deleted");
        }
        else
        {
          alert("product not deleted")
        }
    })
  }

  const handelUpdate = (id) => {
    const product = products.data.filter(product => product.id == id )[0] 
    setUpdateProduct(
      {
        id: product.id,
        ProductName: product.name,
        ProductPrice: product.price,
        ProductDescription: product.description,
        ProductQuantity: product.quantity_in_stock,
        ProductQuantitySold: product.quantity_sold,
        ProductRevenue: product.revenue
    })
    navigate("/updateproduct")
  }

  const handelSupplier = (id) => {
    const apiBase = import.meta.env.VITE_API_URL;
      fetch(apiBase + '/supplier/'+ id,{
        headers:{
          Accept: 'application/json'
        }
      })
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data.status === 'ok')
        {
          setSupplier({ ...data })
          navigate('/supplier')
        }
        else{
          alert('errro on get supplier')
        }
      })
  }

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL;
    fetch(apiBase + "/product")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data); // optional debug
        setProducts({ data: data.data });
      });
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Quantity In Stock</th>
            <th>Quantity Sold</th>
            <th>Price</th>
            <th>Revenue</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.data.map((product) => (
            <ProductRow
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              quantity_in_stock={product.quantity_in_stock}
              quantity_sold={product.quantity_sold}
              revenue={product.revenue}
              handelDelete = {handelDelete}
              handelUpdate = {handelUpdate}
              handelSupplier = {handelSupplier}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
