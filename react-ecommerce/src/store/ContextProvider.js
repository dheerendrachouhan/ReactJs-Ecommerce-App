import React, { useEffect, useReducer } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import CartContext from './CartContext';


const defaultCartState = {
    items: [],
    totalAmount: 0,
    isCartOpen: false,
    cartBounce: false
}

const cartReducer = (state, action) => {
    let cartTotalAmount = 0 
    let cartItems = [] 

    if(action.type == "ADD_CART_ITEM" || action.type == "UPDATE_CART_ITEM" ){
        const productId = action.payload.item.id
        const oldId = state.items.map(item => item.id).includes(productId)
        let updateQty ; 
         if(oldId)
        {
             cartItems = state.items.map(item => {
                updateQty = item.qty + action.payload.qty

                if(action.type == "UPDATE_CART_ITEM" )
                     updateQty = action.payload.qty
                if( item.id == productId)
                {
                  return {
                    ...item, 
                    qty: updateQty
                    }
                }
                return item 
            })
        }
        else
        {
            cartItems = state.items.concat(action.payload.item)
        }

        cartTotalAmount = cartItems.reduce((itemTotalAmount, item) => {
            return (itemTotalAmount + (item.qty * item.price) )
        }, 0)

        return {
            ...state,
            items: cartItems,
            totalAmount: cartTotalAmount,
        }
    }
    if(action.type == "REMOVE_CART_ITEM"){

        cartItems = state.items.filter((item) =>  item.id !== action.id)
        cartTotalAmount = cartItems.reduce((itemTotalAmount, item) => {
            return (itemTotalAmount + (item.qty * item.price) )
        }, 0)
        
        return {
            ...state,
            items: cartItems,
            totalAmount: cartTotalAmount
        }
    }

    if(action.type == "TOGGLE_CART_POPUP"){
        console.log("toggleCartPopup caled")
        return {
            ...state,
            isCartOpen: !state.isCartOpen
          }
    }
    if(action.type == "BOUNCE_CART_ICON"){
        return {
            ...state,
            cartBounce: action.status
        }
    }
    return defaultCartState;
}

const ContextProvider = (props) => {

    const [persistedCartItems, setPersistedCartItems] = useLocalStorage(
        "cartItems", [] );
    const [persistedCartTotal, setPersistedCartTotal] = useLocalStorage(
        "cartTotal",0 );
    const persistedCartState = {
        ...defaultCartState,
        totalAmount: persistedCartTotal,
        items: persistedCartItems || []
      };
    
    const [cartState, cartActionDispatch] = useReducer(cartReducer, persistedCartState)
   
    const addItemToCart = (item) => { 
        cartActionDispatch({type: "ADD_CART_ITEM", payload: {item: item, qty:1}})
    }

    const removeItemToCart = (id) => { 
        cartActionDispatch({type: "REMOVE_CART_ITEM", id: id})
    }

    const updateItemInCart = (item, qty) => { 
        cartActionDispatch({type: "UPDATE_CART_ITEM", payload: {item: item, qty: qty}})
    }

    const toggleCartPopup = () => {
       
        cartActionDispatch({type: "TOGGLE_CART_POPUP"})
    }
    const cartBoundHandler = (status) => {
       
        cartActionDispatch({type: "BOUNCE_CART_ICON", status: status})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        isCartOpen: cartState.isCartOpen,
        cartBounce: cartState.cartBounce,
        addItem: addItemToCart,
        removeItem: removeItemToCart,
        updateItem: updateItemInCart,
        toggleCartPopup: toggleCartPopup,
        cartBoundHandler: cartBoundHandler
    }


    useEffect(() => {
        setPersistedCartItems(cartState.items);
        setPersistedCartTotal(cartState.totalAmount);
      }, [JSON.stringify(cartState.items), cartState.totalAmount]);

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>)
}

export default ContextProvider;