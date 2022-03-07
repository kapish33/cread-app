import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useRef } from "react";
import CircularIndeterminate from "./Circle";
import { v4 as uuidv4 } from "uuid";
import "./Product.css";
const Product = () => {
  const [products, setProducts] = React.useState([]);
  const [sliceproducts, setSliceproducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [rating, setRating] = React.useState(5);
  const [start, setStart] = React.useState(0);
  const [end, setEnd] = React.useState(10);

  const handleChange = (event) => {
    setRating(event.target.value);
    // as per event.target.value we can have new array of products
  };

  console.log(rating, products);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://api.sampleapis.com/wines/reds", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setProducts(result);
        setSliceproducts(result.slice(0, 10));
      })
      .catch((error) => console.log("error", error));
  }, []);
  const setProductsFunction = (products) => {
    const baseURL = `https://api.sampleapis.com/wines/${products}`;
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(baseURL, requestOptions)
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.log("error", error));
  };
  const handelSerach = (event) => {
    const search = event.target.value;
    const filteredProducts = products.filter((product) => {
      return product.wine.toLowerCase().includes(search.toLowerCase());
    });
    console.log(filteredProducts);
    setSliceproducts(filteredProducts);
  };

  return (
    <div>
      {loading ? (
        <div className="center">
          <CircularIndeterminate />
        </div>
      ) : (
        <>
          <div className="select">
            <span
              onClick={() => {
                setProductsFunction("reds");
              }}
            >
              reds
            </span>
            <span
              onClick={() => {
                setProductsFunction("whites");
              }}
            >
              whites
            </span>
            <span
              onClick={() => {
                setProductsFunction("sparkling");
              }}
            >
              sparkling
            </span>
            <span
              onClick={() => {
                setProductsFunction("rose");
              }}
            >
              rose
            </span>
            <span
              onClick={() => {
                setProductsFunction("port");
              }}
            >
              port
            </span>
          </div>
          <div className="searchitems">
            <input
              onKeyUp={(event) => handelSerach(event)}
              type="text"
              name=""
              id=""
              placeholder="🔴 Live search"
            />
          </div>
          <div className="filterByRating">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={rating}
                  label="rating"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Below One</MenuItem>
                  <MenuItem value={2}>Below Two</MenuItem>
                  <MenuItem value={3}>Below Three</MenuItem>
                  <MenuItem value={4}>Below Four</MenuItem>
                  <MenuItem value={5}>Below Five</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="pagination">
            Pagination:
            <span
              onClick={() => {
                // subtract if start is greater than 0 and end is less than length of products
                if (start > 0 && end < products.length) {
                  setStart(start - 10);
                  setEnd(end - 10);
                }
                setSliceproducts(products.slice(start, end));
              }}
            >
              -1
            </span>
            <span
              onClick={() => {
                // add if end is less than length of products
                if (end < products.length) {
                  setStart(start + 10);
                  setEnd(end + 10);
                }
                setSliceproducts(products.slice(start, end));
              }}
            >
              +1
            </span>
          </div>
          <div className="maindisplay">
            {sliceproducts.map((product) => (
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
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
