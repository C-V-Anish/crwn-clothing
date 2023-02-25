import './cart-dropdown.styles.scss'
import Button from '../button/button-component'
import CartItems from '../cart-items/cart-items.compoment'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CartDropdown = () => {
    const {cartItems}=useContext(CartContext);
    return (<div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((item) => <CartItems cartItem={item}/>)}
        </div>
        <Button content='GO TO CHECKOUT'/>
    </div>)
}

export default CartDropdown;