import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { Sidebar } from "@/layout";
import {
  Case,
  Cases,
  Dashboard,
  Home,
  Lawyer,
  Lawyers,
  Login,
  NotFound,
  Register,
  Settings,
  User,
  Users,
} from "@/pages";

const router = [
  {
    element: <Login />,
    path: ROUTES.LOGIN,
  },
  {
    element: <Register />,
    path: ROUTES.REGISTER,
  },
  {
    element: <NotFound />,
    path: ROUTES.NOT_FOUND,
  },
  {
    element: <Home />,
    path: ROUTES.HOME,
  },
  {
    element: <Sidebar />,
    path: ROUTES.HOME,
    children: [
      {
        element: <Dashboard />,
        path: ROUTES.DASHBOARD,
      },
      {
        element: <Settings />,
        path: ROUTES.SETTINGS,
      },
      {
        element: <Cases />,
        path: ROUTES.CASES,
      },
      {
        element: <Lawyers />,
        path: ROUTES.LAWYERS,
      },
      {
        element: <Users />,
        path: ROUTES.USERS,
      },
      {
        element: <User />,
        path: ROUTES.USER,
      },
      {
        element: <Case />,
        path: ROUTES.CASE,
      },
      {
        element: <Lawyer />,
        path: ROUTES.LAWYER,
      },
    ],
  },
];

const createRouter = createBrowserRouter(router);
export default createRouter;
