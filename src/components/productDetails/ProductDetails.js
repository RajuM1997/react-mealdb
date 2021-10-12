import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";

const ProductDetails = () => {
  const abc = useParams();
  console.log(abc);
  return (
    <div>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
