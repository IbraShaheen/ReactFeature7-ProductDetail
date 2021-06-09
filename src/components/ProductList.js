// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// import ProductDetail from "./ProductDetail";
// Data
import products from "../products";
import { useState } from "react";
// import ProductItem from "./ProductItem";

import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = props.products
    .filter((product) => product.name.includes(query))
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        setProduct={props.setProduct}
        deleteProduct={props.deleteProduct}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <Helmet>
      <title>products</title>
      </Helmet>
      
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
