import styled from "styled-components";

export const Card = styled.article`
  background-color: #fff;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProductImage = styled.img`
  width: 250px;
  height: 400px;

  object-fit: contain; // contai a imgem dentro do card sem distorcert
`;
export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;

  min-height: 3rem;

  margin-top: 1rem;
`;
export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 1rem;
`;
export const Review = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  font-size: 0.9rem;
  color: #666;
  svg {
    color: #f39c12; // cor do icone de estrela
  }
`;
export const Price = styled.strong``;
export const AddToCartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 1rem;
`;
export const AddToCartButton = styled.button`
  background-color: rgb(86, 44, 252);
  border: none;
  border-radius: 5px;
  height: 40px;
  cursor: pointer;
  font-size: 0.8rem;
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  justify-content: center;

  svg {
    font-size: 0.9rem;
  }
`;
