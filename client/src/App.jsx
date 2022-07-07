import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="cart" to={<Cart />} />
        <Route
          path="/register"
          to={user ? <Navigate element="/" /> : <Register />}
        />
        <Route path="/login" to={user ? <Navigate element="/" /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
