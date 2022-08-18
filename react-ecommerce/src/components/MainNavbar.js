import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from "react";
import CartContext from "../store/CartContext";
import CartPreview from "./cart/CartPreview";


const MainNavbar = (props) => {

    const cartCtx = useContext(CartContext)

    const cartTotalQty = cartCtx.items.reduce((totalQty, item) => {
            return totalQty + item.qty
    }, 0)

    const handleCartButton = (event) => {
        event.preventDefault();
        console.log("cart btn clicked")
        cartCtx.toggleCartPopup();
      };

    return (
        
        <div className="container-fluid bg-dark mb-30">
            <div className="row px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn d-flex align-items-center justify-content-between bg-primary w-100  text-dark" style={{height: "65px", padding: "0 30px"}}>
                        <h6 className="text-dark m-0 "><i className="fa fa-bars mr-2"></i>Categories</h6>
                     </Dropdown.Toggle>
                
                    <Dropdown.Menu className="w-100">
                        <Dropdown.Item href="#/action-1" className="dropdown-item">Men's Dresses</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" className="dropdown-item">Women's Dresses</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" className="dropdown-item">Baby's Dresses</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                    {/* <Link className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" to="#navbar-vertical" style={{height: "65px", padding: "0 30px"}}>
                        <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </Link>
                    <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{width: "calc(100% - 30px)", "z-index": "999"}}>
                        <div className="navbar-nav w-100">
                            <div className="nav-item dropdown dropright">
                                <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses <i className="fa fa-angle-right float-right mt-1"></i></Link>
                                <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                    <Link to="" className="dropdown-item">Men's Dresses</Link>
                                    <Link to="" className="dropdown-item">Women's Dresses</Link>
                                    <Link to="" className="dropdown-item">Baby's Dresses</Link>
                                </div>
                            </div>
                            <Link to="" className="nav-item nav-link">Shirts</Link>
                            <Link to="" className="nav-item nav-link">Jeans</Link>
                            <Link to="" className="nav-item nav-link">Swimwear</Link>
                            <Link to="" className="nav-item nav-link">Sleepwear</Link>
                            <Link to="" className="nav-item nav-link">Sportswear</Link>
                            <Link to="" className="nav-item nav-link">Jumpsuits</Link>
                            <Link to="" className="nav-item nav-link">Blazers</Link>
                            <Link to="" className="nav-item nav-link">Jackets</Link>
                            <Link to="" className="nav-item nav-link">Shoes</Link>
                        </div>
                    </nav> */}
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                        <Link to="" className="text-decoration-none d-block d-lg-none">
                            <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                            <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/products" className="nav-item nav-link">Products</Link>
                                <Link to="detail.html" className="nav-item nav-link">Shop Detail</Link>
                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down mt-1"></i></Link>
                                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                        <Link to="cart.html" className="dropdown-item">Shopping Cart</Link>
                                        <Link to="checkout.html" className="dropdown-item">Checkout</Link>
                                    </div>
                                </div>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            </div>
                            <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                <Link to=""  className="btn px-0">
                                    <i className="fas fa-heart text-primary"></i>
                                    <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                                </Link>
                                <Link to="" onClick={handleCartButton} className="btn px-0 ml-3">
                                    <i className={`fas fa-shopping-cart text-primary ${cartCtx.cartBounce ? "tada" : ""}`}></i>
                                    <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: "2px"}}>{cartTotalQty}</span>
                                </Link>
                                <CartPreview />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>)
}

export default MainNavbar;