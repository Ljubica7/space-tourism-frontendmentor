import React, { useState } from "react";
import { data } from "../data";

export const Destination = () => {
  const [postId, setPostId] = useState(0);

  return (
    <div className="destination">
      <h2>
        <span>01</span>Pick your destination
      </h2>

      <div className="destination-container">
        <figure className="destination-image">
          <img src={data.destinations[postId].images.webp} alt="" />
        </figure>

        <div className="destination-content">
          <ul className="tabs-nav">
            <li>
              <button
                type="button"
                className={postId === 0 ? "active-tab" : ""}
                onClick={() => setPostId(0)}
              >
                moon
              </button>
            </li>

            <li>
              <button
                type="button"
                className={postId === 1 ? "active-tab" : ""}
                onClick={() => setPostId(1)}
              >
                mars
              </button>
            </li>

            <li>
              <button
                type="button"
                className={postId === 2 ? "active-tab" : ""}
                onClick={() => setPostId(2)}
              >
                europa
              </button>
            </li>

            <li>
              <button
                type="button"
                className={postId === 3 ? "active-tab" : ""}
                onClick={() => setPostId(3)}
              >
                titania
              </button>
            </li>
          </ul>

          <div className="content-block">
            <h1>{data.destinations[postId].name} </h1>
            <p>{data.destinations[postId].description} </p>

            <div className="stats-block">
              <p>
                <span>AVG. DISTANCE</span>
                {data.destinations[postId].distance}
              </p>
              <p>
                <span>EST. TRAVEL TIME</span>
                {data.destinations[postId].travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
