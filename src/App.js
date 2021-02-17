
import {

    Switch,
    Route,
} from "react-router-dom";
import Homepage from './pages/Customer/homepage/Homepage';
import About from './pages/Customer/about/About';
import Demodrop from "./pages/Customer/demodrop/Demodrop";
import Contact from "./pages/Customer/contact/Contact";
import SignIn from "./pages/Customer/SignIn/SignIn";
import SignUp from "./pages/Customer/SignUp/SignUp";
import Logged_in_homepage from "./pages/Company/Homepage/Logged_in_homepage";
import './App.css';
import Submissions from "./pages/Company/Submissions/Submissions";
import SelectedSubmission from "./pages/Company/SelectedSubmission/SelectedSubmission";



function App() {
  return (

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

                  <Route exact path="/SignIn">
                      <SignIn />
                  </Route>
                  <Route exact path="/SignUp">
                      <SignUp />
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

  );
}

export default App;
