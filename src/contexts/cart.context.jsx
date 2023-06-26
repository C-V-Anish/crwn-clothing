import {createContext,useReducer} from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

export const CART_ACTIONS = {
    SET_CART_ITEMS:"SET_CART_ITEMS",
    SET_IS_CART_OPEN:"SET_IS_CART_OPEN",
}

const INITIAL_STATE = {
    isCartOpen:true,
    cartItems:[],
    cartCount:0,
    cartTotal:0,
}

const cartReducer = (state,action) => {
    const {type,payload} = action;

    switch(type){
        case CART_ACTIONS.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTIONS.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen:payload,
            }
        default:
            throw new Error(`Undefined type ${type} in userReducer`);
    }
}

export const CartProvider = ({children}) => {
    // const [isCartOpen,setIsCartOpen] = useState(false);
    // const [cartItems,setCartItems] = useState([]); 
    // const [cartCount,setCount]=useState(0);
    // const [cartTotal,setCartTotal]=useState(0);

    const [{cartCount,cartTotal,cartItems,isCartOpen},dispatch] = useReducer(cartReducer,INITIAL_STATE);

    // useEffect(()=>{
    //     const newCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
    //     setCount(newCount);
    // },[cartItems])

    // useEffect(()=>{
    //     const newCartTotal = cartItems.reduce((total,cartItem)=>total+cartItem.quantity * cartItem.price,0)
    //     setCartTotal(newCartTotal);
    // },[cartItems])
    
    const updatecartItemsReducer = (newCartItems) => {
        const newCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch(createAction(CART_ACTIONS.SET_CART_ITEMS,{
                cartItems: newCartItems,
                cartTotal: newCartTotal,
                cartCount: newCount,
            })
            );
      };

      const addItemtoCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updatecartItemsReducer(newCartItems);
      };
    
      const removeItemtoCart = (itemToRemove) => {
        const newCartItems = removeCartItem(cartItems, itemToRemove);
        updatecartItemsReducer(newCartItems);
      };
    
      const clearItemtoCart = (itemToRemove) => {
        const newCartItems = clearCartItem(cartItems, itemToRemove);
        updatecartItemsReducer(newCartItems);
      };

      const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTIONS.SET_IS_CART_OPEN,bool));
      }

        const value = {isCartOpen,setIsCartOpen,addItemtoCart,removeItemtoCart,clearItemtoCart,cartItems,cartCount,cartTotal};

        return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
    }