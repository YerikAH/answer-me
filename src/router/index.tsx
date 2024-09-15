import {
  Cases,
  Dashboard,
  Lawyers,
  Login,
  NotFound,
  Register,
  Settings,
  Users,
} from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { Sidebar } from "@/layout";

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
  // {
  //   element: <Home />,
  //   path: ROUTES.HOME,
  // },
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
      // {
      //   element: <AttendanceGroup />,
      //   path: ROUTES.ATTENDANCE_GROUP,
      //   children: [
      //     {
      //       element: <Attendance />,
      //       path: ROUTES.ATTENDANCE,
      //     },
      //   ],
      // },
      // {
      //   element: <Settings />,
      //   path: ROUTES.SETTINGS,
      // },
      // {
      //   element: <Settings />,
      //   path: ROUTES.USERS,
      // },
    ],
  },
];

const createRouter = createBrowserRouter(router);
export default createRouter;
