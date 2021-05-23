import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./containers/HomePage.js";

const App = () => {
  return (
    <div className="App">
      {/* Component 1 */}
      <div className="container">
        <Router>
          <Switch>
            {/* HomePage */}
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
