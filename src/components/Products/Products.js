import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setproducts(data.meals));
  }, [searchText]);

  const handleSearchFied = (e) => {
    const searchTextValue = e.target.value;
    console.log(searchTextValue);
    setSearchText(searchTextValue);
  };
  return (
    <div className="container">
      <div className="input-group w-75 mt-5 mx-auto mb-3">
        <input
          onChange={handleSearchFied}
          type="text"
          className="form-control"
          placeholder="search here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <Product key={product.idMeal} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
