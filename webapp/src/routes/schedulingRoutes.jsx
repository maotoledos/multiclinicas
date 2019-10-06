import PaginaInicio from "../views/PaginaInicio/PaginaInicio";
import Pacientes from "../views/Pacientes/Pacientes";
import InventarioMedicina from "../views/InventarioMedicina/InventarioMedicina";
import Empleados from "../views/Empleados/Empleados";
import Habitaciones from "../views/Habitaciones/Habitaciones";
import HistorialPaciente from "../views/HistorialPaciente/HistorialPaciente";

const dashboardRoutes = [
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
        path: "/inventario",
        name: "Inventario Medicina",
        icon: "pe-7s-copy-file",
        component: InventarioMedicina
    },
    {
        path: "/empleados",
        name: "Empleados", 
        icon: "pe-7s-graph2",
        component: Empleados
    },
    {
        path: "/habitaciones",
        name: "Estado de Habitaciones",
        icon: "pe-7s-user",
        component: Habitaciones
    },
    {
        path: "/historial",
        name: "Historial del Paciente",
        icon: "pe-7s-power",
        component: HistorialPaciente
    },
  { redirect: true, path: "/", to: "/home", name: "HomePage" }
];



export default dashboardRoutes;
