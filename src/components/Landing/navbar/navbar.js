
import logo from './logoclaro.png';

const Navbar = () => (

    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="Avatar Logo" style={{ width: '40px' }} className="rounded-pill ms-md-2" />
            </a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse ms-md-1" id="">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="servicios.html">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="sobreNosotros.html">Sobre nosotros</a>
                    </li>
                </ul>
                <div className="ms-md-auto">
                    <a className="btn btn-secondary" href='dashboard'>Dashboard</a>
                    <a className="btn btn-primary" href='dashboard/login'>Iniciar sesión</a>
                    <a className="btn btn-primary" href='/register'>Registrarse</a>
                </div>
            </div>
        </div>
    </nav>

);
export default Navbar;