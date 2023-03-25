import { Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import UserSignInPage from './pages/UserSignInPage'
import UserSignUpPage from './pages/UserSignUpPage'
import Profile from "./pages/Profile";
import './index.css'



function App() {
 return (
  <>
   <Switch>
    <Route path="/" exact>
     <HomePage />
    </Route>

    <Route path="/profile" exact>
     <Profile />
    </Route>

    <Route path="/signin" exact>
     <UserSignInPage />
    </Route>

    <Route path="/signup" exact>
     <UserSignUpPage />
    </Route>

    <Route path="*" exact>
     {"No Data"}
    </Route>
   </Switch>
  </>
 );
}

export default App;
