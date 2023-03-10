
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import MainHome from './Components/MainHome';
import Register from './Components/Register';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/home',
      element: <MainHome></MainHome>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
