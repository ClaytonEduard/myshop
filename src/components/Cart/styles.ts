import { styled } from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-350px")};
  width: 300px;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);

  z-index: 1000;
  padding: 2rem;

  transition: right 0.3s ease-in-out;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  font-weight: bold;
`;
export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
