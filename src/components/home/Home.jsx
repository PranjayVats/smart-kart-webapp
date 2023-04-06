import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Logo from "../../assets/images/logo.png";
import styles from "./Home.module.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../layout/loading/Loading";

function Home() {
  const { products } = useSelector((state) => {
    return state.product;
  });
  return (
    // <Fragment>
    //   {!products ? (
    //     <Loading />
    //   ) : (
        <div className={styles.home}>
          <figure className={styles.heading}>
            <img src={Logo} alt="" loading="lazy" />
            <figcaption>
              <h1>Welcome To</h1>
              <span>The Next Level Ecommerce</span>
            </figcaption>
          </figure>
          <div className={styles.caraosel}>
            <h2 className={styles.featured}>Featured Products</h2>
            <Swiper
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation
              slidesPerView={4}
              spaceBetween={5}
              modules={[Navigation, Autoplay]}
              loop={true}
            >
              {products &&
                products.map((s) => (
                  <SwiperSlide key={s.id}>
                    <Link to={`/product/${s.id}`}>
                      <figure className={styles.caraoselfigure}>
                        <img
                          src={s.url[0]}
                          loading="lazy"
                          className={styles.caraoselimage}
                          alt=""
                        />
                        <h1 className={styles.caraoseltitle}>{s.heading}</h1>
                        <figcaption className="">{s.category}</figcaption>
                      </figure>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
    //   )}
    // </Fragment>
  );
}

export default Home;
