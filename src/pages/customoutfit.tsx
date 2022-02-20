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

const ProductService = new CoreApi(API_ENDPOINTS.PRODUCTS);

const CustomOutfit = () => {

  const [gender,setGender]=useState('boys');
  useEffect(()=>{
    var _gender=window.sessionStorage.getItem("gender");
    setGender(_gender??'boys');
    console.log(gender);
  })

  const [dataProds,setProds] = useState([]);
  const [activeSection,setActive] = useState('main-dress-boys');

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
    addItemToCart
  } = useCart();

  const handleDod2Cart = () => {
    dodCart.dodItems?.map((dod) => {
      addItemToCart(dod, 1);
    } );
  }

  return(
    <div>
      <Navbar />
      <Wrapper>
      {gender=='boys' && 
        <Card className="dodMenu boys sidenav">
          <div onClick={() => showProds('main-dress-boys')}>
          <img src="main-dress-boys.png" />
          <b>Main Dress</b>
          </div>
          <div onClick={() => showProds('caps-boys')}>
          <img src="caps-boys.png" />
          <b>Caps for Boys</b>
          </div>
          <div onClick={() => showProds('socks-boys')}>
          <img src="socks-boys.png" />
          <b>Socks / Booties for Boys</b>
          </div>
          <div onClick={() => showProds('gloves-boys')}>
          <img src="gloves-boys.png" />
          <b>Gloves for Boys</b>
          </div>
        </Card>}
        {gender=='girls' && 
        <Card>
         ssd
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

export default CustomOutfit;