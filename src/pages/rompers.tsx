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

const Rompers = () => {
 
  return (
    <>
{/* main section */}
<div className="main">
<div id="pattern" className="pattern">
    <ul className="g">
      <li><a href="#"><img src="/babygirl.jpg" alt="Product Name" /></a></li>
      <li><a href="#"><img src="/bap.png" alt="Product Name" /></a></li>
      <li><a href="#"><img src="/promotion/babyboy.jpg" alt="Product Name" /></a></li>
      <li><a href="#"><img src="/promotion/blueboy.jpg" alt="Product Name" /></a></li>
    </ul>
  </div>
</div>
{/* main section */}

      </>
  );
};

export default Rompers;
