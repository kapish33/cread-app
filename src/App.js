import { Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./components/Product";
import AddDelete from "./components/AddDelete.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<AddDelete />} />
      </Routes>
    </div>
  );
}

export default App;
