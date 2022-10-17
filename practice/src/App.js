import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Orders from './components/Orders';
import Register from './components/Register';
import Main from './layout/Main';
import PrivateRoutes from './routers/PrivateRoutes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/home', 
          element: <Home />
        },
        {
          path: '/orders', 
          element: <PrivateRoutes>
            <Orders />
          </PrivateRoutes>
        },
        {
          path: '/register', 
          element: <Register />
        },
        {
          path: '/login', 
          element: <Login />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
