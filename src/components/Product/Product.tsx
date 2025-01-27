import "./styles.css";
import { ProductProps } from "./types";

function Product({ productName='Uncnown', productPrice }: ProductProps) {
  return (
    <div className="product-container">
      <div className="product-property-container">
        <p className="product-property-title">Title:</p>
        <p>{productName}</p>
      </div>
      <div className="product-property-container">
        <p className="product-property-title">Price:</p>
        {/* Пример: если цена не пришла из БД - т.е. цена undefined - не показываем поле цены */}
        {/* 1-й вариант: тернарный оператор */}
        {/* {productPrice !== undefined ? <p>{productPrice} UAH</p> : null} */}
        {/* 2-й вариант: оператор условного рендеринга */}
        {productPrice !== undefined && <p>{productPrice} UAH</p>}
      </div>
    </div>
  );
}

export default Product;
