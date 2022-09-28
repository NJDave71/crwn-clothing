import Button from "../button/button.component";
import './cart-dropdown.styles.scss'

const CartDropdown = () => {

  return (
      <div className="cart-dropdown-container">
          <div className="cart-item"></div>
          <Button>Go to cart</Button>
      </div>
  );
}

export default CartDropdown;