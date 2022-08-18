import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductDescReview from "../components/products_details/ProductDescReview";
import ProductSuggestion from "../components/products_details/ProductSuggestion";
import { request } from "../utils/fetch";


const ProductDetails = () => {
    const urlParams = useParams()
    const productId = urlParams.id
    const [product, setProduct] = useState()
    
   
    console.log("before use effect product details")
    useEffect(() => {
        console.log("use effect product details")
        const url = `products/${urlParams.id}`
        request(url)
            .then((res) => {
                
                console.log(res.data.product)
                setProduct(res.data.product)
                
            })
            .catch((err) => {
                console.log("error fetching in product")
            });
    }, [productId])

    return (
        <Fragment>
            <div className="container-fluid pb-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 mb-30">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner bg-light">
                              {product && product.images.map((img, key) => {
                               return (<div key={key} className={`carousel-item ${key==0? 'active': ''}`}>
                                  <img className="w-100 h-100" src={`/img/${img}`} alt="" />
                                </div>)
                              })}
                            </div>
                            <Link className="carousel-control-prev" to="#product-carousel" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </Link>
                            <Link className="carousel-control-next" to="#product-carousel" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-7 h-auto mb-30">
                        <div className="h-100 bg-light p-30">
                            <h3>{product?.name}</h3>
                            <div className="d-flex mb-3">
                                <div className="text-primary mr-2">
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star"></small>
                                    <small className="fas fa-star-half-alt"></small>
                                    <small className="far fa-star"></small>
                                </div>
                                <small className="pt-1">(99 Reviews)</small>
                            </div>
                            <h3 className="font-weight-semi-bold mb-4">${product?.price}</h3>
                            <p className="mb-4">{product?.description}</p>
                            <div className="d-flex mb-3">
                                <strong className="text-dark mr-3">Sizes:</strong>
                                <form>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-1" name="size" />
                                        <label className="custom-control-label" >XS</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-2" name="size" />
                                        <label className="custom-control-label" >S</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-3" name="size" />
                                        <label className="custom-control-label" >M</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-4" name="size" />
                                        <label className="custom-control-label" >L</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="size-5" name="size" />
                                        <label className="custom-control-label" >XL</label>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex mb-4">
                                <strong className="text-dark mr-3">Colors:</strong>
                                <form>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-1" name="color" />
                                        <label className="custom-control-label" >Black</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-2" name="color" />
                                        <label className="custom-control-label" >White</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-3" name="color" />
                                        <label className="custom-control-label">Red</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-4" name="color" />
                                        <label className="custom-control-label" >Blue</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id="color-5" name="color" />
                                        <label className="custom-control-label" >Green</label>
                                    </div>
                                </form>
                            </div>
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity mr-3" style={{ width: "130px" }}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-minus">
                                            <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control bg-secondary border-0 text-center" value="1" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <Link to="/cart" ><button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To
                                    Cart</button></Link>
                            </div>
                            <div className="d-flex pt-2">
                                <strong className="text-dark mr-2">Share on:</strong>
                                <div className="d-inline-flex">
                                    <Link className="text-dark px-2" to="">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link className="text-dark px-2" to="">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link className="text-dark px-2" to="">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                    <Link className="text-dark px-2" to="">
                                        <i className="fab fa-pinterest"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductDescReview />

            </div>
            <ProductSuggestion />
        </Fragment>
    )
}

export default ProductDetails; 