import { NavLink, Outlet } from 'react-router-dom';
import { getUsuario,logout } from '../../seguranca/Autenticacao';

const MenuPrivado = () => {
    const usuario = getUsuario();
    console.log(usuario.nome);
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" >
                    <i class="bi bi-stars" align="left" ></i>
                        STARSHIP GAMES
                        </a>
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
                            <li class="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact to="dash">Dashboards</NavLink>
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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {usuario ? "Usuário: " + usuario.nome : "Usuário" + usuario.nome}
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        {usuario ?
                                            <NavLink className="dropdown-item" exact to="/"
                                                onClick={() => logout()}>Logout</NavLink>
                                            :
                                            <NavLink className="dropdown-item" exact to="/login">Login</NavLink>}
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
};

export default MenuPrivado;