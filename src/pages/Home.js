import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1>
          So, you want to travel to{" "}
          <span className="heading-new-line">space</span>
        </h1>

        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>

      <Link to="/destination" className="btn-main">
        explore
      </Link>
    </div>
  );
};
