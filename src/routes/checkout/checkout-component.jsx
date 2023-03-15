import './checkout-component.scss'
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-items/checkout-items.component';

const Checkout = () => {
    const {cartItems,addItemtoCart,removeItemtoCart,cartTotal} = useContext(CartContext);

    return <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>

            <div className='header-block'>
                <span>Description</span>
            </div>

            <div className='header-block'>
                <span>Quantity</span>
            </div>

            <div className='header-block'>
                <span>Price</span>
            </div>

            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
            {cartItems.map((cartItem)=>(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <span className='Total'>Total:${cartTotal}</span>
        </div>
}

export default Checkout;