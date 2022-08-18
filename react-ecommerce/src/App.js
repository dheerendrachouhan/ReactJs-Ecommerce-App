import './App.css';
import "./assets/css/bootstrap.min.css"
import "./assets/css/bootstrap-grid.min.css"
import "./assets/css/style.css"

import "./assets/css/import.css"
import "./assets/css/animate.min.css"
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Layout from './components/Layout';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import ContextProvider from './store/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <Layout >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductListing />}>
            <Route path="p/:page" element={<ProductListing />}></Route>
            <Route path="category/:categoryId" element={<ProductListing />}></Route>
          </Route>
          <Route path="/products-details/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<ShoppingCart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Layout>
    </ContextProvider>
  );
}

export default App;
