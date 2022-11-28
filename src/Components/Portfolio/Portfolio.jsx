import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Screenshot from "../../img/Screenshot.png";
import Screenshot2 from "../../img/Screenshot2.png";
import Screenshot3 from "../../img/Screenshot3.png";
import Screenshot4 from "../../img/Screenshot4.png";

const Portfolio = () => {
  const clients = [
    {
      img: Screenshot,
      heading: "REACT ADMIN-PANEL",
      href: "https://adminpanel-c7t.pages.dev/",
      review:
        "An admin panel enables administrators of an application, website, or IT system to manage its configurations",
    },
    {
      img: Screenshot2,
      heading: "REACT RECIPE-APP",
      href: "https://waleed0260.github.io/my-recipe-app/",
      review:
        "They take you to the recipe, with a clear list of ingredients and how to prepare them. They have a photo with the finished product",
    },
    {
      img: Screenshot3,
      heading: "REACT LOGIN-PAGE",
      href: "https://loginpage-ews.pages.dev/",
      review:
        "The login page allows a user to gain access to an application by entering their username and password or by authenticating using a social media login.",
    },
    {
      img: Screenshot4,
      heading: "REACT GYM-WEB",
      href: "https://react-gym-2si.pages.dev/",
      review:
        "Your gym website is where members will view your fitness class schedule, make a booking, and find out what services you offer.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>PORTFOLIO</span>
        <span>My previous work</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
      navigation={true}
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}>

        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <div className="image">
                <img src={client.img} alt="" />
                </div>
                <div  className="para">
                  <span>{client.heading}</span>
                <span>{client.review}</span>
                <button><a target="blank" href={client.href} style={{textDecoration:  "none", color: "white"}}>View Demo</a></button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Portfolio;