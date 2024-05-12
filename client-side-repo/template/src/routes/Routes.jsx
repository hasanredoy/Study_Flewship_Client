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
        element:<CreateAssignment></CreateAssignment>
      },
      {
        path:'/pendingAssignments',
        element:<PendingAssignment></PendingAssignment>
      },
      {
        path:'/pendingAssignment/:id',
        element:<GiveMark></GiveMark>,
        loader:({params})=>fetch(`http://localhost:5000/submittedAssignment/${params.id}`)
      },
      {
        path:'/myAssignments',
        element:<MyAssignments></MyAssignments>
      },
      {
        path:'/update/:id',
        element:<UpdateAssignment></UpdateAssignment>,
        loader:({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
      },
      {
        path:'/assignments/:id',
        element:<AssignmentDetails></AssignmentDetails>,
        loader:({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
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