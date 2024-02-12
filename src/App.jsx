import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CheckoutPage } from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import E404 from "./components/Errors/Error404";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import Login from "./components/Login/Login";
import TermsCondictions from "./components/Login/TyC";
import { ProductList } from "./components/ProductList";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <Router>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />

        <Route
          path="/products"
          element={
            <ProductList
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<TermsCondictions />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<E404 />} />
      </Routes>
    </Router>
  );
}

export default App;
