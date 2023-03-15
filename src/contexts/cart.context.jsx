import { createContext,useEffect,useState } from "react";

const addCartItem = (cartItems,productToAdd) => {
    const isExisting=cartItems.find((cartItem) => cartItem.id===productToAdd.id);
    if(isExisting){
        return(cartItems.map((cartItem) => cartItem.id===productToAdd.id ? {...cartItem,quantity:cartItem.quantity+1}:cartItem));
    }
    return[...cartItems,{...productToAdd,quantity:1}];
};

const removeCartItem = (cartItems,itemToRemove) => {
    const isExisting=cartItems.find((cartItem) => cartItem.id===itemToRemove.id);
    if(isExisting.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id!==itemToRemove.id)
    }

    return(cartItems.map((cartItem) => cartItem.id===itemToRemove.id ? {...cartItem,quantity:cartItem.quantity-1}:cartItem));
}

const clearCartItem = (cartItems,itemToClear) => cartItems.filter(cartItem=>cartItem.id!==itemToClear.id)

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen : () => {},
    cartItems:[],
    addItemtoCart: () => {},
    removeItemtoCart: () => {},
    clearItemtoCart: () => {},
    cartCount:0,
    cartTotal:0,
});


export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]); 
    const [cartCount,setCount]=useState(0);
    const [cartTotal,setCartTotal]=useState(0);

    useEffect(()=>{
        const newCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCount(newCount);
    },[cartItems])

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total,cartItem)=>total+cartItem.quantity * cartItem.price,0)
        setCartTotal(newCartTotal);
    },[cartItems])
    

const addItemtoCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems,productToAdd))
}

const removeItemtoCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems,itemToRemove))
}

const clearItemtoCart = (itemToRemove) => {
    setCartItems(clearCartItem(cartItems,itemToRemove))
}

    const value = {isCartOpen,setIsCartOpen,addItemtoCart,removeItemtoCart,clearItemtoCart,cartItems,cartCount,cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}