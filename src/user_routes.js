// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
 import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//pages
import Home from "../src/views/WebSection/Home.js";
//import Home from "../src/views/WebSection/Home.js";
import Orders from "../src/views/AdminDashboard/Orders";
import ReviewOrder from "../src/views/AdminDashboard/ReviewOrder";


const userRoutes = [
  {
    path: "/profile",
    name: "Profile",
    //exact:true,
     icon: LibraryBooks,
     component: Orders,
    layout: "/user"
  },
  
  {
    path: "/order",
    name: "Order",
    //exact:true,
     icon: Dashboard,
     component: ReviewOrder,
    layout: "/user"
  },
//   {
//     path: "/Culture",
//     title: "Culture",
//     // icon: Dashboard,
//     // component: DashboardPage,
//     layout: "/web"
//   },
//   {
//     path: "/Science",
//     title: "Science",
//     // icon: Dashboard,
//     // component: DashboardPage,
//     layout: "/web"
//   },
//   {
//     path: "/Business",
//     title: "Business",
//     // icon: Dashboard,
//     // component: DashboardPage,
//     layout: "/web"
//   },
//   {
//     path: "/Politics",
//     title: "politics",
//     // icon: Dashboard,
//     // component: DashboardPage,
//     layout: "/web"
//   },
//   {
//     path: "/Health",
//     title: "health",
//     // icon: Dashboard,
//     // component: DashboardPage,
//     layout: "/web"
//   },
//   {
//     path: "/Technology",
//     title: "Technology",
//     // icon: Dashboard,
//     // component: DashboardPage,
//     layout: "/web"
//   },
  
  
];


export default userRoutes;
