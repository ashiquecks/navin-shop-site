import Navbar from "@components/layout/navbar/navbar";
import React,{ useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import { CartProvider, useCart } from "react-use-cart";

const Test  = (props) => {

    const { addItem } =useCart();

  return (
    <>
<div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
    <div className="card p-0 overflow-hidden h-100 shadow" style={{width: '18rem'}} >
    <img src={props.img} className="card-img-top" />
    <div className="card-body text-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <a className="btn btn-success"onClick={() => addItem(props.item)}>Add to Cart</a>
    </div>
    </div>
</div>
    </>
  );
};

export default Test;
