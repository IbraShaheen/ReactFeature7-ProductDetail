import { DetailWrapper } from "../styles";
import DeleteButton from "./button/DeleteButton";



import { Redirect, useParams } from "react-router-dom";
import {Helmet} from "react-helmet";

const ProductDetail = (props) => {
  const productSlug = useParams().productSlug;

  const product = props.products.find(
    (product) => product.slug === productSlug
  );
  if (!product) return <Redirect to="/" />;

  return (
    <DetailWrapper>
      <Helmet>
      <title>{product.name}</title>
      </Helmet>

      <h1> {product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      {/* <button onClick={() => props.setProduct(null)}>Go Back</button> */}
      <DeleteButton
        deleteProduct={props.deleteProduct}
        product={product}
        // setProduct={setProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
