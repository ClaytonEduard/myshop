import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;

  box-shadow: 0 0 15px rgba(97, 218, 251, 0.6);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.6rem;
  color: #61dafb;
  margin: 0;
  font-weight: 500;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const AuthButton = styled.button`
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  cursor: pointer;

  font-size: 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    font-size: 0.9rem;
  }
`;
export const CartButton = styled.button`
  background-color: rgb(153, 138, 211);
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  cursor: pointer;
  font-size: 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.3rem;
  svg {
    font-size: 0.9rem;
  }
`;
