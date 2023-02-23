import Navbar from './navbar/navbar';
import Body from './body/body';
import Footer from './footer/footer';

const Landing = function () {

    return (
        <main>
            <Navbar></Navbar>
            <Body></Body>
            <Footer></Footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
                crossorigin="anonymous"></script>

        </main>
    );
};
export default Landing;