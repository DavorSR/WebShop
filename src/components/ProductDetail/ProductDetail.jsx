import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const getSingleProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setSingleProduct(await response.json());
      console.log(singleProduct);
    };
    getSingleProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="product_appearance">
          <div>
            <img
              className="product_image"
              src={singleProduct.image}
              alt={singleProduct.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="product_info">
            <span className="category">{singleProduct.category}</span>
            <h1 className="product_info__title"> {singleProduct.title}</h1>
            <span className="product_info__price">$ {singleProduct.price}</span>
            <p className="product_info__descr">{singleProduct.description}</p>
            <div className="product_info__btn">
              <button className="add">Add to Cart</button>
              <button className="goToCart">Go to Cart</button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <ShowProduct />
      </div>
    </>
  );
};

export default ProductDetail;
