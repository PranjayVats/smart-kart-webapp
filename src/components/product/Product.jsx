import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Thumbs, Navigation, EffectFade } from "swiper";
import styles from "./Product.module.css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/effect-fade";
import { IoMdStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/CartSlice";
import { getProduct } from "../../store/slices/ProductSlice";
import { useParams } from "react-router-dom";
import Loading from "../layout/loading/Loading";

function Product() {
  const dispatch = useDispatch();
  const params = useParams();
  const { product } = useSelector((state) => {
    return state.product;
  });
  useEffect(() => {
    dispatch(getProduct(params.id));
    //basically this will trigger the getProduct action trigger of productSlicer which will update the data of product object and help to frtc details of a product
  }, [params, product, dispatch]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.url[0],
      category: product.category,
      price: product.price,
      stock: product.stock,
    };
    dispatch(addToCart(cartItem));
  };
  return (
    <Fragment>
      {product.id == 0 ? (
        <Loading />
      ) : (
        <div className={styles.product}>
          <div className={styles.detailsCaraosel}>
            <div className={styles.caraosels}>
              <div className={styles.caraosel1}>
                <Swiper
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={1}
                  loop={true}
                  effect={"fade"}
                  modules={[Thumbs, Autoplay, EffectFade]}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                >
                  {product &&
                    product.url.map((i, idx) => (
                      <SwiperSlide key={idx}>
                        <figure className={styles.caraosel1figure}>
                          <img
                            src={i}
                            className={styles.caraosel1image}
                            alt=""
                            loading="lazy"
                          />
                        </figure>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className={styles.caraosel2}>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  slidesPerView={4}
                  spaceBetween={1}
                  navigation
                  loop={true}
                  modules={[Pagination, Thumbs, Navigation]}
                  className={styles.mySwiper}
                >
                  {product.url &&
                    product.url.map((j, idx) => (
                      <SwiperSlide key={idx}>
                        <img src={j} alt="" loading="lazy" />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
            <div className={styles.productDetails}>
              <h1 className={styles.productName}>{product.name}</h1>
              <hr />
              <div className={styles.productRating}>
                5 <IoMdStar /> (3 Ratings and 3 Reviews)
              </div>
              <hr />
              <div className={styles.productPrice}>
                <strong>MRP:</strong> <s>₹ {product.oldPrice}</s>
                <p>
                  <strong>₹ {product.price}</strong>
                </p>
              </div>
              <hr />
              <div className={styles.productFeatures}>
                <h3>Key Features:</h3>
                <ul>
                  <li>30.4 MP Digital SLR Camera (Black)</li>
                  <li>Comes with Canon 24-105mm is II USM Lens</li>
                  <li>Have Sigma 35mm F/1.4 DG HSM Art Lens</li>
                </ul>
              </div>
              <hr />
              <h4 className={styles.availability}>
                <span>Available: </span>
                {product.stock > 0 ? <>In Stock</> : <>Out Of Stock</>}
              </h4>
              <button className={styles.addToCartBtn} onClick={handleAddToCart}>
                ADD TO CART
              </button>
            </div>
          </div>
          <div className={styles.productReviews}>
            <h1>Reviews & Ratings</h1>
            <h2 className={styles.totalRating}>
              Rating: 4.5 <IoMdStar />
            </h2>
            <h2 className={styles.totalReviews}>Reviews: </h2>
            <div className={styles.userReviews}>
              <div>
                <h3>
                  Pranjay Vats - 5 <IoMdStar />
                </h3>
                <p>Product is amazing.</p>
              </div>
              <div>
                <h3>
                  Pranjay Vats - 5 <IoMdStar />
                </h3>
                <p>Product is amazing.</p>
              </div>
              <div>
                <h3>
                  Swapnil Manke - 4 <IoMdStar />
                </h3>
                <p>Best but little expensive.</p>
              </div>
              <div>
                <h3>
                  Aman Kumar - 1 <IoMdStar />
                </h3>
                <p>Quality is as cheap as its price.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Product;
