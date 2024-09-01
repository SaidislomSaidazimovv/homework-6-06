import React, { useEffect, useState } from "react";
import "./Home.css";
import Main from "../../components/main/Main";
import Products from "../../components/products/Products";
import { useAxios } from './../../hooks/useAxios';

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    useAxios()
      .get("/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home">
      <Main />
      <Products title="Products" data={products} />
    </div>
  );
}

export default Home;
