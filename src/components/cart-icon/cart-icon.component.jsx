import './cart-icon.styles.scss'
import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartCount}=useContext(CartContext);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (<div className='cart-icon-container'>
        <CartLogo className='shopping-icon' onClick={toggleCart} />
        <span className='item-count'>{cartCount}</span>
    </div>)
}

export default  CartIcon;