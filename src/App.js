import react from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';
import TopMenu from './components/TopMenu';
import Demodrop from "./pages/demodrop/Demodrop";
import Contact from "./pages/contact/Contact";
import './App.css';



function App() {
  return (
      <body className="bodycontainer">
      <Router>
          <TopMenu />
              <Switch>
                  <Route exact path="/">
                      < Homepage />
                  </Route>
                  <Route exact path="/About">
                      <About />
                  </Route>
                  <Route exact path="/Demodrop">
                      <Demodrop />
                  </Route>
                  <Route exact path="/Contact">
                      <Contact />
                  </Route>
              </Switch>
      </Router>
      </body>
  );
}

export default App;
