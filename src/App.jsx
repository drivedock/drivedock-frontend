import { createContext } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserSignInPage from "./pages/UserSignInPage";
import UserSignUpPage from "./pages/UserSignUpPage";
import DashboardPage from "./pages/DashboardPage";

import "./index.css";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
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

          <Route path="/forgot-password" exact>
            <ForgotPasswordPage />
          </Route>

          <Route path="/signup" exact>
            <UserSignUpPage />
          </Route>
          <DashboardPage />

          <Route path="*" exact>
            <div className="flex m-10">
              <h3>404 - Page not found</h3>
            </div>
          </Route>
        </Switch>
      </AuthContext.Provider>
    </>
  );
}

export default App;
