import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/layout/AppLayout";
import { RegisterTourPage } from "./components/pages/RegisterTourPage";
import { LandingPage } from "./components/pages/LandingPage";
import { AboutPage } from "./components/pages/AboutPage";
import { ToursPage } from "./components/pages/ToursPage";
import { LoginPage } from "./components/pages/LoginPage";
import { SingleTourPage } from "./components/pages/SingleTourPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/tours", element: <ToursPage /> },
      { path: "/tours/id", element: <SingleTourPage /> },
      { path: "/tour-register", element: <RegisterTourPage /> },
      { path: "/aboutus", element: <AboutPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);
