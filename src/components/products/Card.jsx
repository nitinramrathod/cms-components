"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  max-width: 340px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ItemTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const ItemPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  &:first-of-type {
    background-color: #0070f3;
    color: white;
  }
  &:last-of-type {
    background-color: #00c853;
    color: white;
  }
`;

const Card = ({ card }) => {
  return (
    <ItemContainer>
    <ItemImage src={card.image} alt={card.name} />
    <ItemTitle>{card?.name}</ItemTitle>
    <ItemDescription>{card?.description}</ItemDescription>
    <ItemPrice>{`${card?.price}/-`}</ItemPrice>
    <ItemPrice>{card?.ram}</ItemPrice>
    <ItemPrice>{card?.storage}</ItemPrice>
    <ButtonContainer>
      <Button>Buy Now</Button>
      <Button>Add to Cart</Button>
    </ButtonContainer>
  </ItemContainer>
  );
};

export default Card;
