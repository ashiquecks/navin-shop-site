import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Button from "@components/ui/button";
import Navbar from "@components/layout/navbar/navbar";
import ErrorMessage from "@components/ui/error-message";
import renderProductCard from "@components/product/render-product-card";
import NotFound from "@components/common/not-found";
import { useProductsQuery } from "@data/product/use-products.query";
import { Fragment } from "react";
import { useTranslation } from "next-i18next";
import Footer from "@components/common/footer";
import Image from 'next/image';
import Card from "@components/ui/card";
import React,{ useState,useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import { type } from "os";
import { useWindowSize } from "@utils/use-window-size";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import productdescription from "./productdescription";
import button from 'src/components/ui/button'


const ProductFeedLoader = dynamic(
  () => import("@components/ui/loaders/product-feed-loader")
);

const SideBar = dynamic(
  () => import("@components/ui/sidebar-menu")
);



// const isSSR = typeof window !== "undefined";
// const [WindowSize, setWindowSize] = useState({
//   width: isSSR ? 1200 : window.innerWidth,
//   height: isSSR ? 800 : window.innerHeight,
// });

// useEffect(() => {
//   window.addEventListener("resize", () => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//   });
// }, []);


const Gloves = () => {

  const { width } = useWindowSize();

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)'
  // })

  const [isHovering, setIsHovered] = useState(true);  
  const onMouseEnter = () => setIsHovered(false);
  const onMouseLeave = () => setIsHovered(true);

//   const [isHoverings, setIsHovereds] = useState(true);  
 

  const { t } = useTranslation("common");
  const { query } = useRouter();
  const {
    isFetching: loading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    isError,
    data,
    error,
  } = useProductsQuery({
    type: query.type as string,
    text: query?.text as string,
    category: query?.category as string,
  });

  if (isError && error) return <ErrorMessage message={error.message} />;
  function handleLoadMore() {
    fetchNextPage();
  }
  if (!loading && !data?.pages?.[0]?.data?.length) {
    return (
      <div className="bg-gray-100 min-h-full pt-6 pb-8 px-4 lg:p-8">
        <NotFound text="text-not-found" className="w-7/12 mx-auto" />
      </div>
    );
  }
  return (
    <>
{/* main section */}
<div className="main">
<div id="pattern" className="pattern">
    <ul className="g">
      <li><a href="#"><img src="https://image.made-in-china.com/2f0j00gpwYDHFPHloI/Welcome-Customized-Baby-Mittens-0-24m-Infants-Gloves.jpg" alt="Product Name" /></a></li>
      <li><a href="#"><img src="https://5.imimg.com/data5/SELLER/Default/2020/10/CR/AX/QB/53567948/baby-hand-gloves-500x500.jpg" alt="Product Name" /></a></li>
      <li><a href="#"><img src="https://cdn.fcglcdn.com/brainbees/images/products/300x364/9705915a.webp" alt="Product Name" /></a></li>
      {/* <li><a href="#"><img src="/promotion/blueboy.jpg" alt="Product Name" /></a></li> */}
    </ul>
  </div>
</div>
{/* main section */}

      </>
  );
};

export default Gloves;
