import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Product from "./components/Product";
import AddDelete from "./components/AddDelete.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <button
                onClick={() => {
                  navigate("/product");
                }}
              >
                Payemnts
              </button>
              <Product />
            </>
          }
        />
        <Route path="/product" element={<AddDelete />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
