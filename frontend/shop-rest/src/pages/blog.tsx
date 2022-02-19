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

const datas = [
  {
    id : "1",
    img: "https://i2.wp.com/www.baptismdressindia.com/wp-content/uploads/2020/03/Baptism-decoration-for-boy.jpg?resize=1024%2C683&ssl=1",
    buttontext: "Littile Kingdom Boys",
    mainheading: "Baptism Decor For Boys",
    descriptions: "You are planning for your baby boys christening/baptism? here in this blog i will show you some ideas for baptism decoration for boys.[...]"

  },
  {
    id: "2",
    img: "https://i1.wp.com/www.baptismdressindia.com/wp-content/uploads/2020/03/What-Is-Baptism-in-India.jpg?w=1024&ssl=1",
    buttontext: "Littile Kingdom Boys",
    mainheading: "Baptism Decor For Boys",
    descriptions: "You are planning for your baby boys christening/baptism? here in this blog i will show you some ideas for baptism decoration for boys.[...]"
  },
  {
    id: "3",
    img: "https://i2.wp.com/www.baptismdressindia.com/wp-content/uploads/2020/03/Baptism-decoration-for-boy.jpg?resize=1024%2C683&ssl=1",
    buttontext: "Littile Kingdom Boys",
    mainheading: "Baptism Decor For Boys",
    descriptions: "You are planning for your baby boys christening/baptism? here in this blog i will show you some ideas for baptism decoration for boys.[...]"
  },
  // {
  //   id : "4",
  //   img: "https://i2.wp.com/www.baptismdressindia.com/wp-content/uploads/2020/03/Baptism-decoration-for-boy.jpg?resize=1024%2C683&ssl=1",
  //   buttontext: "Littile Kingdom Boys",
  //   mainheading: "Baptism Decor For Boys",
  //   descriptions: "You are planning for your baby boys christening/baptism? here in this blog i will show you some ideas for baptism decoration for boys.[...]"

  // },
  // {
  //   id: "5",
  //   img: "https://i1.wp.com/www.baptismdressindia.com/wp-content/uploads/2020/03/What-Is-Baptism-in-India.jpg?w=1024&ssl=1",
  //   buttontext: "Littile Kingdom Boys",
  //   mainheading: "Baptism Decor For Boys",
  //   descriptions: "You are planning for your baby boys christening/baptism? here in this blog i will show you some ideas for baptism decoration for boys.[...]"
  // },
  // {
  //   id: "6",
  //   img: "https://i2.wp.com/www.baptismdressindia.com/wp-content/uploads/2020/03/Baptism-decoration-for-boy.jpg?resize=1024%2C683&ssl=1",
  //   buttontext: "Littile Kingdom Boys",
  //   mainheading: "Baptism Decor For Boys",
  //   descriptions: "You are planning for your baby boys christening/baptism? here in this blog i will show you some ideas for baptism decoration for boys.[...]"
  // }

]

const ProductFeedLoader = dynamic(
  () => import("@components/ui/loaders/product-feed-loader")
);

const SideBar = dynamic(
  () => import("@components/ui/sidebar-menu")
);
function funconclick() {
  window.location =  "/buisnessoppurtunities"
}

const Feed = () => {
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
  <Navbar />
  <>
   

  <div className="bodywhole">
  <div className="container">
          {datas?.map((d) => (
            <div className="card" key={d.id} onClick={()=>funconclick()}>
            <div className="card__header">
              <img src={d.img} alt="card__image" className="card__image" width="600"/>
            </div>
            <div className="card__body">
              {/* <span className="tag tag-brown">{d.buttontext}</span> */}
              <h4>{d.mainheading}</h4>
              <p>{d.descriptions}</p>
            </div>
            {/* <div className="card__footer"> */}
              {/* <div className="user">
                <img src="https://i.pravatar.cc/40?img=2" alt="user__image" className="user__image"/>
                <div className="user__info">
                  <h5>Jony Doe</h5>
                  <small>Yesterday</small>
                </div>
              </div> */}
            {/* </div> */}
          </div>
          ))}
  
{/* 
  <div className="card" >
    <div className="card__header">
      <img src="https://i2.wp.com/www.baptismdressindia.com/wp-content/uploads/2020/03/Baptism-decoration-for-boy.jpg?resize=1024%2C683&ssl=1" alt="card__image" className="card__image" width="600" />
    </div>
    <div className="card__body">
      <span className="tag tag-blue">Littile Kingdom Boys</span>
      <h4>Baptism Decor For Boys</h4>
      <p>You are planning for your baby boys christening/baptism? here in this blog i will show you some ideas for baptism decoration for boys.[...]</p>
    </div>
    <div className="card__footer">
      <div className="user">
        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
        <div className="user__info">
          <h5>Jane Doe</h5>
          <small>26 Mar</small>
        </div>
      </div>
    </div>
  </div> */}

    </div>
    </div>

  </>
 
   <Footer />        
  </>

  );
};

export default Feed;
