import react from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';
import TopMenu from './components/TopMenu';



function App() {
  return (
      <Router>
          <TopMenu />
              <Switch>
                  <Route exact path="/">
                      < Homepage />
                  </Route>
                  <Route exact path="/About">
                      <About />
                  </Route>
              </Switch>
      </Router>
  );
}

export default App;
