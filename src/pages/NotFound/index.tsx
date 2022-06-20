import React from "react";
import { Link } from "react-router-dom";
import { NotFoundStyled } from "./NotFound.styled";

const NotFound = () => {
  return (
    <NotFoundStyled>
      <div>
        <h1>404</h1>
        <h4>Page not found</h4>
        <p> You seem lost</p>
        <div>
          <Link to="/">Let's lead you home</Link>
        </div>
      </div>
    </NotFoundStyled>
  );
};

export default NotFound;
