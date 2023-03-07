import { createContext,useEffect,useState } from "react";

const addCartItem = (cartItems,productToAdd) => {
    const isExisting=cartItems.find((cartItem) => cartItem.id===productToAdd.id);
    if(isExisting){
        return(cartItems.map((cartItem) => cartItem.id===productToAdd.id ? {...cartItem,quantity:cartItem.quantity+1}:cartItem));
    }
    return[...cartItems,{...productToAdd,quantity:1}];
};

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen : () => {},
    cartItems:[],
    addItemtoCart: () => {},
    cartCount:0,
});


export const CartProvider = ({children}) => {
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]); 
    const [cartCount,setCount]=useState(0);

    useEffect(()=>{
        const newCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCount(newCount);
    },[cartItems])
    

const addItemtoCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems,productToAdd))
}

    const value = {isCartOpen,setIsCartOpen,addItemtoCart,cartItems,cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}