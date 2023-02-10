import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

//import swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

//Import swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt harum soluta dolores porro.",
  },
  {
    avatar: AVTR2,
    name: "Ariful Hasan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil eum soluta quasi! Itaque earum temporibus mollitia nam incidunt harum soluta dolores porro.",
  },
  {
    avatar: AVTR3,
    name: "Ismile Hosien",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt harum soluta dolores porro.",
  },
  {
    avatar: AVTR4,
    name: "Mou Afroz",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ncidunt harum soluta dolores porro.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        //install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ pagination: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>

              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
