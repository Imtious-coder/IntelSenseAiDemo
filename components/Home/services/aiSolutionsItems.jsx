import React, { useState } from "react";
import { Card } from "react-bootstrap";

const MAX_DESCRIPTION_SIZE = 80;

const AISolutionsItems = (props) => {
  const { logo, title, discription } = props.data;

  return (
    <Card className="m-4">
      <div className="h-25">
        <Card.Img
          variant="top"
          src={logo}
          alt={title}
        />
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {discription.substring(0, MAX_DESCRIPTION_SIZE) +
            (discription.length > MAX_DESCRIPTION_SIZE ? "..." : "")}
        </Card.Text>
      </Card.Body>
      {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
    </Card>
  );
};

export default AISolutionsItems;
