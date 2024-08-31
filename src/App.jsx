import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./pages/herosection";
import Login from "./pages/login";
import Product from "./pages/product";
import ProductDetail from "./pages/productdetail";
import Checkout from "./pages/checkout";
import Register from "./pages/register";
import Layout from "./component/layout";
import Cart from "./pages/cart";

import { UserProvider } from "./context/usercontext";
import { CartProvider } from "./context/cartcontext";

function App() {
  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </CartProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
