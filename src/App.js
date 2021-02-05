
import {

    Switch,
    Route,
} from "react-router-dom";
import Homepage from './pages/Customer/homepage/Homepage';
import About from './pages/Customer/about/About';
import Demodrop from "./pages/Customer/demodrop/Demodrop";
import Contact from "./pages/Customer/contact/Contact";
import Login from "./pages/Customer/login/Login";
import Logged_in_homepage from "./pages/Company/Homepage/Logged_in_homepage";
import './App.css';
import Submissions from "./pages/Company/Submissions/Submissions";
import SelectedSubmission from "./pages/Company/SelectedSubmission/SelectedSubmission";



function App() {
  return (
      <body className="bodycontainer">

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

                  <Route exact path="/Login">
                      <Login />
                  </Route>
                  <route exact path ="/logged-in-homepage">
                      <Logged_in_homepage />
                  </route>
                  <route exact path ="/logged-in-submissions">
                      <Submissions />
                  </route>
                  <route exact path ="/logged-in-selected-submission">
                      <SelectedSubmission />
                  </route>
              </Switch>
      </body>
  );
}

export default App;
