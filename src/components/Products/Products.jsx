import Product from "../Product/Product";
import "./Products.css";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  let componentMounted = true;

  useEffect(() => {
    const GetProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setProducts(await response.clone().json());
        setFilter(await response.json());
        console.log("evo ga " + filter + " objekat");
      }
      return () => {
        componentMounted = false;
      };
    };
    GetProducts();
  }, []);

  const filterProduct = (cat) => {
    const updateList = products.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  return (
    <>
      <div className="filterBox">
        <h1>Latest Products</h1>
      </div>
      <div className="sort">
        <button onClick={() => setFilter(products)}>All</button>
        <button onClick={() => filterProduct("men's clothing")}>
          Men's Clothing
        </button>
        <button onClick={() => filterProduct("women's clothing")}>
          Women's Clothing
        </button>
        <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
        <button onClick={() => filterProduct("electronics")}>Electronic</button>
      </div>

      <div className="wraper">
        {filter?.map((products, key) => (
          <Product
            id={key}
            title={products?.title}
            price={products?.price}
            category={products?.category}
            description={products?.description}
            image={products?.image}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
