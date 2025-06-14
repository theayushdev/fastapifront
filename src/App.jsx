
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import { ProductProvider } from './ProductContext';
import ProductTable from './components/ProductTable'
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import { UpdateProductContextProvider } from './UpdateProductContext';
import { SupplierContextProvider } from './SupplierContext';
import Supplier from './components/SupplierPage';

function App() {
  return (
    <Router>
      <ProductProvider>
        <NavBar />
        <div className="row">
          <div className="col-sm-10 col-xm-12 mx-auto mt-4 mb-4">
            <UpdateProductContextProvider>
              <SupplierContextProvider>
                <Routes>
                  <Route path="/" element={<ProductTable />} />
                  <Route path="/addproduct" element={<AddProduct />} />
                  <Route path="/updateproduct" element={<UpdateProduct/>} />
                  <Route path="/supplier" element={<Supplier/>} />
                </Routes>
              </SupplierContextProvider>
            </UpdateProductContextProvider>
          </div>
        </div>
        <div className="container mt-4">
          <h2>Welcome to Inventory Management</h2>
          <p>Hello, this is React</p>
        </div>
      </ProductProvider>
    </Router>
  );
}

export default App;
