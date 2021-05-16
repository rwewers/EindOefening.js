
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
import './App.css';
import MyDemos from "./pages/Customer/mydemos/MyDemos";
import Submissions from "./pages/Customer/Submission/Submissions";
import ViewSubmission from "./pages/Customer/viewSubmission/ViewSubmission";



function App() {



    window.onunload = () => {
        // Clear the local storage
        window.localStorage.clear()
    }



    return (

              <Switch>
                  <Route exact path="/">
                      < Homepage />
                  </Route>
                  <Route exact path="/About">
                      <About />
                  </Route>
                  <route exact path="/Demodrop">
                      <Demodrop />
                  </route>
                  <Route exact path="/Contact">
                      <Contact />
                  </Route>

                  <Route exact path="/SignIn">
                      <SignIn />
                  </Route>
                  <Route exact path="/SignUp">
                      <SignUp />
                  </Route>
                  <route exact path ="/myDemos">
                      <MyDemos />
                  </route>
                  <route exact path ="/submissions">
                      <Submissions/>
                  </route>
                  <route exact path ="/viewSubmission">
                      <ViewSubmission/>
                  </route>

              </Switch>

  );
}

export default App;
