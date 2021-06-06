import { DetailWrapper } from "../styles";
import DeleteButton from "./button/DeleteButton";

const ProductDetail = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;
  return (
    <DetailWrapper>
      <h1> {product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => props.setProduct(null)}>Go Back</button>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        product={product}
        setProduct={setProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
