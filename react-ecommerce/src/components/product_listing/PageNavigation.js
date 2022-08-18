import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PageNavigation = (props) => {
    const ProductsPerPage = props.productsPerPage;
    
   // const [products, setProducts] = useState(props.products)
    const urlParams = useParams()
    useEffect(() =>{ 
        if(props.products)
        {
          console.log("pp le-"+props.products.length)
          pageNavigation()
        }
          
    }, [props.products])

   

    const pageNavigation = () => {
        let pageNav = [];
        if(props.products){

                const numPages= Math.ceil(props.totalProducts / ProductsPerPage);
                
                let activeClass = "";
                const activatPage = urlParams.page > 0 ? urlParams.page : 1;
                for (let p = 1; p <= numPages; p++) {
                    activeClass = (p == activatPage) ? "active" : ""
                    pageNav.push(<li className={`page-item ${activeClass}`}><Link key={p} className="page-link" to={{ pathname: `/products/p/${p}` }}>{p}</Link></li>);
                }
         }
        return pageNav;
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item disabled"><Link className="page-link" to="#">Previous</Link></li>
                {pageNavigation()}
                {/* <li className="page-item active"><Link className="page-link" to="/products/p/2">1</Link></li>
            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
             */}
                <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
            </ul>
        </nav>)
}

export default PageNavigation;