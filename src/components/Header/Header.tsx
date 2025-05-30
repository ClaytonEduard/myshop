import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>
        <S.ButtonsWrapper>
          <S.AuthButton>
            Login
            <FiLogIn />
          </S.AuthButton>
          <S.CartButton>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};
