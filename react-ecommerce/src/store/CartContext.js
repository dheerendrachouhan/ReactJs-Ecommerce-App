import React from "react"

const cartContext = {
    items: [],
    totalAmount: 0,
    isCartOpen: false,
    cartBounce: false,
    addItem: (item) => {} ,
    removeItem: (id) => {},
    updateItem: (item) => {},
    toggleCartPopup: () => {},
    cartBoundHandler: () => {}
   
}

const CartContext = React.createContext(cartContext)

export default CartContext;