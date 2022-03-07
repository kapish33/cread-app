import { Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./components/Product";
import AddDelete from "./components/AddDelete.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<AddDelete />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
