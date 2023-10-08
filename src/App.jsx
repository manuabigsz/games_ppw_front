import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/cjs/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './componentes/telas/Menu';
import Home from './componentes/telas/Home';
import Categoria from "./componentes/telas/categoria/Categoria";
import Plataforma from "./componentes/telas/plataforma/Plataforma";
import Desenvolvimento from "./componentes/telas/desenvolvimento/Desenvolvimento";
import Jogadores from "./componentes/telas/jogadores/Jogadores";
import Games from "./componentes/telas/games/Games";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
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
      }
    ]
  }
])

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;