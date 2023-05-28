import './App.css';
import {
  createBrowserRouter, 
  RouterProvider, 
  Route,
  Outlet,
} from "react-router-dom"
import Authentication from './views/Authentication';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import Navbar from './components/Navbar';
import MyPlansHP from './views/MyPlansHP';

import "./style2.scss"
import "./style.scss"
import FormsHeader from './components/FormsHeader';
import WorkoutPlanForm from './views/WorkoutPlanForm';
import Q1 from './components/workoutPlanForm/Question1';
import Q2 from './components/workoutPlanForm/Question2';
import Q3 from './components/workoutPlanForm/Question3';
import Q4 from './components/workoutPlanForm/Question4';
import Q5 from './components/workoutPlanForm/Question5';
import Q6 from './components/workoutPlanForm/Question6';


import NutritionPlanForm from './views/NutritionPlanForm';
import NQ1 from './components/nutritionPlanForm/NQ1';
import NQ2 from './components/nutritionPlanForm/NQ2';
import NQ3 from './components/nutritionPlanForm/NQ3';
import NQ4 from './components/nutritionPlanForm/NQ4';
import NQ5 from './components/nutritionPlanForm/NQ5';
import NQ6 from './components/nutritionPlanForm/NQ6';


import AccountPage from './components/myPlans/AccountPage';
import Calendar from './components/myPlans/Calendar';
import AnalyticsPage from './components/myPlans/AnalyticsPage';
import WorkoutPage from './components/myPlans/WorkoutPage';
import WorkoutInfo from './components/myPlans/WorkoutInfo';
import WorkoutList from './components/myPlans/WorkoutsList';
import WorkoutList2 from './components/myPlans/WorkoutList2';
import WellDone from './components/myPlans/WellDone';
import Workout from './components/myPlans/Workout';
import NutritionPage from './components/myPlans/NutritionPage';
import Recipe from './components/myPlans/Recipe';
import ConnectionsHP from './views/ConnectionsHP';
import CHeader from './components/connections/ConnectionsHeader';
import PersonalTrainers from './components/connections/PersonalTrainers';
import Physiotherapists from './components/connections/Physiotherapists';
import WorkoutBuddies from './components/connections/WorkoutBuddies';
import Home from './views/Home';
import SubmitN from './components/nutritionPlanForm/Submit';
import SubmitW from './components/workoutPlanForm/SubmitW';


// React Router Dom Outlet 
/*
 An <Outlet> should be used in parent route element to render
 their child route elements. This allows nested UI to show up 
 when child routes are rendered. 
*/
 
const MyPlans = () => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  )
}

const Forms = () => {
  return (
    <>
      <FormsHeader />
      <Outlet />
    </>
  )
}

const Connections = () => {
  return (
    <>
      <CHeader />
      <Outlet />
    </>
  )
}

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
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/my-plans-hp',
    element: <MyPlans />,
    children:[
      {
        path:'/my-plans-hp',
        element: <MyPlansHP />
      },
      {
        path:'/my-plans-hp/my-account',
        element: <AccountPage />
      },
      {
        path:'/my-plans-hp/calendar',
        element: <Calendar />
      },
      ,
      {
        path:'/my-plans-hp/analytics',
        element: <AnalyticsPage />
      },
      {
        path:'/my-plans-hp/workout-page',
        element: <WorkoutPage />
      },
      {
        path:'/my-plans-hp/nutrition-page',
        element: <NutritionPage />
      },
      {
        path:'/my-plans-hp/connections',
        element: <ConnectionsHP />
      }
    ]
  },
  // because the following 3 elements does not require a navbar
    {
        path: '/my-plans-hp/workout-page/workout-list/workout-info',
        
        element: <WorkoutInfo />
    },
    {
          
          path: '/my-plans-hp/workout-page/workout-list2/workout-info',
        element: <WorkoutInfo />
    },
    {
        path: '/my-plans-hp/workout-page/workout-list2',
        element: <WorkoutList2 />
    },
    {
        path: '/my-plans-hp/workout-page/workout-list',
        element: <WorkoutList />
    },
    {
        path: '/my-plans-hp/workout-page/workout-list/workout-info/workout',

        element: <Workout />
    },
      {
          path: '/my-plans-hp/workout-page/workout-list2/workout-info/workout',
          
        element: <Workout />
    },
    {
        path: '/my-plans-hp/workout-page/workout-list/workout-info/workout/welldone',

        element: <WellDone />
    },
    {
        path: '/my-plans-hp/workout-page/workout-list2/workout-info/workout/welldone',

        element: <WellDone />
    },
      {
        path:'/my-plans-hp/nutrition-page/recipe/:id',
        element: <Recipe />
      },
  {
    path: '/workout-plan-form',
    element: <Forms/>,
    children: [
      {
        path: '/workout-plan-form',
        element: <WorkoutPlanForm />
      },
      {
        path: '/workout-plan-form/q1',
        element: <Q1 />
      },
      {
        path: '/workout-plan-form/q2',
        element: <Q2 />
      },
      {
        path: '/workout-plan-form/q3',
        element: <Q3 />
      },
      {
        path: '/workout-plan-form/q4',
        element: <Q4 />
        },
        
        {
            path: '/workout-plan-form/q5',
            element: <Q5 />
        },
        {
            path: '/workout-plan-form/q6',
            element: <Q6 />
        },
         {
            path: '/workout-plan-form/submit',
            element: <SubmitW />
        }
    ]
  },
  {
    path: '/nutrition-plan-form',
    element: <Forms/>,
    children: [
      {
        path: '/nutrition-plan-form',
        element: <NutritionPlanForm />
      },
      {
        path: '/nutrition-plan-form/nq1',
        element: <NQ1 />
      },
      {
        path: '/nutrition-plan-form/nq2',
        element: <NQ2 />
      },
      {
        path: '/nutrition-plan-form/nq3',
        element: <NQ3 />
      },
      {
        path: '/nutrition-plan-form/nq4',
        element: <NQ4 />
      },
      {
        path: '/nutrition-plan-form/nq5',
        element: <NQ5 />
      },
      {
        path: '/nutrition-plan-form/nq6',
        element: <NQ6 />
      },
      {
        path:'/nutrition-plan-form/submit',
        element: <SubmitN />
      }
    ]
  },
  {
    path: '/connections',
    element: <Connections/>,
    children: [
      {
        path: '/connections',
        element: <ConnectionsHP />
      },
      {
        path: '/connections/personal-trainers',
        element: <PersonalTrainers />
      },
      {
        path: '/connections/physiotherapists',
        element: <Physiotherapists />
      },
      {
        path: '/connections/workout-buddies',
        element: <WorkoutBuddies />
      }
    ]
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
