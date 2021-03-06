import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../actions/productActions";

import "./index.css";

function HomeScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, [dispatch]);

  return loading ? (
    <div className="loading">Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="products">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product">
            <Link to={"/product/" + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              ></img>
            </Link>
            <div className="product-container">
              <div className="product-name">
                <Link to={"/product/" + product._id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">{product.rating}</div>
              <Link to={"/product/" + product._id}>
                <button className="product-button">Choose</button>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomeScreen;
