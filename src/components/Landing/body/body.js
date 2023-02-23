
import biciLeft from './biciLeft.png';
import biciRight from './biciRight.png';

const Body = () => (
    <div>
        <div className="container-fluid">
            <div className="row">
<div className="col-12 bienvenida d-flex flex-column align-items-center justify-content-center color-change-2x">
                    <h1 className="display-1 colorInicio tracking-in-expand"><strong>Bik Bik Bike</strong></h1>
                    <section className="search-sec">
                        <div className="container">
                            <form action="./servicios.html" method="post" noValidate="novalidate">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
<input type="text" className="form-control search-slt" placeholder="Busca tu estación" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
<input type="date" className="form-control search-slt" name="Llegada" placeholder="Llegada" />
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
<select className="form-select search-slt" id="exampleFormControlSelect1">
                                                    <option selected>Tipo de vehículo</option>
                                                    <option>Bicicleta</option>
                                                    <option>Patinete</option>
                                                    <option>Buggy</option>
                                                    <option>Carrito del Mercadona robado</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
<button type="submit" className="btn btn-primary wrn-btn">Buscar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Alquila en cualquier lugar, viaja a todas partes</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 d-flex flex-column">
                    <h3 className="text-center mt-4">La mejor búsqueda en tiempo real</h3>
                    <img className="img-fluid imagenPortada" src={biciLeft} />
<p className="text-center mt-5">Bicis buenísimas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
                        ex dui. Quisque et est sit
amet purus varius interdum et sit amet justo. Curabitur id laoreet sapien, vel auctor neque. Etiam quis semper
metus. Etiam congue condimentum diam a facilisis. In sem quam, porta eget viverra id, imperdiet ut nunc. In
                        maximus dui vestibulum suscipit mattis.</p>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column">
                    <h3 className="text-center mt-4">Precios para todos</h3>
                    <img className="img-fluid imagenPortada" src={biciRight} />
<p className="text-center mt-5">Bicis buenísimas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
                        ex dui. Quisque et est sit
amet purus varius interdum et sit amet justo. Curabitur id laoreet sapien, vel auctor neque. Etiam quis semper
metus. Etiam congue condimentum diam a facilisis. In sem quam, porta eget viverra id, imperdiet ut nunc. In
                        maximus dui vestibulum suscipit mattis.</p>
                </div>
            </div>
        </div>

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0}
                    className="active" aria-current="true" aria-label="Slide 1" />
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} 
aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="fakeimg"><img src="./slider1.jpg" /></div>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>First slide label</h3>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="fakeimg"><img src="./slider2.jpg" /></div>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Second slide label</h3>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="fakeimg"><img src="./slider3.jpg" /></div>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Third slide label</h3>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    </div>
);
export default Body;