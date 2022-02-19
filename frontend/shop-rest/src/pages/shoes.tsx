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


const Shoes = () => {

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
      <li><a href="#"><img src="data:image/jpeg;base64,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" alt="Product Name" /></a></li>
      {/* <li><a href="#"><img src="https://www.google.com/search?q=babyshoes+baptism+images&tbm=isch&ved=2ahUKEwjhpcCL9Nb1AhWz1HMBHTDkADMQ2-cCegQIABAA&oq=babyshoes+baptism+images&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJ1CgCVjzF2C2GWgAcAB4AIABnQGIAbkKkgEDMC45mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=qCv1YeGxL7Opz7sPsMiDmAM&bih=625&biw=1366&rlz=1C1ONGR_enIN971IN971#imgrc=vgCYd0y0NQpeyM" alt="Product Name" /></a></li> */}
      <li><a href="#"><img src="https://m.media-amazon.com/images/I/61nK29dAf6L._UX569_.jpg" alt="Product Name" /></a></li>
      {/* <li><a href="#"><img src="/promotion/blueboy.jpg" alt="Product Name" /></a></li> */}
    </ul>
  </div>
</div>
{/* main section */}

      </>
  );
};

export default Shoes;
