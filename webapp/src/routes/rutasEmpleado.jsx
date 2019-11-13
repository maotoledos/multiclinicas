import PaginaInicio from "../views/PaginaInicio/PaginaInicio";
import Pacientes from "../views/Pacientes/Pacientes";
import Habitaciones from "../views/Habitaciones/Habitaciones";

const dashboardRoutesEmpleado = [
  {
    path: "/home",
    name: "Home",
    icon: "pe-7s-home",
    component: PaginaInicio
  },
    {
        path: "/pacientes",
        name: "Pacientes",
        icon: "pe-7s-news-paper",
        component: Pacientes
    },
    {
        path: "/habitaciones",
        name: "Estado de Habitaciones",
        icon: "pe-7s-attention",
        component: Habitaciones
    },
  { redirect: true, path: "/", to: "/home", name: "HomePage" }
];



export default dashboardRoutesEmpleado;
