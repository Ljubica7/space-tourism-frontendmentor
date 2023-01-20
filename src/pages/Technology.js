import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../data";

export const Technology = () => {
  return (
    <div className="technology">
      <h2>
        <span>03</span>space launch 101
      </h2>

      <Swiper
        className="swiper-technology"
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        direction="vertical"
        modules={[Pagination]}
      >
        {data.technology.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="technology-content">
              <h3>the terminology...</h3>
              <h1>{post.name}</h1>
              <p>{post.description}</p>
            </div>

            <figure className="technology-image">
              <img src={post.images.portrait} alt="" />
            </figure>
            <figure className="responsive-img">
              <img src={post.images.landscape} alt="" />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
