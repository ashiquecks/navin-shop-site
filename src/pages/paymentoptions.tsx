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
                    <p className="text-xl text-gray-500 "><p className="font-bold">Credit Cards & Debit Cards</p></p>
                    {/* <div className="divider"></div> */}

                    {/* <p className="py-4 text-xl font-italic text-gray-800">Are you a textile shop owner or are you running a cloth distribution business?<br></br> We have an opportunity open for <strong>textile shops and cloth distributors</strong>, throughout India.</p> */}
                    <p className="py-4 text-gray-500">We accept VISA, MASTER and AMERICAN EXPRESS Credit Cards issued in India and we accept Debit cards of all banks issued in India.</p>

                    <p className="text-xl text-gray-500 "><p className="font-bold">Internet Banking</p></p>
                    <p className="py-4 text-gray-500">We support almost all banks internet banking option through CCavenue payment gateway, which is 100% secure payment platform available today.</p>
                    <p className="py-4 text-gray-500">Navin Creations is committed to provide you safe way of transacting online. All your transactions online are protected & secured by SSL (secure socket layer) technology. It encrypts your credit card and relevant information during the entire transaction process. This encryption makes your shopping experience safe and secure.</p>
                    <p className="py-4 text-gray-500">Navin Creations does not store Credit / Debit card numbers, CVV / Security Code, Pin for 3D Secure, Expiry date on any of its servers and only collects in a session while making a transaction. The said information may however be stored by Risk Management / Fraud Management Systems of banks/payment gateways with authority to do so. Risk Management / Fraud Management Systems are used for ensuring that payment card frauds are kept to minimum and all necessary information regarding payment cards is secure for you, us and the payment card industry.</p>
                    {/* <img
                    src="/logbaby.png"
                    alt={t("nav-menu-contact")}
                    className="hero mx-auto text-center pb-10"
                    /> */}
                    <p className="text-xl text-gray-500 "><p className="font-bold">Refund of Payment</p></p>
                    <p className="py-4  text-gray-500	">For refund of payments made using a Credit Card, Debit Card, Net Banking, please get in touch with our Customer Care team. You can receive an instant refund in the form of a gift voucher after your order has been cancelled.</p>
                    {/* <hr /> */}
                    <p className="py-4 text-gray-500">If you would like a refund to your bank account/credit card, the same will be processed by bank/payment gateway within 15 working days of order cancellation (Please note, refund of online payment can happen only once against an order). Payments made through Cheque/DD/Cash on Delivery will be processed within 15 days of receiving the Bank Details from you.</p>
                    <p className="py-4 text-gray-500">Refunds pertaining to product(s) which have been returned will be offered once we have received the product(s) back with us (and they are not in damaged condition) . Because of any circumstances beyond our control, if we are not able to service the order, we will inform you and initiate replacement of product(s) not available or refund against the product(s), as per your choice.</p>
            </section>
           
          
      
   
          
        </div>
      </div>
    </div>

    <Footer />
        
    </>
  );
};

export default Feed;
