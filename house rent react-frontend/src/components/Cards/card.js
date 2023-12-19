import React from "react";
import "./styles.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <div className="card-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {card?.houseImageList.map((src, i) => (
          <SwiperSlide key={i}>
            <Link
              to={{
                pathname: "/house/owner",
                data: card.owner,
              }}
            >
              <img src={src} className="card-img" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info-flex">
        <h3 className="card-title">{card.location}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>{2 || 3}</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>
        The house has {card.capacity} of rooms
      </p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.capacity}</p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
        <span style={{ fontWeight: "600" }}>RWF{card.pricePerMonth}</span> month
      </p>
    </div>
  );
}

export default Card;
