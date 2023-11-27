import { createBrowserRouter, RouterProvider } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/cjs/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MenuPublico from "./componentes/telas/MenuPublico";
import Home from './componentes/telas/Home';
import Categoria from "./componentes/telas/categoria/Categoria";
import Plataforma from "./componentes/telas/plataforma/Plataforma";
import Desenvolvimento from "./componentes/telas/desenvolvimento/Desenvolvimento";
import Jogadores from "./componentes/telas/jogadores/Jogadores";
import Games from "./componentes/telas/games/Games";
import AppexCharts from "./componentes/telas/dashboards/appex_charts_page";
import MenuPrivado from "./componentes/telas/MenuPrivado";
import Login from "./componentes/telas/login/Login";

const router = createBrowserRouter([
  {
    path : "/",
    element : <MenuPublico/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "login",
        element :  <Login/>
      }              
    ]
  },
  {
    path: "/privado",
    element: <MenuPrivado />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path : "categorias",
        element : <Categoria/>
      },
      {
        path : "Plataformas",
        element : <Plataforma/>
      },
      {
        path : "desenvolvedoras",
        element : <Desenvolvimento/>
      },
      {
        path : "jogadores",
        element : <Jogadores/>
      },
      {
        path : "games",
        element : <Games/>
      },
      {
        path : "dash",
        element : <AppexCharts/>
      },
      {
        path : "login",
        element :  <Login/>
      }   
    ]
  }
])

function App() {
  return (
      <RouterProvider  router={router}/>
  );
}

export default App;