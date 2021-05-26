
import {

    Switch,
    Route,
} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';
import Demodrop from "./pages/demodrop/Demodrop";
import Contact from "./pages/contact/Contact";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import './App.css';
import MyDemos from "./pages/mydemos/MyDemos";
import Submissions from "./pages/Submission/Submissions";
import ViewSubmission from "./pages/viewSubmission/ViewSubmission";
import ViewComment from "./pages/Comment/ViewComment";
import WriteComment from "./pages/Comment/WriteComment";
import EditComment from "./pages/Comment/EditComment";



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

                  <route exact path ="/viewComment">
                      <ViewComment/>
                  </route>
                  <route exact path ="/writeComment">
                      <WriteComment/>
                  </route>
                  <route exact path ="/editComment">
                      <EditComment/>
                  </route>


              </Switch>

  );
}

export default App;
