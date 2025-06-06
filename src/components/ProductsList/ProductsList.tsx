import { ProductCard } from "../ProductCard/ProductCard";
import * as S from "./styles";

import { products } from "../../data/products"; // Assuming you have a products data file

export const ProductsList: React.FC = () => {
  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
