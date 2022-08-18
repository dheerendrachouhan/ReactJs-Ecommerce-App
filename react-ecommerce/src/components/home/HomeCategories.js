import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { request } from "../../utils/fetch";

const HomeCategories = () => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        const url = 'category';
        request(url)
            .then((res) => {
                console.log(res.data.categories)
                setCategories(res.data.categories)
            })
            .catch((err) => {
                console.log("error fetching in cateogry")
            });
    }, []);


    return (<div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
        <div className="row px-xl-5 pb-3">
            {categories && categories.map(category => {
                return (<div key={category._id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <Link className="text-decoration-none" to={"/products/category/"+category._id}>
                        <div className="cat-item d-flex align-items-center mb-4">
                            <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                <img className="img-fluid" src={"img/categories/"+category.image} alt="" />
                            </div>
                            <div className="flex-fill pl-3">
                                <h6>{category.name}</h6>
                                <small className="text-body">{category.numOfProducts} Products</small>
                            </div>
                        </div>
                    </Link>
                </div>)
            })
            }
        </div>
    </div>)

}

export default HomeCategories;