import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { request } from "../utils/fetch";
import PageNavigation from "../components/product_listing/PageNavigation";
import CartContext from "../store/CartContext";
import Toasts from "../components/Toasts";



const ProductListing = () => {
    const ProductsPerPage = 9;
    const [products, setProducts] = useState()
    const [totalProducts, setTotalProducts] = useState()
    const [toastShowState, setToastShowState] = useState(false)
    const urlParams = useParams()
    const cartCtx = useContext(CartContext)
    const page = urlParams.page ? urlParams.page : 1
    
   
    
    useEffect(() => {

        let url = `products?page=${page}&limit=${ProductsPerPage}`;
        if(urlParams.categoryId && urlParams.categoryId != null)
             url = `products/category/${urlParams.categoryId}`;
        
        request(url)
            .then((res) => {
                
                console.log(res.data.products)
                setProducts(res.data.products)
                setTotalProducts(res.total)
                console.log("length-"+res.data.products.length)
               
            })
            .catch((err) => {
                console.log("error fetching in products")
            });
    }, [page]);

    const addToCart = (e, product) => {
        e.preventDefault();
        console.log('add to cart called-',product)
        const item  = {
            id: product._id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            qty: 1
        }
        cartCtx.addItem(item)
        setToastShowState(true)
        cartCtx.cartBoundHandler(true)

        setTimeout(()=>{
            cartCtx.cartBoundHandler(false)

        }, 500)
    }

    const resetStatus= () => {
        setToastShowState(false)
    }
    
    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-3 col-md-4">
                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
                    <div className="bg-light p-4 mb-30">
                        <form>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" checked id="price-all" />
                                <label className="custom-control-label" >All Price</label>
                                <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-1" />
                                <label className="custom-control-label" >$0 - $100</label>
                                <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-2" />
                                <label className="custom-control-label">$100 - $200</label>
                                <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-3" />
                                <label className="custom-control-label">$200 - $300</label>
                                <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="price-4" />
                                <label className="custom-control-label">$300 - $400</label>
                                <span className="badge border font-weight-normal">145</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="price-5" />
                                <label className="custom-control-label" >$400 - $500</label>
                                <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>
                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by color</span></h5>
                    <div className="bg-light p-4 mb-30">
                        <form>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" checked id="color-all" />
                                <label className="custom-control-label" >All Color</label>
                                <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-1" />
                                <label className="custom-control-label" >Black</label>
                                <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-2" />
                                <label className="custom-control-label" >White</label>
                                <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-3" />
                                <label className="custom-control-label" >Red</label>
                                <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="color-4" />
                                <label className="custom-control-label" >Blue</label>
                                <span className="badge border font-weight-normal">145</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="color-5" />
                                <label className="custom-control-label" >Green</label>
                                <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>
                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
                    <div className="bg-light p-4 mb-30">
                        <form>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" checked id="size-all" />
                                <label className="custom-control-label">All Size</label>
                                <span className="badge border font-weight-normal">1000</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-1" />
                                <label className="custom-control-label" >XS</label>
                                <span className="badge border font-weight-normal">150</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-2" />
                                <label className="custom-control-label" >S</label>
                                <span className="badge border font-weight-normal">295</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-3" />
                                <label className="custom-control-label" >M</label>
                                <span className="badge border font-weight-normal">246</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" className="custom-control-input" id="size-4" />
                                <label className="custom-control-label" >L</label>
                                <span className="badge border font-weight-normal">145</span>
                            </div>
                            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" className="custom-control-input" id="size-5" />
                                <label className="custom-control-label" >XL</label>
                                <span className="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8">
                    <div className="row pb-3 position-relative" >
                        <div className="col-12 pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div>
                                    <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                                    <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
                                </div>
                                <div className="ml-2">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <Link className="dropdown-item" to="#">Latest</Link>
                                            <Link className="dropdown-item" to="#">Popularity</Link>
                                            <Link className="dropdown-item" to="#">Best Rating</Link>
                                        </div>
                                    </div>
                                    <div className="btn-group ml-2">
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <Link className="dropdown-item" to="#">10</Link>
                                            <Link className="dropdown-item" to="#">20</Link>
                                            <Link className="dropdown-item" to="#">30</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {products  && products.map(product => {

                            return (<div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                                <div className="product-item bg-light mb-4">
                                    <div className="product-img position-relative overflow-hidden">
                                        <img className="img-fluid w-100" src={"/img/"+product.images[0]} alt="" />
                                        <div className="product-action">
                                            <span ><Link className="btn btn-outline-dark btn-square"  to="#" onClick={(event) => addToCart(event, product)}><span ><i className="fa fa-shopping-cart"></i></span></Link></span>
                                            <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                                            <Link className="btn btn-outline-dark btn-square" to={`/products-details/${product._id}`}><i className="fa fa-search"></i></Link>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <Link className="h6 text-decoration-none text-truncate" to="">{product.name}</Link>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>${product.price}</h5><h6 className="text-muted ml-2"><del>${product.price}</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }) }
                        <Toasts  icon="fa-shopping-cart" show={toastShowState} header="Shopping Cart" message="Product added to cart" resetStatus={resetStatus} />
                        
                        <div className="col-12">
                            <PageNavigation products={products} totalProducts={totalProducts} productsPerPage={ProductsPerPage}/>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>)
}

export default ProductListing;