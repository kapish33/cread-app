import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const AddDelete = () => {
  // get product array form local storage
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    // get product array form local storage
    const localProducts = JSON.parse(localStorage.getItem("products"));
    // set the products array to the products state
    setProducts(localProducts);
  }, []);

  return (
    <div className="maindisplay">
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
