import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Map from "./components/map/Map";
import About from './components/about/About'
// import { Dashboard } from "@mui/icons-material";
import Dashboard from "./components/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/map",
    element: <Map />,
  },
  {
    path: "/services/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
