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

const productdescription = () => {
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
  <div>
    <div className="container grid grid-cols-4 gap-2 mx-auto ">
    <div className=" rounded">
    <p>loading</p>

      <Image
            className="w-full"
            src="/bap.png"
            alt={t("404-heading")}
            width={400}
            height={400}
          />
    </div>
    <div className="w-full rounded">

    {/* <Card className="w-full rounded mt-5"> */}
    <p>loading</p> 

      <Image
            className="w-full"
            src="/bap.png"
            alt={t("404-heading")}
            width={400}
            height={400}
          />
    {/* </Card> */}
    </div>
    <div className="w-full rounded">
    {/* <Card className="w-full rounded mt-5">  */}
   <p>loading</p> 

     <Image
            className="w-full"
            src="/bap.png"
            alt={t("404-heading")}
            width={400}
            height={400}
          />
    {/* </Card>  */}
     </div>
    <div className="w-full rounded">
    {/* <Card className="w-full rounded mt-5">  */}
     <p>loading</p> 

     <Image
            className="w-full"
            src="/bap.png"
            alt={t("404-heading")}
            width={400}
            height={400}
          />
    {/* </Card>  */}
    </div>
    <div className="w-full rounded">
    {/* <Card className="w-full rounded mt-5"> */}
 <p>loading</p> 

       <Image
            className="w-full"
            src="/bap.png"
            alt={t("404-heading")}
            width={400}
            height={400}
          />
    {/* </Card>  */}
    </div> 
 </div> 
 </div>
    </>
  );
};

export default productdescription;
