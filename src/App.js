import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import "./App.css";
import { Routes ,Route } from 'react-router-dom';
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <NavBar />
      {/* <Products /> */}
      <Routes>
        <Route path="/products" exact element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route>404 Not Found</Route>
      </Routes>
    </>
  );
}

export default App;
