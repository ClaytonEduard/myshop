import * as S from "./styles";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  return (
    <S.Container showCart={showCart}>
      <S.Title>Meu Carrinho</S.Title>
      <p>Seu carrinho está vazio.</p>
      <button>Continuar comprando</button>
      <button>Finalizar compra</button>
    </S.Container>
  );
};
