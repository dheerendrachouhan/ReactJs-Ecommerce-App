import { createRef, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/CartContext";

const ShoppingCart = () => {
   
    const cartCtx = useContext(CartContext)
    const shppingCharge = 10 ;
    const elementsRef = useRef(cartCtx.items && cartCtx.items.map((item) => ({id: item.id, ref:createRef()} )));
    console.log('eref-',elementsRef)
    const handleRemove = (productId) => {
        cartCtx.removeItem(productId);
     };
    
    const handleUpdate = (item, index, action) => {


        const qtyInput = elementsRef.current[index].ref.current
        const qtyValue = parseInt(qtyInput.value)
        let qtyUpdate = qtyValue ;
        if(action == 'plus')
            qtyUpdate +=  1
        if(action == 'minus')
            qtyUpdate =  Math.max(1, (qtyUpdate-1)) 
        
        qtyInput.value = qtyUpdate;
        console.log('qtyInput.value -', qtyUpdate )
        //console.log(elementsRef.current[index].ref.current.value)
        cartCtx.updateItem(item, qtyUpdate);
     };

    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-8 table-responsive mb-5">
                    <table className="table table-light table-borderless table-hover text-center mb-0">
                        <thead className="thead-dark">
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {cartCtx && cartCtx.items.length > 0 && cartCtx.items.map((item , index) => {
                             return (<tr>
                                <td className="align-middle"><img src="img/product-1.jpg" alt="" style={{width: "50px"}} />{item.name}</td>
                                <td className="align-middle">${item.price}</td>
                                <td className="align-middle">
                                    <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-minus" onClick={() => handleUpdate(item, index, 'minus')} >
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" ref={elementsRef.current[index].ref} key={index} className="form-control form-control-sm bg-secondary border-0 text-center" value={item.qty} />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-primary btn-plus" onClick={() => handleUpdate(item, index, 'plus')}>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                    </div>
                                </td>
                                <td className="align-middle">${item.qty * item.price}</td>
                                <td className="align-middle"><button className="btn btn-sm btn-danger" onClick={() => handleRemove(item.id)} ><i className="fa fa-times"></i></button></td>
                            </tr>)}
                             )}
                         </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                    <form className="mb-30" action="">
                        <div className="input-group">
                            <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Apply Coupon</button>
                                </div>
                        </div>
                    </form>
                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
                    <div className="bg-light p-30 mb-5">
                        <div className="border-bottom pb-2">
                            <div className="d-flex justify-content-between mb-3">
                                <h6>Subtotal</h6>
                                <h6>${cartCtx.totalAmount}</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Shipping</h6>
                                <h6 className="font-weight-medium">${shppingCharge}</h6>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="d-flex justify-content-between mt-2">
                                <h5>Total</h5>
                                <h5>${cartCtx.totalAmount + shppingCharge}</h5>
                            </div>
                            <Link to="/checkout" ><button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default ShoppingCart;