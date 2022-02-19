import React, { useEffect } from "react";
import { useState } from "react";
import DodItem from "src/item/items";
import  Grid  from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { Wrapper } from "src/item/item.styles";
import { useModalAction } from "@components/ui/modal/modal.context";
import Navbar from "@components/layout/navbar/navbar";
import { useDodState } from "src/pages/customoutfit.context";
import AddToCartBtn from "@components/product/add-to-cart/add-to-cart-btn";
import { useCart } from "@contexts/quick-cart/cart.context";
import { CoreApi, ParamsType } from "@utils/api/core.api";
import { API_ENDPOINTS } from "@utils/api/endpoints";

// export type CartItemType ={
//     id: number;
//     category: string;
//     description: string;
//     image: string;
//     price: number;
//     title: string;
//     amount: string;
//     // sizes: string;
//     slug: string;
//   }
  
// const getProducts = [
//     {
//       id: 0,
//       category: "clothes",
//       description: "littile kingdom girls",
//       image: "/babygirl.jpg",
//       price: 51,
//       title: "baby girls dress",
//       amount: "123",
//       slug: "magnetic-designs-women-printed-fit-and-flare-dress"
      
//     },
//     {
//       id: 1,
//       category: "clothes",
//       description: "littile kingdom boys",
//       image: "/bap.png",
//       price: 85,
//       title: "baby boy dresss",
//       amount: "123",
//       slug: "mango-self-striped-a-line-dress"
//     }
//   ]

const ProductService = new CoreApi(API_ENDPOINTS.PRODUCTS);

const Feed = () => {

  const [gender,setGender]=useState('boys');
  useEffect(()=>{
    var _gender=window.sessionStorage.getItem("gender");
    setGender(_gender??'boys');
    console.log(gender);
  })

  const [dataProds,setProds] = useState([]);
  const [activeSection,setActive] = useState('main-dress-boys');
  const [addToDodStatus,setAddDodStatus] = useState(true);

  const showProds = async (section:string) => {

    let params:ParamsType = {
      type: 'clothing',
      text: '',
      category: section
    };
    const response = await ProductService.find(params as ParamsType);
    let fetchedData: any = {};
    fetchedData = response.data;
    const { data } = fetchedData;
    setProds(data);

    setActive(section);
    console.log("fetched",data);
  }

  const dodCart= useDodState();

  if(dataProds.length==0 && activeSection=='main-dress-boys') showProds(activeSection);
  
  const { openDodModal } = useModalAction();

  const dodSelect =  ( clickedItem: any, clickedSection:string) => {
    openDodModal("PRODUCT_DETAILS_DOD",clickedItem.slug, clickedSection);
  };

  const {
    addItemToCart,
    removeItemFromCart,
    isInStock,
    getItemFromCart,
    isInCart,
  } = useCart();

  const handleDod2Cart = () => {
    dodCart.dodItems?.map((dod) => {
      addItemToCart(dod, 1);
    } );
  }



  // const handleRemovefromCart = (id: number) =>{
  //   setCartItems(prev => (
  //     prev.reduce((ack,item) =>{
  //       if(item.id === id) {
  //         if(item.amount === 1) return ack;
  //         return [...ack,{...item,amount:item.amount - 1}];
  //       }
  //       else{
  //         return [...ack,item]
  //       }
  //     }, [] as CartItemType[])
  //   ))
  // };

  // if(dodCart?.dodItems?.length!<=0)
  //   setAddDodStatus(true);
  // else
  //   setAddDodStatus(false);

  return(
    <div>
      <Navbar />
      <Wrapper>
      {gender=='boys' && 
        <Card>
          <div style={{cursor: "pointer"}} onClick={() => showProds('main-dress-boys')}>Main Dress</div>
          <div style={{cursor: "pointer"}} onClick={() => showProds('caps-boys')}>Caps for Boys</div>
          <div style={{cursor: "pointer"}} onClick={() => showProds('socks-boys')}>Socks/Booties for Boys</div>
          <div style={{cursor: "pointer"}} onClick={() => showProds('gloves-boys')}>Gloves for Boys</div>
        </Card>}
        {gender=='girls' && 
        <Card>
          <div style={{cursor: "pointer"}} onClick={() => showProds('main-dress-boys')}>Main Dress</div>
          <div style={{cursor: "pointer"}} onClick={() => showProds('caps-boys')}>Caps for Girls</div>
          <div style={{cursor: "pointer"}} onClick={() => showProds('socks-boys')}>Socks/Booties for Grirls</div>
          <div style={{cursor: "pointer"}} onClick={() => showProds('gloves-boys')}>Gloves for Grirls</div>
        </Card>}
        <Grid container spacing={3}>
          {dataProds?.map((item:any) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <DodItem item={item} section={activeSection} handleAddtoCart={dodSelect} />
            </Grid>
          ))}
        </Grid>
        <Card >
          Items:
         
        {dodCart?.dodItems?.length!<=0? (
          <span>Empty</span>
        ):(
          <ul id="dod-cart">{dodCart.dodItems?.map(dod => 
          <li><small>{dod.productId}</small><br/>
          <img src={dod.image} alt={dod.title} />
          </li>
        )}</ul>
        )}
         
         <AddToCartBtn variant="dodcart" onClick={handleDod2Cart} disabled={dodCart?.dodItems?.length!<=0?true:false} />
        </Card>
      </Wrapper>
      </div>
  );
  
}

export default Feed;