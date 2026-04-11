import { createBrowserRouter } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router";
import type { ReactNode } from "react";
import { AppLayout } from "./components/layout/AppLayout";
import { LandingPage } from "./components/pages/LandingPage";
import { AboutPage } from "./components/pages/AboutPage";
import { ToursPage } from "./components/pages/ToursPage";
import { SingleTourPage } from "./components/pages/SingleTourPage";
import { CreateTourPage } from "./components/pages/CreateTourPage";
import { UserDashboard } from "./components/pages/UserDashboard";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? children : <Navigate to="/" />;
}
export const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    children: [
      { path: "/", element: <LandingPage /> },

      { path: "/tours", element: <ToursPage /> },
      { path: "/tours/:id", element: <SingleTourPage /> },
      //{ path: "/tourbooking/:id", element: <BookTourPage /> },
      { path: "/aboutus", element: <AboutPage /> },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/create-tour",
        element: (
          <ProtectedRoute>
            <CreateTourPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
