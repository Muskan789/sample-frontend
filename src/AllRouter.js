import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "./layouts/Admin";
import WebLayout from "./layouts/WebLayout";
 import UserLayout from "./layouts/UserLayout";
 import Login from "./Auth/Login/Login";
// import UserProfile from "views/UserProfile/UserProfile.js";

const hist = createBrowserHistory();
export default function AllRouter(props){
    return(
        <Router history={hist}>
            <div>
                <div>

                <Redirect to="/" />

      <Route path="/admin"  component={Admin} />
       <Route path="/web" component={WebLayout}/>
       <Route path="/user"  component={UserLayout}/>
     <Route path="/login" exact strict component={Login}/>
     <Route path="/" exact strict component={WebLayout}/>
       {/*<Route path="/rtl" component={RTL}/> */}
      {/* <Route path="/user"  component={UserProfile} /> */}

                </div>
            </div>
        </Router>

    );
}