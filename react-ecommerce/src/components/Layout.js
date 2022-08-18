import { Fragment } from "react"
import Topbar from "./Topbar";
import MainNavbar from "./MainNavbar"
import Footer from "./Footer";
import ExternalJS from "./ExternalJS";

const Layout = (props) => {

    return (
        <Fragment>
            <Topbar></Topbar>
            <MainNavbar></MainNavbar>
                 {props.children}
            <Footer />
            <ExternalJS />
        </Fragment>);
}

export default Layout;