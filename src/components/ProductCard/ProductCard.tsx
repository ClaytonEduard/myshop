import { FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";
export const ProductCard: React.FC = () => {
  return (
    <S.Card>
      <S.ProductImage
        src="https://fakestoreapi.com/img/1692255251854-xbox.jpg"
        alt="Product"
      />
      <S.ProductTitle>Product Title</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>⭐⭐⭐⭐⭐</S.Review>
        <S.Price>$99.99</S.Price>
      </S.ReviewPriceContainer>
      <S.AddToCartButtonWrapper>
        <S.AddToCartButton>
          Adicionar ao Carrinho
          <FiShoppingCart />
        </S.AddToCartButton>
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};
