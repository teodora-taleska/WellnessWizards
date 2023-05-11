import './App.css';
import {
  createBrowserRouter, 
  RouterProvider, 
  Route,
} from "react-router-dom"
import Authentication from './views/Authentication';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';

import "./style.scss"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Authentication/>
  },
  {
    path: '/sign-in',
    element: <SignIn/>
  },
  {
    path: '/sign-up',
    element: <SignUp/>
  }
])

function App() {
  return (
    <div className="app">
      <div className='container'>
        <RouterProvider router={router} />
      </div>
      
    </div>
  );
}



export default App;
