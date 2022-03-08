import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const AddDelete = () => {
  // get product array form local storage
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    // get product array form local storage
    const localProducts = JSON.parse(localStorage.getItem("products"));
    // set the products array to the products state
    // if localProducts is empty
    if (!localProducts) {
      setProducts([]);
    } else {
      setProducts(localProducts);
    }
  }, []);
  const navigate = useNavigate();

  return (
    <div className="maindisplay">
      <div
        className="checkout"
        onClick={() => {
          navigate("/checkout");
        }}
      >
        CheckOut
      </div>
      <div style={{ width: "100%" }}>
        <input
          onClick={() => {
            navigate("/");
          }}
          style={{
            width: "300px",
          }}
          type="button"
          value="Home"
        />
      </div>
      {products.map((product) => (
        <div className="product" key={uuidv4()}>
          <div className="product-image">
            <img src={product.image} alt="product" />
          </div>
          <div className="product-info">
            <div className="product-name">{product.wine}</div>
            <div className="product-rating">
              <div className="product-rating-stars">
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="far fa-star">{product.rating.average}</i>
                </span>
              </div>
              <div className="product-rating-count">
                {product.rating.reviews}
              </div>
            </div>
            <div className="product-price">
              <div className="product-price-value">{product.price}</div>
              <div className="product-price-currency">€</div>
            </div>
            <button
              onClick={() => {
                const newProducts = products.filter(
                  (pro) => pro.id !== product.id
                );
                // set the products state to the new products array
                setProducts(newProducts);
                // set the products array to the local storage
                localStorage.setItem("products", JSON.stringify(newProducts));
              }}
            >
              Delete this item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddDelete;
