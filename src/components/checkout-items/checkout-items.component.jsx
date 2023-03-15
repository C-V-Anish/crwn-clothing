import './checkout-items.styles.scss'
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const CheckoutItem = ({cartItem}) => {
    const {name,imageUrl,price,quantity}=cartItem;
    const {clearItemtoCart,addItemtoCart,removeItemtoCart}=useContext(CartContext)

    const clearItemHandler = () => clearItemtoCart(cartItem);
    const addItemHandler = () => addItemtoCart(cartItem);
    const removeItemHandler = () => removeItemtoCart(cartItem);


    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={clearItemHandler}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem;