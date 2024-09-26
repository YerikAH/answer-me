import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { Sidebar } from "@/layout";
import {
  Case,
  Cases,
  CreateCase,
  CreateQuestion,
  Dashboard,
  Home,
  Lawyer,
  Lawyers,
  Login,
  NotFound,
  Question,
  Questions,
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
      {
        element: <CreateCase />,
        path: ROUTES.CREATE_CASE,
      },
      {
        element: <Questions />,
        path: ROUTES.QUESTIONS,
      },
      {
        element: <CreateQuestion />,
        path: ROUTES.CREATE_QUESTION,
      },
      {
        element: <Question />,
        path: ROUTES.QUESTION,
      },
    ],
  },
];

const createRouter = createBrowserRouter(router);
export default createRouter;
