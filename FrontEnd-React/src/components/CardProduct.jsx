import React from "react";
import { Button, Card } from "react-bootstrap";
import { TiStarFullOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const CardProduct = ({ title, seller, rater, price, image, id }) => {
  const navigate = useNavigate();
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="x-card-product" onClick={() => navigate(`/products/${id}`)}>
      <Card style={{ width: "22rem", textAlign: "center" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{seller}</Card.Subtitle>

          <div className="d-flex align-items-center justify-content-center gap-1 mb-2">
            {stars.map((data, idx) => (
              <TiStarFullOutline size={15} color="#FFC107" key={idx} />
            ))}
            <span>{rater}</span>
          </div>
          <h5 style={{ color: "#EB3F36" }}>Rp. {price}</h5>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
