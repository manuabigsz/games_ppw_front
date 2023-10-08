import { NavLink, Outlet } from 'react-router-dom';

const Menu = () => {

    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">StarShip Games</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Manutenções
                                </a>
                                <ul class="dropdown-menu">
                                    <li><NavLink className="dropdown-item" exact to="games">Games</NavLink></li>
                                    <li><NavLink className="dropdown-item" exact to="jogadores">Jogadores</NavLink></li>
                                    <li><NavLink className="dropdown-item" exact to="categorias">Categorias</NavLink></li>
                                    <li><NavLink className="dropdown-item" exact to="Plataformas">Plataformas</NavLink></li>
                                    <li><NavLink className="dropdown-item" exact to="desenvolvedoras">Desenvolvedoras</NavLink></li>

                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
};

export default Menu;