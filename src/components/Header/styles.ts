import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;
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
  font-size: 2.5em;
  color: #61dafb;
  margin: 0;
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
  width: 80px;
  padding: 0 1rem;
  cursor: pointer;
`;
export const CartButton = styled.button`
  background-color: rgb(153, 138, 211);
  border: none;
  border-radius: 5px;
  height: 30px;
  width: 80px;
  padding: 0 1rem;
  cursor: pointer;
`;
