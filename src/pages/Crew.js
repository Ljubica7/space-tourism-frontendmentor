import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../data";

export const Crew = () => {
  return (
    <div className="crew">
      <h2>
        <span>02</span>crew
      </h2>

      <Swiper
        className="swiper-crew"
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {data.crew.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="crew-content">
              <h3>{post.role}</h3>
              <h1>{post.name}</h1>
              <p>{post.bio}</p>
            </div>

            <figure className="crew-image">
              <img src={post.images.webp} alt="" />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
