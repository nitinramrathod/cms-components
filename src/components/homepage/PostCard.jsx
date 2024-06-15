"use client";

import Image from "next/image";
import React from "react";
import { Button, Card } from "react-bootstrap";
import nextImage from "@/assets/images/nextjs-image.png";
import styled from "@emotion/styled";

const ImageWrapper = styled.div`
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 6px;
    }
`;

const PostCard = ({ card }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <ImageWrapper>
        <Image src={nextImage} alt="next js image" />
      </ImageWrapper>
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>{card.avatar}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
