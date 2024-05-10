import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllAssignmet from "../pages/allAssignment/AllAssignmet";
import CreateAssignment from "../pages/createAssignment/CreateAssignment";
import PendingAssignment from "../pages/pendingAssignemnt/PendingAssignment";
import MyAssignments from "../pages/MyAssignment/MyAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/assignments',
        element:<AllAssignmet></AllAssignmet>
      },
      {
        path:'/createAssignments',
        element:<CreateAssignment></CreateAssignment>
      },
      {
        path:'/pendingAssignments',
        element:<PendingAssignment></PendingAssignment>
      },
      {
        path:'/myAssignments',
        element:<MyAssignments></MyAssignments>
      },
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
]);
export default router;