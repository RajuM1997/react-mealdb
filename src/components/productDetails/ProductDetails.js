import React from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const abc = useParams();
  console.log(abc);
  return (
    <div>
      <h3>Products details</h3>
    </div>
  );
};

export default ProductDetails;
