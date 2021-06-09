// Styling
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { GlobalStyle, ThemeButton , NewNav, NewBar } from "./styles";

// Components
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
import products from "./products";

import NavBar from "./components/NavBar";


import { Route, Switch} from "react-router";


const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [_products, setProducts] = useState(products);
  const deleteProduct = (productId) => {
    const newProducts = _products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  };

  const [product, setProduct] = useState(null);

  const setView = () => {
    if (product)
      return (
        <ProductDetail
          product={product}
          setProduct={setProduct}
          deleteProduct={deleteProduct}
        />
      );
    else
      return (
        <ProductList
          setProduct={setProduct}
          products={_products}
          deleteProduct={deleteProduct}
        />
      );
  };

  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme}/>
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      
      {/* {setView()} */}
           

          <Switch>
         <Route path="/products">
         
         <ProductList
          setProduct={setProduct}
          products={_products}
          deleteProduct={deleteProduct} />
          </Route>
          
          <Route exact path="/">
          
          <Home />
          </Route>
          </Switch>

    </ThemeProvider>
  );
}

export default App;
