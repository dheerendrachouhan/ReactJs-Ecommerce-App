import Layout from "../components/Layout";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeCategories from "../components/home/HomeCategories";
import HomeFeatured from "../components/home/HomeFeatured";
import { Fragment } from "react";

const Home = () => {
   return (
   <Fragment>
       <HomeCarousel />
       <HomeCategories />
       <HomeFeatured />
   </Fragment>)
}

export default Home;