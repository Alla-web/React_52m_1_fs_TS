import { ProductProps } from "./types";
import { ProductContainerStyled, ProductPropertyContainerStyled, ProductPropertyTitleStyled } from "./styles";

function Product({ productName='Uncnown', productPrice }: ProductProps) {
  return (
    <ProductContainerStyled>
      <ProductPropertyContainerStyled>
        <ProductPropertyTitleStyled>Title:</ProductPropertyTitleStyled>
        <p>{productName}</p>
      </ProductPropertyContainerStyled>
      <ProductPropertyContainerStyled>
        <ProductPropertyTitleStyled>Price:</ProductPropertyTitleStyled>
        {/* Пример: если цена не пришла из БД - т.е. цена undefined - не показываем поле цены */}
        {/* 1-й вариант: тернарный оператор */}
        {/* {productPrice !== undefined ? <p>{productPrice} UAH</p> : null} */}
        {/* 2-й вариант: оператор условного рендеринга */}
        {productPrice !== undefined && <p>{productPrice} UAH</p>}
      </ProductPropertyContainerStyled>
    </ProductContainerStyled>
  );
}

export default Product;
