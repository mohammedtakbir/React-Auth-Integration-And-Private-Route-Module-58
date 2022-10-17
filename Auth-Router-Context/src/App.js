import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Orders from './components/Orders';
import Register from './components/Register';
import Main from './layout/Main';
import PrivateRoute from './Routes/PrivateRoute';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          index: true,
          element: <PrivateRoute>
            <Home />
          </PrivateRoute>
        },
        {
          path: '/home',
          element: <PrivateRoute>
            <Home />
          </PrivateRoute>
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/orders',
          element: <PrivateRoute>
            <Orders />
          </PrivateRoute>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
