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


const Beanies = () => {

  const { width } = useWindowSize();

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)'
  // })

  const [isHovering, setIsHovered] = useState(true);  
  const onMouseEnter = () => setIsHovered(false);
  const onMouseLeave = () => setIsHovered(true);

  const [isHoverings, setIsHovereds] = useState(true);  
 
  const [active, setActive] = React.useState('');

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
      <li><a href="#"><img src="https://m.media-amazon.com/images/I/71cTFYYH1rL._UX569_.jpg" alt="Product Name" /></a></li>
      <li><a href="#"><img src="https://i5.walmartimages.com/asr/ec9e6be9-8986-4bd8-a9b9-729660ab675e.7cd49142b5ee3fea575a9d1bffe34ef8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="Product Name" /></a></li>
      <li><a href="#"><img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1573854091-51zF9QcnANL.jpg?crop=1xw:1xh;center,top&resize=480:*" alt="Product Name" /></a></li>
      {/* <li><a href="#"><img src="/promotion/blueboy.jpg" alt="Product Name" /></a></li> */}
    </ul>
  </div>
</div>
{/* main section */}

      </>
  );
};

export default Beanies;
