// Styling
import { DeleteButtonStyled, ProductWrapper } from "../styles";
import { Link } from "react-router-dom";

import DeleteButton from "./button/DeleteButton";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}  >
      <img
        alt={product.name}
        src={product.image} 
         />  

      {/* onClick={() => props.setProduct(product)} it was in line 16 */}
        
        </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        product={product}
        setProduct={props.setProduct}
      />
    </ProductWrapper>
  );
};

export default ProductItem;
