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



const ProductFeedLoader = dynamic(
  () => import("@components/ui/loaders/product-feed-loader")
);

const SideBar = dynamic(
  () => import("@components/ui/sidebar-menu")
);

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
    {/* sidebar */}

    <div className="w-full bg-light-100">
      <div className="flex flex-col md:flex-row max-w-7xl w-full mx-auto py-10 px-5 xl:py-14 xl:px-8 2xl:px-14">
        
        {/* Contact form */}
        <div className="w-full order-1 md:order-2 mb-8 md:mb-0 md:ms-7 lg:ms-9 p-5 md:p-8 bg-light">
          {/* <h1 className="mb-7 text-xl md:text-2xl font-body font-bold text-accent">
           
          </h1> */}

            {/* <img
              src="/logo1.png"
              alt={t("nav-menu-contact")}
              className="w-full h-auto"
            /> */}
            
            
            <section className="py-8 px-4 lg:py-10 lg7px-8 xl:py-14 xl:px-16 2xl:px-20 text-left mb-8">
                    <p className="text-3xl text-gray-500 "><p className="font-bold">Business Opportunities For Textile Shops and Cloth Distributors</p></p>
                    {/* <div className="divider"></div> */}

                    <p className="py-4 text-xl font-italic text-gray-800">Are you a textile shop owner or are you running a cloth distribution business?<br></br> We have an opportunity open for <strong>textile shops and cloth distributors</strong>, throughout India.</p>
                    <p className="py-4 text-gray-500"><strong>Navin Creations</strong> is a leading manufacturer of heirloom dressing. Navin Creations started operations in 2008 in keeping with the family tradition of making upscale religious events clothing for children. With sole emphasis on quality, each of our creation is crafted with the finest fabrics to the most perfect fit. We specialize in making heirloom clothing that are usually treasured for generations to come.</p>

                    <p className="py-4 text-gray-500">Our christening gowns and christening outfits for the babies are made with utmost care to make the child’s day a special and memorable event.</p>
                    <p className="py-4 text-gray-500">Navin Creations is not just the manufacturer but also the distributors for their range of children’s Baptism and Christening dresses and their accessories. We welcome businesses with retail store or good distributorship facility to sell our <strong>Christening or Baptism dress for boys and girls through out Indian cities</strong>.</p>
                    <img
                    src="/logo1.png"
                    alt={t("nav-menu-contact")}
                    className="hero mx-auto text-center pb-10"
                    />
                    <p className="py-4 text-lg text-gray-500	"><strong>Contact Us Now! and be a part of a wonderful moment for the cute little one.</strong></p>
                    <hr />
                    <p className="py-4 text-lg text-gray-500">Call us on<strong> +91-8893939394 </strong> or drop us a mail at info@www.baptismdressindia.com or at info@navincreations.com</p>
            </section>
           
          
      
   
          
        </div>
      </div>
    </div>

    <Footer />
        
    </>
  );
};

export default Feed;
