import CartItem from "src/CartItem/cartitem";

import { Wrapper } from "./cart.styles";

import { CartItemType } from "src/pages/customoutfit";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<props> = ({cartItems, addToCart, removeFromCart}) => {
    return (
        <Wrapper>
            <h2>your shopping cart</h2>
            {cartItems.length === 0? <p>No items in cart</p>: null}
            {cartItems.map(item =>(
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
        </Wrapper>
    )
}

export default Cart;