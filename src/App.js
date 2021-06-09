
import {

    Switch,
    Route,
} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import About from './pages/About/About';
import Demodrop from "./pages/Demodrop/Demodrop";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import './App.css';
import MyDemos from "./pages/mydemos/MyDemos";
import NewSubmissions from "./pages/Submission/NewSubmissions";
import ViewSubmission from "./pages/viewSubmission/ViewSubmission";
import ViewComment from "./pages/Comment/ViewComment";
import WriteComment from "./pages/Comment/WriteComment";
import EditComment from "./pages/Comment/EditComment";
import OldSubmissions from "./pages/Submission/OldSubmissions";



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
                  <Route exact path="/SignIn">
                      <SignIn />
                  </Route>
                  <Route exact path="/SignUp">
                      <SignUp />
                  </Route>
                  <route exact path ="/myDemos">
                      <MyDemos />
                  </route>
                  <route exact path ="/newsubmissions">
                      <NewSubmissions/>
                  </route>
                  <route exact path ="/oldsubmissions">
                      <OldSubmissions/>
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
