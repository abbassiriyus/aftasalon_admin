
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Additional from "./pages/Additional";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { useState } from "react";

function App() {
const [login, setLogin]=useState(sessionStorage.getItem("token"))
// const [login,setLogin]=useState(true)
  return (
    <div className="App">
      
{!login?(<Switch>
   <Route path="/sign-up" exact component={SignUp} />
   <Route path="*" exact component={SignIn} />
   </Switch>):(
        <Switch>
        <Main> 
          <Redirect from="*" to="/dashboard" />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/cars" component={Tables} />
          <Route exact path="/additional" component={Additional} />
          <Route exact path="/users" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} /> 
        </Main>
      </Switch>)}
        
    </div>
  );
}

export default App;
