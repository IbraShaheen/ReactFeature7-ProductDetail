import { NavLink , Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import NavBar from "./components/NavBar";

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  justify-items:center;
  align-self:center;
`;

export const ProductWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const DeleteButtonStyled = styled.button`

background-color: #262626;
box-shadow : 2px 2px black;
`;


export const NewNav = styled(NavLink)`

&.active
{
background-color: cyan;
color: black;
font-weight:bold;
box-shadow : 2px 2px 2px white;
}
`;

export const Navtwo = styled(NavLink)`

margin-left:15px;
&.active
{
background-color: greenyellow;
color: black;
font-weight:bold;
box-shadow : 2px 2px 2px white;
}
`;


export const NavCont = styled.nav `
display:flex;
justify-content: space-evenly;
padding: 0px 50px;
`;