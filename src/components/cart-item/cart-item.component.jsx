import {
    CartItemContainer,
    CartImg,
    ItemDetails,
    CartName
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <CartImg src={imageUrl} alt={`${name}`} />
            <ItemDetails className="item-details">
                <CartName className="name">{name}</CartName>
                <CartName className="price">
                    {quantity} x ${price}
                </CartName>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
