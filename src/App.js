import { Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
