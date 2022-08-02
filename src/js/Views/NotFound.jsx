import React from "react";

//react-router-dom
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>No consigo la web solicitada. error 404</h1>
      <Link to={`/`}>ir al home</Link>
    </>
  );
}

export default NotFound;
