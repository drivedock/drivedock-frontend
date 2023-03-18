import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import SideNavBar from "./pages/SideNavBar";
import Profile from "./pages/Profile";

function App() {
 return (
  <>
   <Switch>
    <Route path="/" exact>
     <HomePage />
    </Route>

    <Route path="/profile">
     <Profile />
    </Route>

    <Route path="*" exact>
     {"No Data"}
    </Route>
   </Switch>
  </>
 );
}

export default App;
