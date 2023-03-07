import './cart-dropdown.styles.scss'
import Button from '../button/button-component'
import CartItems from '../cart-items/cart-items.compoment'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import {useNavigate} from 'react-router-dom'

const CartDropdown = () => {
    const {cartItems}=useContext(CartContext);
    const navigate=useNavigate();
    const navigateToCheckout=()=>{
        navigate('/checkout');
    }
    return (<div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((item) => <CartItems key={item.id} cartItem={item}/>)}
        </div>
        <Button onClick={navigateToCheckout} content='GO TO CHECKOUT'/>
    </div>)
}

export default CartDropdown;