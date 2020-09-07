import React from "react";
import { Switch, Route } from "react-router-dom";
import { Error404 } from "./Components/Exports/index";
import { Dashboard, Login, HomePage } from "./Containers/Exports/index";
import "./styles/App.css";

class App extends React.Component {
  render() {
    return (
      <>     
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/login' component={Login} />
            <Route path='/home' component={Dashboard} />
            <Route component={Error404} />
        </Switch>

      </>
    );
  }
}
export default App;