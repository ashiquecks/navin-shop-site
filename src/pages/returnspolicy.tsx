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
          {/* <h1 className="mb-7 text-xl md:text-2xl font-body font-bold text-heading">
           
          </h1> */}

            {/* <img
              src="/logo1.png"
              alt={t("nav-menu-contact")}
              className="w-full h-auto"
            /> */}
            
            
            <section className="py-8 px-4 lg:py-10 lg7px-8 xl:py-14 xl:px-16 2xl:px-20 text-left mb-8">
                    <p className="text-xl text-gray-500 "><p className="font-bold">We have a 10 days return policy for our products except for the willow trays.</p></p>
                    {/* <div className="divider"></div> */}

                    {/* <p className="py-4 text-xl font-italic text-gray-800">Are you a textile shop owner or are you running a cloth distribution business?<br></br> We have an opportunity open for <strong>textile shops and cloth distributors</strong>, throughout India.</p> */}

                    <p className="py-4 text-gray-500">Please note that the product(s) should be unused, unwashed with all original tags intact and should be sent back in original packaging along with all parts and freebies and a copy of original invoice. To ensure that the quality of the product is maintained, we request you to please make sure that the product(s) are properly packaged when you are returning it.</p>
                    <p className="py-4 text-gray-500">If any or all products that were originally part of an order placed using a coupon or offer are returned then the coupon code/offer will no longer be applicable on the order. The benefit of the coupon/offer will also not be included in the refund.</p>
                    <p className="py-4 text-gray-500"><strong>Refunds</strong></p>
                    <p className="py-4 text-gray-500">The refund process will be initiated once we have received the product back in our warehouse and we have completed all quality checks to ensure that the product is unused, in original packaging and in good condition, except of course for the issue described by you. We will refund the entire amount paid by you for the product and the money will be directly credited to your Account within 24 hours of reaching the warehouse. Please Note: Shipping Charges and COD charges are not refundable. Once the refund amount is in your Account, you can use the credit to order a replacement or buy something new or even have it credited back to your bank account as and when you like.

</p>
                    <p className="py-4 text-gray-500">Happy shopping!</p>
            </section>
           
          
      
   
          
        </div>
      </div>
    </div>

    <Footer />
        
    </>
  );
};

export default Feed;
