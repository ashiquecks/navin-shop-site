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
                    <p className="text-xl text-gray-500 "><p className="font-bold">Navin Creations ships its products to almost all parts of India. Orders placed will be shipped within 7-10 days after receiving the order . We ship on all days except Sunday and National Holidays.</p></p>
                    {/* <div className="divider"></div> */}

                    {/* <p className="py-4 text-xl font-italic text-gray-800">Are you a textile shop owner or are you running a cloth distribution business?<br></br> We have an opportunity open for <strong>textile shops and cloth distributors</strong>, throughout India.</p> */}

                    <p className="py-4 text-gray-500"><strong>Shipping Charges:</strong>A fixed shipping charge of Rs. 250 is applicable to locations in the North, West, East and central zones of India. The states include  Jammu and Kashmir, Himachal Pradesh, Punjab, Uttarakhand , Uttar Pradesh, Haryana, Bihar, Orissa, Jharkhand, West Bengal, Assam, Sikkim, Nagaland, Meghalaya, Manipur, Mizoram, Tripura, Arunachal Pradesh, Rajasthan , Gujarat, Goa, Maharashtra, Madhya Pradesh;Telangana and Chhattisgarh.</p>
                    <p className="py-4 text-gray-500">Free shipping is applicable for all orders shipped to States in south zone of India (Andhra Pradesh, Karnataka, Kerala and Tamil Nadu).</p>
                    <p className="py-4 text-gray-500">The shipping charge applicable per quantity of the product can be checked by entering your pin code details on the product pages and the total shipping charge applicable on the order will be the sum of the charges for all chargeable product(s) in your order (+ Rs. 250). The order level charge will be visible to you in the cart as well as when you enter the shipping address while you are checking out with your order.</p>
                    <p className="py-4 text-gray-500">These shipping charges applicable are not refundable in the case of return/cancellation of the product or the order.
The shipping charges can be modified by Navin Creations at any point without prior intimation. The new charges would reflect on the product page as well as in the checkout flow.</p>
<p className="py-4 text-gray-500">
Every once in a while, Navin Creations brings out various offers in an attempt to satisfy customers. Various offers could be introduced for a limited span of time that enable free shipping of goods, subject to the fulfilment of the terms and conditions attached to the offer.</p>
                
<p className="py-4 text-gray-500"><strong>Estimated Delivery Time:</strong> For all areas serviced by reputed couriers, the delivery time would be within 6-7 business days of shipping (business days exclude Sundays and other holidays). However items weighing over 2 kilos or high volume may take a couple of days longer to reach. For other areas the products will be shipped through Indian Postal Service and may take 1-2 weeks depending on location.</p>

<p className="py-4 text-gray-500"><strong>Hidden Charges (Sales tax, Octroi etc):</strong> You will get the final price during check out. Our prices are all inclusive and you need not pay anything extra.</p>

<p className="py-4 text-gray-500"><strong>International Locations:</strong> Currently we do not deliver to locations outside India.</p>

<p className="py-4 text-gray-500"><strong>Tracking Packages:</strong>We will mail you the name of the courier company and the tracking number of your consignment in your registered email address. In case you do not receive a mail from us within 24hrs of placing an order please check your spam folder. Tracking may not appear online for up to another 24 hours in some cases, so please wait until your package is scanned by the courier company.</p>

<p className="py-4 text-gray-500"><strong>Non-availability on Delivery: </strong>Our delivery partners will attempt to deliver the package thrice before it is returned back to our warehouse. Please provide your mobile number in the delivery address as it will help in making a faster delivery.</p>

            </section>
           
          
      
   
          
        </div>
      </div>
    </div>

    <Footer />
        
    </>
  );
};

export default Feed;
