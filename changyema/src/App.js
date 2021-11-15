import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Blog from "./containers/Blog";
import Home from "./containers/Home";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
