import { Link } from "react-router-dom";
import { NavCont, NewNav, Navtwo } from "../styles";

// import pics !!

const NavBar = (props) => {
    return (
      <NavCont className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NewNav to="/" className="nav-link">

              <img src={props.currentTheme === "dark" ? "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg" : "https://media.istockphoto.com/vectors/cookies-icon-vector-id849863918?b=1&k=6&m=849863918&s=612x612&w=0&h=TujTOeDd_foQcsOoMeYxhookWe3JQ_ejTr96T3itCB4="}
              width="100px" height="40px"
              
              />
         </NewNav>
          </li>
          <li className="nav-item">
            <Navtwo to="/products" className="nav-link">
              List
            </Navtwo>
          </li>
        </ul>
      </NavCont>
    );
  };

  export default NavBar;
