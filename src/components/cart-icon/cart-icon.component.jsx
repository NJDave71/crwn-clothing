import { useContext } from "react";
import { ReactComponent as ShppingIcon } from "../../assests/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";
import {
    CartIconContainer,
    ShoppingIconContainer,
    ItemCount
} from "./cart-icon.styles";

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCount } =useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconContainer>
                <ShppingIcon />
            </ShoppingIconContainer>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
