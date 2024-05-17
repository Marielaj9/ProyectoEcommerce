import {createBrowserRouter} from "react-router-dom";
import Home from "../components/Home";
import Perfil from "../pages/Perfil";
import NavHeaders from "../layouts/NavHeaders";
import Productos from "../pages/Productos";
import Carrito from "../pages/Carrito";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/nav',
            element: <NavHeaders />
        },
        {
            path: '/perfil',
            element: <Perfil />
        },
        {
            path: '/productos',
            element: <Productos />
        },
        {
            path:'/carrito',
            element: <Carrito />
        }

    ]
);
export default router;