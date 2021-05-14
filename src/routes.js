// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
 import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//pages
import DashboardPage from "../src/views/AdminDashboard/Dashboard.js";
import Category from "../src/views/AdminDashboard/Category/AddCategory";
import Orders from "../src/views/AdminDashboard/Orders";
import ReviewOrder from "../src/views/AdminDashboard/ReviewOrder";

const AdmindashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  
  {
    path: "/Category",
    name: "Category",
    icon: LibraryBooks,
    component: Category,
    layout: "/admin"
  },
  {
    path: "/Orders",
    name: "Order",
    icon: MenuBookOutlinedIcon,
    component: Orders,
    layout: "/admin"
  },
  {
    path: "/review",
    name: "Review Order",
    icon: ShoppingCartIcon,
    component: ReviewOrder,
    layout: "/admin"
  },
  
  
];


export default AdmindashRoutes;
