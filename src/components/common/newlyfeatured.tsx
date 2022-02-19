import { ArrowNext, ArrowPrev } from "@components/icons";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";
import "swiper/swiper-bundle.css";
import { useState } from "react";
import { Box, Container, Text, Wrap, WrapItem } from "@chakra-ui/react";
// dummy data


const data = [
  {
    id: 1,
    title: "banner:promotion-slide-two",
    bannerUrl: "/promotion/babyboy.jpg",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 3,657.00",
    bannerhover: "/promotion/babyboyhover.jpg"
  },
  {
    id: 2,
    title: "banner:promotion-slide-three",
    bannerUrl: "/promotion/goldenboy.jpg",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 3,854.00",
    bannerhover: "/promotion/goldenboy1.jpg"
  },
  {
    id: 3,
    title: "banner:promotion-slide-one",
    bannerUrl: "/promotion/babygirl.jpg",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 3,657.00",
    bannerhover: "/promotion/babygirlhover.jpg"
  },
  {
    id: 4,
    title: "banner:promotion-slide-three",
    bannerUrl: "/promotion/goldenboy.jpg",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 3,854.00",
    bannerhover: "/promotion/goldenboy1.jpg"
  },
  {
    id: 5,
    title: "banner:promotion-slide-five",
    bannerUrl: "/promotion/bap.png",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 2,500.00",
    bannerhover: "/promotion/bap.png"
  },
  {
    id: 6,
    title: "banner:promotion-slide-six",
    bannerUrl: "/promotion/babygirl.jpg",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 2000.00",
    bannerhover: "/promotion/bap.png"
  },
  {
    id: 7,
    title: "banner:promotion-slide-one",
    bannerUrl: "/promotion/babygirl.jpg",
    caption: "Evah – Pink Cotton Gown Set",
    price: "₹ 3,657.00",
    bannerhover: "/promotion/babygirlhover.jpg"
  },
];

const SliderBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  580: {
    slidesPerView: 2,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 80,
  },
  1920: {
    slidesPerView: 5,
    spaceBetween: 24,
  },
};
SwiperCore.use([Navigation]);

export default function NewFeatureProducts() {


  function hoveringfunction() {
    <img src="/promotion/babygirl.jpg" alt="kdcdklcn" />
  }
  const [over, setOver] = useState(false);
  const { t } = useTranslation();
  return (
    
    // <div style={{backgroundImage:`url("https://mcdn.wallpapersafari.com/medium/12/23/SKuULa.png` }}>
    <div className="px-6 py-5 md:px-8 xl:px-12 md:py-10 border-t border-border-200">
    <h2 className="decorated text-2xl mb-8"><span><strong>NEWLY FEATURED PRODUCTS FOR YOUR BABY</strong></span></h2>
      <div className="relative">
        <Swiper
          id="offer"
          loop={true}
          breakpoints={SliderBreakpoints}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
        >
          {data?.map((d) => (
            <SwiperSlide key={d.id}>

                    <img
                      // className="w-full h-auto"
                      className="rounded-xl"
                      src={d.bannerUrl}
                      // alt={t(d.title)}
                      width="270"
                      height="200"
                      onMouseOver={e => (e.currentTarget.src = d.bannerhover)}
                      onMouseOut={e => (e.currentTarget.src = d.bannerUrl)}
                    />
    
                    
           
                  {/* <div>
                  <img
                      // className="w-full h-auto"
                      className="rounded-xl"
                      src={d.bannerhover}
                      // alt={t(d.title)}
                      width="270"
                      height="200"
                      onMouseEnter={()=>hoveringfunction()}
                    />
                  </div> */}
                  <p className="mt-5 ml-2">{d.caption} for Baby boy</p>
                  <p className=" ml-2" ><strong>{d.price}</strong></p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="prev cursor-pointer absolute top-2/4 -start-4 md:-start-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-blue hover:text-light hover:text-heading"
          role="button"
        >
          <span className="sr-only">{t("common:text-previous")}</span>
          <ArrowPrev width={18} height={18} />
        </div>
        <div
          className="next cursor-pointer absolute top-2/4 -end-4 md:-end-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-blue hover:text-light hover:text-heading"
          role="button"
        >
          <span className="sr-only">{t("common:text-next")}</span>
          <ArrowNext width={18} height={18} />
        </div>
      </div>
    </div>
    // </div>
  );
}
