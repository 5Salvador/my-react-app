import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  Push  from './Pages/Push/Push.jsx'
import Jeremias from './Pages/Jeremias/Jeremias.jsx';
import { Contact }   from './Pages/Contact/Contact.jsx';
import About from './Pages/About/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "push",
    element: <Push />
  },
  {
    path: "jeremias",
    element: <Jeremias />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "about",
    element: <About />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
