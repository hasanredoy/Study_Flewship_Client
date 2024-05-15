import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllAssignmet from "../pages/allAssignment/AllAssignmet";
import CreateAssignment from "../pages/createAssignment/CreateAssignment";
import PendingAssignment from "../pages/pendingAssignemnt/PendingAssignment";
import MyAssignments from "../pages/MyAssignment/MyAssignments";
import UpdateAssignment from "../pages/updateAssignment/UpdateAssignment";
import AssignmentDetails from "../pages/assignmentDetails/AssignmentDetails";
import GiveMark from "../pages/giveMark/GiveMark";
import ErrorPage from "../pages/error/ErrorPage";
import PrivetRoute from "../pages/privetRoute/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element:<PrivetRoute><CreateAssignment></CreateAssignment></PrivetRoute>
      },
      {
        path:'/pendingAssignments',
        element:<PrivetRoute><PendingAssignment></PendingAssignment></PrivetRoute>
      },
      {
        path:'/pendingAssignment/:id',
        element:<PrivetRoute><GiveMark></GiveMark></PrivetRoute>,
        loader:({params})=>fetch(`https://crud-jwt-server-two.vercel.app/submittedAssignment/${params.id}`
        ,{credentials:"include"}
      )
      },
      {
        path:'/myAssignments',
        element:<PrivetRoute><MyAssignments></MyAssignments></PrivetRoute>
      },
      {
        path:'/update/:id',
        element:<PrivetRoute><UpdateAssignment></UpdateAssignment></PrivetRoute>,
        loader:({params})=>fetch(`https://crud-jwt-server-two.vercel.app/assignments/${params.id}`,
        {credentials:'include'}
          
        )
      },
      {
        path:'/assignments/:id',
        element:<PrivetRoute><AssignmentDetails></AssignmentDetails></PrivetRoute>,
        loader:({params})=>fetch(`https://crud-jwt-server-two.vercel.app/assignments/${params.id}`,{credentials:"include"})
      },
    ]

  },
  {
    path:'/login',
    element:<Login></Login>,
    errorElement:<ErrorPage></ErrorPage>
  },
  {
    path:'/register',
    element:<Register></Register>,
    errorElement:<ErrorPage></ErrorPage>
  },
]);
export default router;