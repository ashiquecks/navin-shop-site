import React, {useContext } from "react";
import Counter from "@components/ui/counter";
import AddToCartBtn from "@components/product/add-to-cart/add-to-cart-btn";
import { cartAnimation } from "@utils/cart-animation";
import { useCart } from "@contexts/quick-cart/cart.context";
import { generateCartItem } from "@contexts/quick-cart/generate-cart-item";
import { useDodAction, useDodState } from "src/pages/customoutfit.context";

interface Props {
  data: any;
  variant?: "helium" | "neon" | "argon" | "oganesson" | "single" | "big" | "dod";
  counterVariant?:
    | "helium"
    | "neon"
    | "argon"
    | "oganesson"
    | "single"
    | "details";
  counterClass?: string;
  variation?: any;
  disabled?: boolean;
  section?: any;
  parentCallback?: any;
}

export const AddToCart = ({
  data,
  variant = "helium",
  counterVariant,
  counterClass,
  variation,
  disabled,
  section,
  parentCallback,
}: Props) => {
  
  const {
    addItemToCart,
    removeItemFromCart,
    isInStock,
    getItemFromCart,
    isInCart,
  } = useCart();
  const item = generateCartItem(data, variation); 
  //const {doditems,dispatchDodEvent} = useContext(DodContext);
  const { addDod } = useDodAction();
  const handleAddClick = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    //e.stopPropagation();
    if(variant == "dod"){
      console.log('section',section);
      addDod(item,section);
      //parentCallback(item);
    }
    else
    {
      addItemToCart(item, 1);
      if (!isInCart(item.id)) {
        cartAnimation(e);
      }
    }
    //console.log("item is",item);
  };
  const handleRemoveClick = (e: any) => {
    e.stopPropagation();
    removeItemFromCart(item.id);
  };
  const outOfStock = isInCart(item?.id) && !isInStock(item.id);
  return !isInCart(item?.id) ? (
    <AddToCartBtn
      disabled={disabled || outOfStock}
      variant={variant}
      onClick={handleAddClick}
    />
  ) : (
    <>
      <Counter
        value={getItemFromCart(item.id).quantity}
        onDecrement={handleRemoveClick}
        onIncrement={handleAddClick}
        variant={counterVariant ? counterVariant : variant}
        className={counterClass}
        disabled={outOfStock}
      />
    </>
  );
};
