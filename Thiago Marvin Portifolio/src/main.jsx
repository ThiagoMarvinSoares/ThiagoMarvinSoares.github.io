import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import Home from './Views/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Views/About/About';
import Contact from './assets/components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
