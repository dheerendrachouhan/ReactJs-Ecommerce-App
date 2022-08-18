import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../store/CartContext";
import '../../assets/css/cart.css'

const CartPreview = () => {
  const {items, removeItem, isCartOpen} = useContext(CartContext)
  const history = useNavigate()

  useEffect(()=> {
     
   },[items, isCartOpen])

  const handleRemove = (productId) => {
     removeItem(productId);
  };

  const handleProceedCheckout = () => {
   };

  return (
    <div className={`cart-preview ${isCartOpen ? 'active':''}`}>
      <ul className="cart-items">
        {items.map((product) => {
          return (
            <li className="cart-item" key={product.name}>
              <img className="product-image" src={`/img/${product.image}`} />
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
              </div>
              <div className="product-total">
                <p className="quantity">
                  {`${product.qty} ${
                    product.qty > 1 ? "Nos." : "No."
                  }`}
                </p>
                <p className="amount">{product.qty * product.price}</p>
              </div>
              <button
                className="product-remove"
                onClick={() => handleRemove(product.id)}
              >
                ×
              </button>
            </li>
          );
        })}
       {items && (items.length === 0) &&
        (<li>
             <img src="/img/empty-cart.png" width="97%" style={{'marginTop':'30px'}} />
        </li> )
        }
      </ul>
      {items && (items.length > 0) &&
      (<div className="action-block">
        <button
          type="button"
          className={`${items && items.length === 0 ? 'disabled':'' }`}
          onClick={handleProceedCheckout}
        >
          PROCEED TO CHECKOUT
        </button>
      </div>)}
    </div>
  );
};

export default CartPreview;