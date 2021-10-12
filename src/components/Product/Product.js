import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { strMealThumb, strArea, strTags, idMeal } = props.product;
  // console.log(props);
  return (
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={strMealThumb} />
    //   <Card.Body>
    //     <Card.Title>{strArea}</Card.Title>
    //     <Card.Text>{strTags}</Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>

    <div className="col-md-4">
      <div className="card-group">
        <div className="col">
          <div className="card">
            <img src={strMealThumb} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{strTags}</h5>
              <p className="card-text">Area: {strArea}</p>
            </div>
            <Link to={`/product/${idMeal}`}>
              <div className="card-footer">
                <button className="btn btn-success">Product Details</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
