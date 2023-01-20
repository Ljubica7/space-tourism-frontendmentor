import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div>
      Error 404 Page not found
      <Link to={"/"}>Return home</Link>
    </div>
  );
};
