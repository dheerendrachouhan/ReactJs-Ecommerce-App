import { Helmet } from "react-helmet";

const ExternalJS = () => {

     return (<Helmet>
          <script src="https://code.jquery.com/jquery-3.4.1.min.js" ></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" ></script>
          <script type="text/babel" src="assets/js/easing.min.js"  async/>
          <script type="text/babel" src="assets/js/images-loded.min.js" async />
          <script type="text/babel" src="assets/js/isotope.min.js" async />
          <script type="text/babel" src="assets/js/main.js" async />
          <script type="text/babel" src="assets/js/owl.carousel.js" async />
    </Helmet>)

}

export default ExternalJS;