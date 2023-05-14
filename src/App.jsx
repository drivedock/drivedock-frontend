import { createContext } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserSignInPage from "./pages/UserSignInPage";
import UserSignUpPage from "./pages/UserSignUpPage";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import "./index.css";
export const AuthContext = createContext(null);

function App() {
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated: true }}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/signin" exact>
            <UserSignInPage />
          </Route>

          <Route path="/signup" exact>
            <UserSignUpPage />
          </Route>

          <ProtectedRoute path="/profile" exact component={Profile} />

          <Route path="*" exact>
            {"No Data"}
          </Route>
        </Switch>
      </AuthContext.Provider>
    </>
  );
}

export default App;
