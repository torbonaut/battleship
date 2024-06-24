import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gdpr",
    element: <p>GDPR</p>,
  },
  {
    path: "/terms",
    element: <p>Terms</p>,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
