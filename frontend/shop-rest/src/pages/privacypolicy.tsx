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
          {/* <h1 className="mb-7 text-xl md:text-2xl font-body font-bold ">
           
          </h1> */}

            {/* <img
              src="/logo1.png"
              alt={t("nav-menu-contact")}
              className="w-full h-auto"
            /> */}
            
            
            <section className="py-8 px-4 lg:py-10 lg7px-8 xl:py-14 xl:px-16 2xl:px-20 text-left mb-8">
                    {/* <div className="divider"></div> */}

                    {/* <p className="py-4 text-xl font-italic text-gray-800">Are you a textile shop owner or are you running a cloth distribution business?<br></br> We have an opportunity open for <strong>textile shops and cloth distributors</strong>, throughout India.</p> */}

                    <p className="py-4 text-gray-500">Navin Creations is the operator and licensee of www.baptismdressindia.com (“Website”). Navin Creations can be contacted by e-mail at info@www.baptismdressindia.com . The protection and security of your personal information is one of baptismdressindia.com’s top priorities. This online Privacy Policy discloses baptismdressindia.com’s information practices for this Website and subscriber / membership based services (“Services”) including the type of information being collected, method of such information collection, use of such information and sharing of such information with third parties.</p>
                    <p className="py-4 text-gray-500">By using this Website you agree to accept the terms of this Privacy Policy as well as the Website’s Terms of Use. By accessing or using this Website you expressly consent to our use and disclosure of your personal information in any manner described in this Privacy Policy. This Privacy Policy extends to both, users who visit the Website but do not transact business on the Website (“Users”) as well as users who are registered and are authorized by the Website to transact business on the Website (“Members”).</p>
                    <p className="py-4 text-gray-500">“Personal Information” refers to any information that identifies or can be used to identify, contact or locate the person, to whom such information pertains including, but not limited to, name, address, phone number, fax number, email address, financial profiles, identification number and credit card information.</p>

                    <p className="py-4 text-gray-500"><strong>PLEASE READ THE FOLLOWING TERMS OF OUR PRIVACY POLICY</strong></p>
                    <p className="py-4 text-gray-500"><strong>PERSONAL INFORMATION THAT MAY BE COLLECTED</strong></p>
                    <p className="py-4 text-gray-500">baptismdressindia.com shall collect and store any information that you may provide on our Website. To enable you to become a member or subscriber of our Website we need to have your basic Personal Information. Apart from this, when you visit our site, our systems collect details about your computer’s personal information like your IP address. Please note that your IP address does not identify you personally.</p>
                    <p className="py-4 text-gray-500">For the monthly contest we will place the client supplied photos in our client feature page of the website to announce the winner. To participate in the monthly competition you have to read the terms and conditions carefully before applying.</p>
                    <p className="py-4 text-gray-500">No use or Services available on this Website are directed towards children. baptismdressindia.com does not knowingly collect Personal Information from children or sell of its products to children.</p>
                    <p className="py-4 text-gray-500">USE OF INFORMATION COLLECTED</p>
                    <p className="py-4 text-gray-500">baptismdressindia.com owns all the information collected via the Website. As applicable, the information collected by baptismdressindia.com shall be used to contact you about the Website and Website related news and Services available on the Website; monitor and improve the Website; calculate the number of visitors to the Website and to know the geographical locations of the visitors; update you on all the special offers available on the Website and provide you with a better shopping experience.</p>
                    <p className="py-4 text-gray-500">Please note that when you place an order, some of your personal Information will be passed on to the others who shall need to have access to some Personal Information like courier companies, credit card processing companies, vendors etc. to enable them and baptismdressindia.com perform their duties and fulfill your order requirements.</p>
                    <p className="py-4 text-gray-500">baptismdressindia.com does not allow any unauthorized persons or organization to use any information that Navin Creations may collect from you through this Website.</p>
                    <p className="py-4 text-gray-500">In the event baptismdressindia.com is required to respond to subpoenas, court orders or other legal process, your Personal Information may be disclosed pursuant to such subpoenas, court order or legal process, which may be without notice to you.</p>
                    <p className="py-4 text-gray-500">Cookies are small pieces of information saved by your browser onto your computer. Cookies are used to record various aspects of your visit and assist Navin Creations to provide you with uninterrupted service. baptismdressindia.com does not use cookies to save Personal Information for outside uses.</p>
                    <p className="py-4 text-gray-500">As you browse www.baptismdressindia.com, advertising cookies will be placed on your computer so that we can understand what you are interested in. Our display advertising partner, AdRoll (http://www.adroll.com), then enables us to present you with retargeting advertising on other sites based on your previous interaction with www.baptismdressindia.com. The techniques our partners employ do not collect personal information such as your name, email address, postal address or telephone number. You can visit this page http://www.networkadvertising.org/choices/ to opt out of AdRoll and their partners’ targeted advertising.</p>
                    <p className="py-4 text-gray-500">baptismdressindia.com may share collective information such as demographics and Website usage statistics with our sponsors, advertisers or other third parties (such third parties do not include baptismdressindia.com’s marketing partners and network providers). When this type of information is shared, such parties do not have access to your Personal Information.</p>
                    <p className="py-4 text-gray-500">This Website may contain links which may lead you to other Websites. Please note that once you leave our Website you will be subjected to the Privacy Policy of the other website and this Privacy Policy will no longer apply.</p>
                    <p className="py-4 text-gray-500">BY USING THIS WEBSITE, YOU SIGNIFY YOUR AGREEMENT TO THE TERMS OF THIS PRIVACY POLICY, Navin Creations RESERVES THE RIGHT, IN OUR SOLE DISCRETION, TO CHANGE, MODIFY, ADD OR DELETE PORTIONS OF THE TERMS OF THIS PRIVACY POLICY AT ANY TIME.</p>
                    <p className="py-4 text-gray-500"> If you have any questions about this Privacy Policy, please feel free to through our Website or write to us at info@www.baptismdressindia.com .</p>

            </section>
           
          
      
   
          
        </div>
      </div>
    </div>

    <Footer />
        
    </>
  );
};

export default Feed;
