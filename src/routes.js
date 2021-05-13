// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BarChartIcon from '@material-ui/icons/BarChart';
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
 import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
// import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
// core components/views for Admin layout
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
